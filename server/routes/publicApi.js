import express from 'express';


export default (app, services, eventListener) => {
    const router = express.Router();

    app.use('/api', router);

    router.get('/currencies', async (req, res) => {
        res.send(await eventListener.callListeners('getCurrencies', req.body));
    });

    return router;
};
