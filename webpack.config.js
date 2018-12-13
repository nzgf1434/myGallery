const path = require('path');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/myGallery.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'myGallery.js',
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
           presets: ['env', 'stage-0']
        }
    }]
  },
  devtool: 'source-map'
}