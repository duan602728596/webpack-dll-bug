const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  target: ['web', 'es5'],
  entry: {
    dll: ['react']
  },
  output: {
    path: path.join(__dirname, 'dll'),
    library: {
      name: '[name]_[hash:5]',
      type: 'var'
    }
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll/manifest.json'),
      name: '[name]_[hash:5]'
    })
  ],
  experiments: {
    outputModule: true
  }
};