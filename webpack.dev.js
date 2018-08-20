const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  mode: 'development',
  entry: {
    main: [
      // 'babel-register',
      // 'babel-runtime/regenerator',
      // Hot Reloading
      'webpack-hot-middleware/client?/__webpack_hmr&timeout=20000&reload=true',
      // React Stateful Hot Reloading
      'react-hot-loader/patch',
      './client/index.js',
    ],
  },
  devServer: {
    publicPath: '/public/',
    contentBase: 'dist',
    overlay: true,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      reasons: true,
      chunks: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  devtool: 'cheap-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = merge(baseConfig, config);
