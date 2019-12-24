const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: [
      './src'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname + '../../dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
}