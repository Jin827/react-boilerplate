require('./styles/main.scss');
require('../public/index.html');
require('./app');

var a = async(args) => {
  const { a, b } = args
  await console.log('Arrow Function!');
  console.log('Done');
}

a({ a:1, b:2 });

console.log(`Environment is ${process.env.NODE_ENV}`);