import spdy       from 'spdy';
import http       from 'http';
import express    from 'express';
import bodyParser from 'body-parser';

import PATHS from '../config/paths';
import { httpsCrt as cert, httpsKey as key } from '../config/keys';

import EventListener from './eventListener';
import routes        from './routes';


const Server = function(httpsPort, httpPort, services) {
    const app           = express();
    const http2Server   = spdy.createServer({ key, cert }, app);
    const eventListener = new EventListener();


    this.on = eventListener.on;

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static(PATHS.compiled));

    for (let name in routes)
    { routes[name](app, services, eventListener); }

    http.createServer((req, res) => {
        res.writeHead(301, { 'Location': 'https://' + (req.headers.host && req.headers.host.replace(httpPort, httpsPort)) + req.url });
        res.end();
    }).listen(httpPort);

    http2Server.listen(httpsPort, (error) => {
        if (error) { console.error(error); }
        console.log(`Server is running on Port ${httpsPort}`);
    });
};


export default Server;
