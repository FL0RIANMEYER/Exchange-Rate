/**
 * transform currencies Object to Array with object entries
 * @param  {Object} currencies to wrap in array
 * @return {Array}             wrapped currencies
 */
export default currencies => {
    const transformation = [];

    // Order the most important currencies first
    transformation.push({ symbol: 'USD', name: currencies.USD });
    transformation.push({ symbol: 'EUR', name: currencies.EUR });
    transformation.push({ symbol: 'BTC', name: currencies.BTC });

    for (let symbol in currencies) {
        // Skip previously added currencies
        if(symbol == 'USD' || symbol == 'EUR' || symbol == 'BTC') { continue; }

        transformation.push({ symbol, name: currencies[symbol] });
    }

    return transformation;
};
