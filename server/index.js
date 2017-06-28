import { hostname, httpsPort, httpPort } from '../config/env';
import jwt from './jwt';

import Server      from './server';
import services    from './services';
import transformer from './transformer';


const server = new Server(httpsPort, httpPort, services);


server.on('signup', (user) =>
    services.mailHandler.sendToken({ hostname, port: httpsPort }, jwt.createToken(user, '30m'), user));

server.on('getCurrencies', async () => await services.cacheHandler.getValue('currencies'));

server.on('getExchange', async ({ amount, from, to }) =>
    transformer.exchange(amount, from, to, await services.cacheHandler.getValue('latest')));

server.on('getTime-series', async ({ amount, from, to, dateFrom, dateTo }) =>
    await Promise.all(transformer.dateToSteps(dateFrom, dateTo).map(async date =>
        transformer.exchange(amount, from, to, await services.cacheHandler.getValue(date)))));

// initMemCache();
initMemCacheTestData();


async function initMemCache() {
    services.memCache.setValue('currencies', await services.openExchange.getCurrencies());
    setInterval(() => {
        services.openExchange.getLatest();
    }, 24*60*60*100);
}

function initMemCacheTestData() {
    // Use mocked data for development to reduce rare api requests
    const currencies = require('../test/dumyData/currencies.json');
    const latest     = require('../test/dumyData/latest.json');

    services.memCache.setValue('currencies', currencies);
    services.memCache.setValue('latest',     latest    );
}
