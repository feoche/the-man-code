var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: 'static/'
  },
  postcss: function () {
    return [autoprefixer];
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("[name].css")
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!postcss!sass?sourceMap'),
      include: path.join(__dirname, 'scss')
    },{
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url?limit=10000&minetype=application/font-woff"
    },{
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file"
    },{
      test: /\.(png|jpg)$/, loader: "url?limit=10000&name=[path][name].[ext]?[hash]"
    },{
      test: /\.mp3$/,
      loader: "file"
    }]
  }
};
