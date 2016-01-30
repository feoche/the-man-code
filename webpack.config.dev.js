var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.scss$/,
      loader: 'style!css?sourceMap!sass?sourceMap',
      include: path.join(__dirname, 'scss')
    },{
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    },{
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    },{
      test: /\.png$/, loader: "url-loader?limit=100000"
    },{
      test: /\.jpg$/, loader: "file-loader"
    }]
  }
};
