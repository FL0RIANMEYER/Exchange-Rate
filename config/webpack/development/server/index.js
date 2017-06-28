const path = require('path');
const JAVASCRIPT = require('./javascript');
// const css        = require('./css');
// const image      = require('./image');

const PATHS = require('../../../paths');

const RULES = [
    JAVASCRIPT,
];

module.exports = {
    // devtool: 'sourcemap',
    context: PATHS.root,
    entry: {
        server: ['babel-polyfill', path.join(PATHS.server, 'index.js')],
    },
    target: 'node',
    devtool: 'source-map',
    output: {
        path: PATHS.compiled,
        filename: '[name].dev.js',
        publicPath: PATHS.public,
        libraryTarget: 'commonjs2',
    },
    module: { rules: RULES },
};
