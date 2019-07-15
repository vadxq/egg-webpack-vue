'use strict'
/**
 * webpack. react devolopment config
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './../react/src/index.js'), // 入口文件
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../react/dist'), // 输出路径
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    // html 自动打包引入
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './../react/src/index.html'),
      filename: 'index.html'
    }),
    // 自动清理
    new CleanWebpackPlugin(),
  ]
}
