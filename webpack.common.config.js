var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './client/app.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
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
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  sassResources: [
    './client/assets/styles/variables.scss',
    './client/assets/styles/mixins.scss'
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
    })
  ]
};