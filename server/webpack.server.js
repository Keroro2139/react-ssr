const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');

const config = {
    target: 'node',
    entry: './src/index.js',
    mode: process.env.NODE_ENV,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
