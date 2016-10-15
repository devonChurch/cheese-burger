const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
    context: `${__dirname}/src`,
    devtool: 'source-map',
    entry: ['babel-polyfill', './entry.js'],
    output: {
        path: `${__dirname}/dist`,
        filename: 'cheese-burger.js'
    },
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loaders: ['eslint'], include: `${__dirname}/src`}
        ],
        loaders: [
            {test: /\.js$/, loaders: ['babel'], include: `${__dirname}/src`},
            {test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'], include: `${__dirname}/src`}
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './index.html', to: './index.html'}
        ])
    ],
    postcss() {
        return [precss, autoprefixer];
    },
};
