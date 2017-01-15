//var path = require('path');
//var webpack = require('webpack');

module.exports = {
  entry: './app',
  output: { path: './build', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js$/,
         loader: 'babel',
         exclude: /node_modules/,
         query: {
           presets: ["es2015"]
         }
      }
    ]
  },
    devServer : {
      port : 3000,
      inline : true
    }
};
