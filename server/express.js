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
const webapckHotMiddleware = require('webpack-hot-middleware')(compiler);

server.use(webpackDevMiddleware);
server.use(webapckHotMiddleware);

const staticMiddleware = express.static('dist');

server.use(staticMiddleware);

server.listen(9007, () => {
  console.log('Sever is listening');
})