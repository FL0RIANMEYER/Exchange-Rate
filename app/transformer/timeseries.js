
export default result => {
    const values = result.filter(r => !!r);
    const labels = values.map(({timestamp}) => new Date(timestamp).toISOString().split('T')[0]);

    return {
        labels,
        datasets: [{
            label: 'Timeseries',
			fillColor: 'rgba(220,220,220,0.2)',
			strokeColor: 'rgba(220,220,220,1)',
			pointColor: 'rgba(220,220,220,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
            data: values.map(result => result.exchange),
        }],
    };
};
