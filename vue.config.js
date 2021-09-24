const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? process.env.PROJECT_NAME
    : './',
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/'),
        "components": path.resolve(__dirname, 'src/components'),
      }
    }
  }
}