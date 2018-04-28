const path = require('path')

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  api: 'http://localhost:3000/',
  src: path.resolve('./src'),
  dist: path.resolve('./dist')
}
