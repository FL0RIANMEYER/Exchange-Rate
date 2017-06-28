export default currencies => {
    const transformation = [];

    transformation.push({ symbol: 'USD', name: currencies.USD });
    transformation.push({ symbol: 'EUR', name: currencies.EUR });
    transformation.push({ symbol: 'BTC', name: currencies.BTC });

    for (let symbol in currencies) {
        if(symbol == 'USD' || symbol == 'EUR' || symbol == 'BTC') { continue; }
        transformation.push({ symbol, name: currencies[symbol] });
    }

    return transformation;
};
