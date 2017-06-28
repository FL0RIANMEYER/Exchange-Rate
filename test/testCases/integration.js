import chai      from 'chai';
import sinon     from 'sinon';
import sinonChai from 'sinon-chai';
import mockery   from 'mockery';


chai.use(sinonChai);
const should = chai.should();

const modulesUnderTest = {
    openExchange: '../../server/services/openExchange',
    memCache:     '../../server/services/memCache',
    cacheHandler: '../../server/services/cacheHandler',
};
const keysMock = { exchangeRate: '123' };

let services;
let openExchange;
let memCache;
let cacheHandler;


describe('cacheHandler', () => {
    beforeEach(() => {
        mockery.registerAllowable(modulesUnderTest.openExchange);
        mockery.registerAllowable(modulesUnderTest.memCache);
        mockery.registerAllowable(modulesUnderTest.cacheHandler);
        mockery.registerMock('../../config/keys.js', keysMock);
        mockery.enable({ useCleanCache: true,
            warnOnReplace: false,
            warnOnUnregistered: false,
        });


        const OpenExchange = require(modulesUnderTest.openExchange).default;
        const MemCache     = require(modulesUnderTest.memCache).default;
        const CacheHandler = require(modulesUnderTest.cacheHandler).default;

        services     = { request: sinon.spy() };
        openExchange = new OpenExchange(services);
        memCache     = new MemCache();
        cacheHandler = new CacheHandler(memCache, openExchange);


        services.openExchange = openExchange;
        services.memCache     = memCache;
        services.cacheHandler = cacheHandler;
    });
    describe('clean cache', () => {
        it('returns exchange date with API request', async () => {
            const exchangeData = { 'rates': { 'AED': 3.67295 } };
            const requestMock = sinon.spy(() => exchangeData);

            services.request = requestMock;


            const response = await services.cacheHandler.getValue('latest');


            response.should.be.deep.equal(exchangeData);
            requestMock.should.be.calledWith('openexchangerates.org', '/api/latest.json');
            requestMock.should.be.calledOnce;
        });
        it('returns undefined ', async () => {
            const exchangeData = { 'rates': { 'AED': 3.67295 } };
            const requestMock = sinon.spy(() => exchangeData);

            services.request = requestMock;


            const response = await services.cacheHandler.getValue('exchange');

            should.equal(response, undefined);
            requestMock.should.not.be.called;
        });
    });
});
