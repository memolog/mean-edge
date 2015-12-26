var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: {
    'app': '../frontend/src/static/site/boot.ts',
    'vendor': '../frontend/src/static/site/vendor.ts'
  },
  output: {
    path: path.resolve(__dirname + '/../frontend/public/static/site/'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],
  resolve: {
    extensions: ['','.ts','.js']
  },
  module: {
    loaders: [
      {
        test: /.ts$/,
        loader: 'ts-loader',
        query: {
          // copied from https://github.com/AngularClass/angular2-webpack-starter/blob/master/webpack.config.js
          'ignoreDiagnostics': [
            // 2403, // 2403 -> Subsequent variable declarations
            // 2300, // 2300 -> Duplicate identifier
            // 2374, // 2374 -> Duplicate number index signature
            // 2375  // 2375 -> Duplicate string index signature
          ]
        },
      }
    ]
  }
}