require('babel-runtime/regenerator');
require('babel-register');
require('webpack-hot-middleware/client?reload=true');
require('./styles/main.css');
require('../public/index.html');
require('./app');

var a = async(args) => {
  const { a, b } = args
  await console.log('Arrow Function!');
  console.log('Done');
}

a({ a:1, b:2 });