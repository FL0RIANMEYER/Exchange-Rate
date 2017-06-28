import express from 'express';


export default (app, services, eventListener) => {
    const router = express.Router();

    app.use('/api', router);

    /**
     * Request available currencies
     *
     * @name Request available currencies
     * @route {GET} /api/currencies
     * @code {200} if the request is sucesfull
     * @response {Object} currencies { symbol: name }
     * @response {String} currencies.symbol shorthand symbol representing the name
     * @response {String} currencies.name long written name
     */
    router.get('/currencies', async (req, res) => {
        res.send(await eventListener.callListeners('getCurrencies'));
    });

    return router;
};
