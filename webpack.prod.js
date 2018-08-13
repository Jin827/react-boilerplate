const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    main: ['./client/index.js']
  },
  mode: 'production',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          },
        ],
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attrs: ['img:src']
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'assets/svg/[name].[ext]',
        },
      },
    ]
  },
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.s?css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
          canPrint: true
        }
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css'
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ]
}