const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
// Compress Files
const BrotliPlugin = require('brotli-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const baseConfig = require('./webpack.base');

const config = {
  mode: 'production',
  entry: {
    vendor: ['react', 'lodash'],
    main: ['./client/index.js'],
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          minChunks: 2,
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [
      new UglifyJSPlugin({
        test: /\.js($|\?)/i,
        sourceMap: true,
        cache: true,
        parallel: true,
        uglifyOptions: {
          mangle: true,
          ecma: 8,
          warnings: false,
          ie8: true,
          safari10: true,
          output: {
            comments: false,
          },
          compress: {
            dead_code: true,
          },
        },
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: cssnano,
        cssProcessorOptions: {
          discardComments: { removeAll: true },
        },
        canPrint: true,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      dry: false,
    }),
    new BrotliPlugin(),
  ],
};

module.exports = merge(config, baseConfig);
