import path    from 'path';
import express from 'express';

import { authorization } from '../middleware';

import PATHS from '../../config/paths';


export default (app, services, eventListener) => {
    const router = express.Router();

    app.use(router);

    router.get('/', authorization(services), (req, res) => {
        res.sendFile(path.join(PATHS.client, '/index.html'));
    });

    router.post('/signup', (req, res) => {
        if(!req.body || !req.body.user) { res.status(400).send('Invalid user parameter'); return; }

        eventListener.callListeners('signup', req.body.user);
        res.send('Check your mails');
    });


    return router;
};
