var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  // devtool: 'source-map',
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
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new ExtractTextPlugin("[name].css")
  ],
  resolve: {
    extensions: ['','.ts','.js']
  },
  module: {
    loaders: [
      {
        test: /.ts$/,
        loader: 'ts-loader'
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style','css!postcss!sass')
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname + "/../frontend/node_modules")]
  },
  postcss: function(){
    return [autoprefixer]
  }
}