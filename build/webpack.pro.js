'use strict'
/**
 * webpack. vue production config
 */

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './../client/src/index.js'), // 入口文件
  },
  output: {
    filename: '[name].[hash].bunble.js',
    path: path.resolve(__dirname, '../client/public'), // 输出路径
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'] // vue loader
      }, {
        test: /\.css$$/,
        use: ['vue-style-loader', 'css-loader'] // css loader
      },
    ]
  },
  plugins: [
    // html 自动打包引入
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './../client/src/index.html'),
      filename: 'index.html'
    }),
    // 自动清理
    new CleanWebpackPlugin(),
    // vue-loader need
    new VueLoaderPlugin(),
  ]
}
