var config = require('./webpack.common.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OfflinePlugin = require('offline-plugin');

config.module.loaders.push([
  {
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loader: 'file?name=img/[name].[ext]?[hash]&hash=sha512&digest=hex'
  },
  {
    test: /^((?!\.module).)*(sass|scss)$/,
    loader: ExtractTextPlugin.extract('style','!css!sass!sass-resources')
  },
  {
    test: /\.module.(sass|scss)$/,
    loader: ExtractTextPlugin.extract('style','!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader!sass-resources')
  }
]);
config.plugins.push(
  new ExtractTextPlugin('style.min.css'),
  new OfflinePlugin()
);

module.exports = config;