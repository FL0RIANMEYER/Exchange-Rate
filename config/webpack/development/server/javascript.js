module.exports = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: ['es2015', 'stage-0'],
    },
};
