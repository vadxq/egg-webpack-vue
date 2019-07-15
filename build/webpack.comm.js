const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports.config = {
  output: {
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$$/,
        use: ['css-loader']
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}

