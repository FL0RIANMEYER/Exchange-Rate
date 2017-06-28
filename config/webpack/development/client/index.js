const path = require('path');
const PATHS = require('../../../paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', path.join(PATHS.client, '/views/index.jsx')],
    output: {
        path: PATHS.compiled,
        filename: '[name].js',
        publicPath: PATHS.public,
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    'presets': ['react', 'es2015', 'stage-0'],
                },
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                modules: true,
                                camelCase: true,
                                localIdentName: '[name]_[local]_[hash:base64:5]',
                                minimize: true,
                            },
                        },
                    ],
                }),
            },
        ],
    },
};
