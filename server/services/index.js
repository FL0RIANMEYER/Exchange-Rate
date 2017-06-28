import request      from './request';
import mailHandler  from './mailHandler';
import OpenExchange from './openExchange';
import MemCache     from './memCache';
import CacheHandler from './cacheHandler';


const services     = { request, mailHandler };
const openExchange = new OpenExchange(services);
const memCache     = new MemCache();
const cacheHandler = new CacheHandler(memCache, openExchange);


services.openExchange = openExchange;
services.memCache     = memCache;
services.cacheHandler = cacheHandler;


export { openExchange, request, memCache, cacheHandler, mailHandler };
export default services;
