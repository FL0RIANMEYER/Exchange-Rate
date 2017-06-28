import path    from 'path';
import express from 'express';

import { authorization } from '../middleware';

import PATHS from '../../config/paths';


export default (app, services, eventListener) => {
    const router = express.Router();

    app.use(router);

    /**
     * Serve initial markup
     *
     * @name Serve index
     * @route {GET} /
     */
    router.get('/', authorization(services), (req, res) => {
        res.sendFile(path.join(PATHS.client, '/index.html'));
    });

    /**
     * Register user and send login mail
     *
     * @name Sign up new or existing user
     * @route {POST} /
     * @body {String} user mailaddress to send login/verify token
     * @code {200} if the request is sucesfull
     * @code {400} if the request fail because the body param missing
     * @response {String} 
     */
    router.post('/signup', (req, res) => {
        if(!req.body || !req.body.user) { res.status(400).send('Invalid user parameter'); return; }

        eventListener.callListeners('signup', req.body.user);
        res.send('Check your mails');
    });


    return router;
};
