const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  mode: 'development',
  entry: {
    vendor: ['react', 'react-dom'],
    main: [
      // 'babel-register',
      // 'babel-runtime/regenerator',
      // Hot Reloading
      'webpack-hot-middleware/client?reload=true',
      // React Stateful Hot Reloading
      'react-hot-loader/patch',
      './client/index.js',
    ],
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    hot: true,
    stats: {
      colors: true,
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    }],
  },
  devtool: 'eval',
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = merge(baseConfig, config);
