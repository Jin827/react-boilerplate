const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// Compress Files
const BrotliPlugin = require('brotli-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production'
console.log('WEBPACK QQQQQ ', process.env.NODE_ENV);
module.exports = {
  mode: process.env.NODE_ENV,
  entry: devMode ? {
    vendor: ["react", "react-dom"],
    main: [
      'babel-register',
      'babel-runtime/regenerator',
      // Hot Reloading 
      'webpack-hot-middleware/client?reload=true',
      // React Stateful Hot Reloading
      'react-hot-loader/patch',
      './client/index.js'
    ]
  }: {
    vendor: ["react", "react-dom", "lodash"],
    main: ['./client/index.js']
  }
  ,
  output: {
    filename: devMode ? '[name]-bundle.js' : '[name]-bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  devtool: devMode ? 'inline-source-map' : 'source-map',
  devServer: devMode ? {
    contentBase: 'dist',
    overlay: true,
    hot: true,
    stats: {
      colors: true
    }
  } : null,
  optimization: devMode ? {
    splitChunks: {
      automaticNameDelimiter: "-",
      cacheGroups: {
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  } : null,
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
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader },
          { loader: 'css-loader', 
            options: { 
              sourceMap: true,
              importLoaders: 1 
            }
          },
          {
            loader: 'postcss-loader',
            options: devMode ? {
              sourceMap: true
            } : {}
          },
          { loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
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
          name: devMode ? 'assets/[name].[ext]' : 'assets/[hash].[ext]'
        },
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: devMode ? 'assets/[name].[ext]' : 'assets/[hash].[ext]'
        },
      },
      {
        test: /\.md$/,
        use: [
          { loader: 'markdown-with-front-matter-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      hash: devMode ? false : true
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',

    }),
    devMode ? 
    new webpack.HotModuleReplacementPlugin() : 
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
    new UglifyJSPlugin(),
    new BrotliPlugin(),
    new BundleAnalyzerPlugin({
      generateStatsFile: true
    })
  ]
}