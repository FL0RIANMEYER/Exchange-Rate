import { freeRequests, authResuests } from '../policies';


export default services => (req, res, next) => {
    // trust x-forwarded only if own reverse proxy
    const ip    = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const rate  = (services.memCache.getValue(`connection_${ip}`) || 0) + 1;
    const limit = (req.userToken && authResuests) || freeRequests;


    res.set('X-RateLimit-Limit',     limit);
    res.set('X-RateLimit-Remaining', rate <= limit ? limit - rate : 0);

    if(rate > limit)
    { res.status(429).send('{ error: "rate limiting" }'); return; }

    services.memCache.setValue(`connection_${ip}`, rate);

    next();
};
