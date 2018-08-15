const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// Compress Files
const BrotliPlugin = require('brotli-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  mode: 'production',
  entry: {
    vendor: ["react", "lodash"],
    main: ['./client/index.js']
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      dry: false
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.s?css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        },
      canPrint: true
      }
    }),
    new UglifyJSPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true,
      cache: true,
      parallel: true,
      uglifyOptions: {
        ecma: 8,
        warnings: false,
        ie8: true,
        safari10: true,
        output: {
          comments: false
        },
        compress: {
          dead_code: true
        }
      }
    }),
    new BrotliPlugin(),
    new BundleAnalyzerPlugin({
      generateStatsFile: true
    })
  ]
}

module.exports = merge(baseConfig, config);