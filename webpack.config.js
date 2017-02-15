var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './client/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        proxy: [],
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                loaders: ['babel'],
                include: [
                  path.join(__dirname, 'client'),
                  /node_modules\/hls\.js/
                ]
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            { test: /\.css$/, loader: 'style!css' },
            {
                test: /^((?!\.module).)*(sass|scss)$/,
                loader: 'style!css!sass!sass-resources'
            },
            {
                test: /\.module.(sass|scss)$/,
                loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader!sass-resources'
            }
        ]
    },
    sassResources: [
        './client/assets/styles/variables.scss',
        './client/assets/styles/mixins.scss'
    ]
}