import express from 'express';

const server = express();

const isProd = process.env.NODE_ENV === 'production';
if (!isProd) {
  const webpack = require('webpack');
  const config = require('../webpack.dev');
  const compiler = webpack(config);

  const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    config.devServer,
  );
  const webapckHotMiddleware = require('webpack-hot-middleware')(compiler);

  server.use(webpackDevMiddleware);
  server.use(webapckHotMiddleware);
}
// Serve Static Assets
// const staticMiddleware = express.static('dist');
// server.use(staticMiddleware);
const expressStaticGzip = require('express-static-gzip');

server.use(expressStaticGzip('dist', {
  enableBrotli: true,
}));

const PORT = process.env.PORT || 9007;
server.listen(PORT, () => {
  console.log(`Sever is listening on ${PORT} in ${process.env.NODE_ENV}`);
});
