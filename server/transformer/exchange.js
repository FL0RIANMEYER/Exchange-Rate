/**
 * Transform amount to exchange with currencie A->B={exchange,timestamp} 
 * @param  {Number} amount    Value to exchange
 * @param  {String} from      currencie
 * @param  {String} to        currencie
 * @param  {String} rates     exchange rate: A->B=rate
 * @param  {String} timestamp time for exchange
 * @return {Object}           { exchange, timestamp }
 */
export default (amount, from, to, { rates, timestamp }) => {
    if(!rates) { return; }

    const exchange = amount / rates[from] * rates[to];

    return { exchange, timestamp };
};
