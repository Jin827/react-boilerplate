import express from 'express';
import path from 'path';

const server = express();

const webpack = require('webpack');
const config = require('../webpack.dev');
const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);

server.use(webpackDevMiddleware);

const staticMiddleware = express.static('dist');

server.use(staticMiddleware);

server.listen(9000, () => {
  console.log('Sever is listening');
})