/* eslint no-console: 0 */
import express from 'express';
import webpack from 'webpack';
import expressStaticGzip from 'express-static-gzip';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.dev';

const server = express();

const compiler = webpack(config);
const webpackDevMiddleware = devMiddleware(
  compiler,
  config.devServer,
);
const webapckHotMiddleware = hotMiddleware(compiler);

const isProd = process.env.NODE_ENV === 'production';
if (!isProd) {
  server.use(webpackDevMiddleware);
  server.use(webapckHotMiddleware);
}

// Serve Static Assets
// const staticMiddleware = express.static('dist');
// server.use(staticMiddleware);

server.use(expressStaticGzip('dist', {
  enableBrotli: true,
}));

const PORT = process.env.PORT || 9007;
server.listen(PORT, () => {
  console.log(`Sever is listening on ${PORT} in ${process.env.NODE_ENV}`);
});
