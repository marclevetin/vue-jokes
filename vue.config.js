const path = require('path')

const host = '0.0.0.0'
const port = 8080

module.exports = {
  lintOnSave: false,
  baseUrl: process.env.NODE_ENV === 'production' ? '/vue-jokes/' : '/',
  devServer: {
    port,
    host,
    hotOnly: true,
    disableHostCheck: true,
    clientLogLevel: 'warning',
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },
  }
}