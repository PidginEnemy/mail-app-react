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
                include: path.join(__dirname, 'client')
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(sass|scss)$/, loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'sass',
                    'sass-resources'
                ]
            }
        ]
    },
    sassResources: [
        './client/assets/styles/variables.scss',
        './client/assets/styles/mixins.scss'
    ]
}