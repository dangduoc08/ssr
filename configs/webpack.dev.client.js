const webpackMerge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.dev.base')

const clientConfig = {
  entry: {
    client: [
      'regenerator-runtime/runtime',
      'core-js/stable',
      './client'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../views')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.ejs',
      filename: 'index.ejs',
      dom: '<%- app  %>',
      initialState: '<%- initialState %>',
      minify: false
    })
  ]
}

module.exports = webpackMerge(baseConfig, clientConfig)