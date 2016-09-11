var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
path = require('path');
var NODE_ENV = process.env.NODE_ENV || 'production';
var config = require('./webpack.config');
var prod_config = Object.assign({}, config, {
  entry: [
    'whatwg-fetch',
    './src/index'
  ],
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV),
      }
    })
  ],
});

module.exports = prod_config;
