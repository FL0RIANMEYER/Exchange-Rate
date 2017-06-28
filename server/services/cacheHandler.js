
export default function(memCache, exchangeRequest) {
    this.getValue = async key => {
        const cacheResult = memCache.getValue(key);

        if(cacheResult      ) { return cacheResult; }
        if(key == 'currencies') { return await exchangeRequest.getCurrencies(); }
        if(key == 'latest'  ) { return await exchangeRequest.getLatest(); }
        if(key.match(/(\d{4})-(0[1-9]|1[0-2])-(\3([12]\d|0[1-9]|3[01])|[1-9]‌​)/))
        { return await exchangeRequest.getHistorical(key); }
    };
}
