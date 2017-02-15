var config = require('./webpack.common.config');

config.devtool = 'source-map';
config.devServer = {
  proxy: [],
  historyApiFallback: true
};
config.module.loaders.push([
  {
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loader: 'url-loader?limit=100000'
  },
  {
    test: /^((?!\.module).)*(sass|scss)$/,
    loader: 'style!css!sass!sass-resources'
  },
  {
    test: /\.module.(sass|scss)$/,
    loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader!sass-resources'
  }
]);

module.exports = config;