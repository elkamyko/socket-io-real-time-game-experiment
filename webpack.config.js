const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build', 'client'),
  },
  devServer: {
      contentBase: './build/client',
      port: 3000
  },
  devtool: 'inline-source-map',
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src', 'client', 'index.html'),
      })
  ]
};