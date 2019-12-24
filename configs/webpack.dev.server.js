const webpackMerge = require('webpack-merge')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.dev.base')

const serverConfig = {
  target: 'node',
  entry: {
    server: [
      'regenerator-runtime/runtime',
      'core-js/stable',
      './server'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../server_build')
  },
  externals: [nodeExternals()]
}

module.exports = webpackMerge(baseConfig, serverConfig)