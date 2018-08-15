const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  mode: 'development',
  entry: {
    vendor: ["react", "lodash"],
    main: [
      'babel-register',
      'babel-runtime/regenerator',
      // Hot Reloading 
      'webpack-hot-middleware/client?reload=true',
      // React Stateful Hot Reloading
      'react-hot-loader/patch',
      './client/index.js'
    ]
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    hot: true,
    stats: {
      colors: true
    }
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(baseConfig, config);