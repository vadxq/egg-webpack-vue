/**
 * webpack.config
 */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // mode: 'production',
  entry: {
    app: './client/src/index.js', // 入口文件
  },
  output: {
    filename: '[name].[hash].js', // 输出文件名
    // path: path.join(__dirname, './client/public'),
    path: process.env.NODE_ENV === 'production' // 输出路径
      ? path.join(__dirname, './client/public')
      : path.join(__dirname, './client/.dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'] // vue loader
      }, {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'] // css loader
      }
    ]
  },
  plugins: [
    // html 自动打包引入
    new HtmlWebpackPlugin({
      template:'./client/src/index.html',
      filename:'index.html'
    }),
    // clean old files
    new CleanWebpackPlugin(),
    // vue-loader need
    new VueLoaderPlugin(),
  ]
}