/* eslint no-console: 0 */
const express = require('express');
const webpack = require('webpack');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressStaticGzip = require('express-static-gzip');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const config = require('../webpack.dev');

require('dotenv').config();

const app = express();

const compiler = webpack(config);
const webpackDevMiddleware = devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
});
const webapckHotMiddleware = hotMiddleware(compiler, {
  log: console.log, // eslint-disable-line
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
});

const isProd = process.env.NODE_ENV === 'production';

app.use(logger('dev'));
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());
app.use(cookieParser());

if (!isProd) {
  app.use(webpackDevMiddleware);
  app.use(webapckHotMiddleware);

  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(express.static(path.join(__dirname, '..', 'client/src')));

  app.get(/^\/(?!api\/)(?!assets\/)(?!.*\.json$).*/, (req, res) => {
    res.sendFile(path.join(compiler.outputPath, 'index.html'));
  });
} else {
  /* Serve Static Assets */
  // const staticMiddleware = express.static('dist');
  // server.use(staticMiddleware);

  app.use(
    expressStaticGzip('dist', {
      enableBrotli: true,
    }),
  );
  app.get('/', (req, res) => {
    res.redirect('###My Website URL');
  });
}

// error handlers
app.use((req, res) =>
  res.status(404).send({ message: `Route${req.url} Not found.` }),
);

if (app.get('env') === 'production') {
  app.use((err, req, res) => {
    console.error(err);
    res.status(err.status || 500).send({
      error: {},
    });
  });
} else {
  app.use((err, req, res) => {
    console.error(err);
    res.status(err.status || 500).send({
      error: err,
    });
  });
}

const PORT = process.env.PORT || 9007;
app.listen(PORT, () => {
  console.log(`Sever is listening on ${PORT} in ${process.env.NODE_ENV}`);
});
