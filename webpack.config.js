var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var NODE_ENV = process.env.NODE_ENV || 'development';
var DEBUG = NODE_ENV !== 'production';

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:4000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: 'index.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV),
      }
    })
  ],
  devServer: {
    publicPath: '/assets/',
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    noInfo: false,
    port: 4000
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.css$/,
        loader: DEBUG ? 'style!css' : ExtractTextPlugin.extract('css')
      }
    ]
  }
};
