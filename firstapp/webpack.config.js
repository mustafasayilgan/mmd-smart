const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './index.js',
  output: {
    filename: 'app.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  }
};

module.exports = config;