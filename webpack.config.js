const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  target: ['web', 'es5'],
  module:  {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: {
                    browsers: [
                      'last 2 versions',
                      'last 10 Chrome versions',
                      'last 1 year',
                      'IE 11'
                    ]
                  },
                  modules: false
                }]
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  entry: {
    index: [path.join(__dirname, 'src/index.js')]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: path.join(__dirname, 'dll/manifest.json')
    })
  ],
  experiments: {
    outputModule: true
  }
};