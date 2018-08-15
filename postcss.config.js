module.exports = {
  indent: 'postcss',
  plugins: [
    require('autoprefixer')({ browsers: 'last 2 versions' })
  ]
}