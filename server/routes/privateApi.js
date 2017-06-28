import express from 'express';

import middleware from '../middleware';


export default (app, services, eventListener) => {
    const router = express.Router();

    app.use('/api', middleware.map(mdw => mdw(services)), router);

    /**
     * Request time-series for a given interval with 10 datapoints of exchange rates
     *
     * @name Request time-series
     * @route {GET} /api/time-series
     * @code {200} if the request is sucesfull
     * @code {400} if query parameter is missing
     * @code {401} if auth with invalid or expired token
     * @code {429} if rate limit reached
     * @query {String} amount   value to exchange
     * @query {String} from     currency
     * @query {String} to       currency
     * @query {String} dateFrom start interval at
     * @query {String} dateTo   end interval at
     * @response {Array}  exchange [{exchange:value,timestamp:time}]
     * @response {String} exchange.exchange for given timestamp
     * @response {String} exchange.timestamp for given exchangerate
     */
    router.get('/time-series', async (req, res) => {
        if(!req.query.amount   ||
           !req.query.from     ||
           !req.query.to       ||
           !req.query.dateFrom ||
           !req.query.dateTo) { res.status(400).send('Invalid query parameter'); return; }

        res.send(await eventListener.callListeners('getTime-series', req.query));
    });

    /**
     * Request latest exchange rates
     *
     * @name Request latest exchange
     * @route {GET} /api/exchange
     * @code {200} if the request is sucesfull
     * @code {400} if query parameter is missing
     * @code {401} if auth with invalid or expired token
     * @code {429} if rate limit reached
     * @query {String} amount   value to exchange
     * @query {String} from     currency
     * @query {String} to       currency
     * @response {Object} exchange { rates: { symbol: exchange }, timestamp: time }
     * @response {String} exchange.timestamp for given timestamp
     * @response {String} exchange.rates.symbol shorthand symbol representing the currency
     * @response {String} exchange.rates.exchange for given exchangerate
     */
    router.get('/exchange', async (req, res) => {
        if(!req.query.amount ||
           !req.query.from   ||
           !req.query.to) { res.status(400).send('Invalid query parameter'); return; }

        res.send(await eventListener.callListeners('getExchange', req.query));
    });

    return router;
};
