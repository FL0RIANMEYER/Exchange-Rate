export default (amount, from, to, { rates, timestamp }) => {
    if(!rates) { return; }

    const exchange = amount / rates[from] * rates[to];

    return { exchange, timestamp };
};
