import express from 'express';

import middleware from '../middleware';


export default (app, services, eventListener) => {
    const router = express.Router();

    app.use('/api', middleware.map(mdw => mdw(services)), router);

    router.get('/time-series', async (req, res) => {
        if(!req.query.amount   ||
           !req.query.from     ||
           !req.query.to       ||
           !req.query.dateFrom ||
           !req.query.dateTo) { res.status(400).send('Invalid query parameter'); return; }

        res.send(await eventListener.callListeners('getTime-series', req.query));
    });

    router.get('/exchange', async (req, res) => {
        if(!req.query.amount ||
           !req.query.from   ||
           !req.query.to) { res.status(400).send('Invalid query parameter'); return; }

        res.send(await eventListener.callListeners('getExchange', req.query));
    });

    return router;
};
