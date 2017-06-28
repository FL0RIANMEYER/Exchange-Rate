const nodeExternals           = require('webpack-node-externals');
const webpackSourceMapSupport = require('webpack-source-map-support');
const ExtractTextPlugin       = require('extract-text-webpack-plugin');
// const PrepackWebpackPlugin    = require('prepack-webpack-plugin').default;


module.exports = () => {
    const node = {
        __dirname: true,
        __filename: true,
    };

    let serverConfig = require(`./webpack/${process.env.NODE_ENV}/server`);
    serverConfig.node = node;
    serverConfig.externals = [nodeExternals()];

    let clientConfig = require(`./webpack/${process.env.NODE_ENV}/client`);
    clientConfig.node = node;

    // var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

    serverConfig.plugins = serverConfig.plugins || [];
    // serverConfig.plugins.push(new BundleAnalyzerPlugin());
    serverConfig.plugins.push(new webpackSourceMapSupport());
    // serverConfig.plugins.push(new PrepackWebpackPlugin({ prepack: { compatibility: 'jsc-600-1-4-17' } }));


    clientConfig.plugins = clientConfig.plugins || [];
    // clientConfig.plugins.push(new BundleAnalyzerPlugin());
    clientConfig.plugins.push(new ExtractTextPlugin({ filename: '[name].css', allChunks: true }));
    // clientConfig.plugins.push(new PrepackWebpackPlugin({ prepack: { compatibility: 'jsc-600-1-4-17' } }));

    return [serverConfig, clientConfig];
    // return [serverConfig];
};
