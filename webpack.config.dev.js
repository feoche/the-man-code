var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:1337/static/'
  },
  postcss: function () {
    return [autoprefixer];
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
      loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap'],
      include: path.join(__dirname, 'scss')
    },{
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url?limit=10000&minetype=application/font-woff"
    },{
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file"
    },{
      test: /\.(png|jpg)$/, loader: "url?limit=10000&name=[path][name].[ext]?[hash]"
    }]
  }
};
