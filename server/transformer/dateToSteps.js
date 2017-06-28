export default (dateFrom, dateTo, NUMBER_OF_STEPS = 10) => {
    const start = new Date(dateFrom).valueOf();
    const end   = new Date(dateTo).valueOf();

    const step = (start - end) / NUMBER_OF_STEPS;
    const interval = [];


    for (let i = 0; i < NUMBER_OF_STEPS; i++) {
        const date = start + (step * i);
        interval.push(new Date(date).toISOString().split('T')[0]);
    }

    return interval;
};
