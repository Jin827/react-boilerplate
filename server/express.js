import express from 'express';
import path from 'path';
const server = express();

const isProd = process.env.NODE.ENV === "production";
if (!isProd) {
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
}
const staticMiddleware = express.static('dist');
server.use(staticMiddleware);

const PORT = process.env.PORT || 9007
server.listen(PORT, () => {
  console.log(`Sever is listening on ${PORT}`);
})