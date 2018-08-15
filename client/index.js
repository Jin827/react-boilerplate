require('./styles/main.scss');
require('../public/index.html');
require('./app');

var a = async(args) => {
  const { a, b } = args
  await console.log('1. Arrow Function Works!');
  console.log('2. async/await Done.');
}

a({ a:1, b:2 });

console.log(`Environment is ${process.env.NODE_ENV}`);