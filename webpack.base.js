const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const babelConfig = require('./.babelrc.js');

const NODE_ENV = process.env.NODE_ENV;
const devMode = NODE_ENV !== 'production';
const isTest = NODE_ENV === 'test';

module.exports = {
  output: {
    filename: devMode ? 'bundle.js' : 'bundle.[hash].js',
    chunkFilename: devMode
      ? '[name].lazy-chunk.js'
      : '[name].lazy-chunk.[hash].js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/',
  },
  resolve: { extensions: ['.js', '.jsx', '.json'] },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              indent: 'postcss',
              plugins: [
                autoprefixer({
                  browsers: 'last 2 versions',
                }),
              ],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: ['client/styles/main.scss'],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attrs: ['img:src'],
        },
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: devMode ? 'assets/[name].[ext]' : 'assets/[hash].[ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: devMode ? 'assets/[name].[ext]' : 'assets/[hash].[ext]',
        },
      },
      {
        test: /\.(gif|eot|woff|woff2|ttf|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.md$/,
        loader: 'markdown-with-front-matter-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['public/dist']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[chunkhash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[chunkhash].css',
    }),
    isTest
      ? new BundleAnalyzerPlugin({
          generateStatsFile: true,
        })
      : null,
  ].filter(Boolean),
};
