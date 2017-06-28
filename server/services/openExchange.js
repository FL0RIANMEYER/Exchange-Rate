import { exchangeRate as apiKey } from '../../config/keys.js';


export default function(services) {
    this.getCurrencies = async () => {
        const response = await services.request('openexchangerates.org', '/api/latest.json', {
            query: [`app_id=${apiKey}`],
        });

        return services.memCache.setValue('currencies', response);
    };

    this.getLatest = async () => {
        const response = await services.request('openexchangerates.org', '/api/latest.json', {
            query: [`app_id=${apiKey}`],
        });

        return services.memCache.setValue('exchange', response);
    };

    this.getHistorical = async (date) => {
        if(!date) { throw new Error('Invalid date parameter'); }
        const response = await services.request('openexchangerates.org', `/api/historical/${date}.json`, {
            query: [`app_id=${apiKey}`],
        });

        return services.memCache.setValue(date, response);
    };
}
