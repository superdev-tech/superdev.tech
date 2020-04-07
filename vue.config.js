module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL || '/',
  configureWebpack: {
    devtool: 'source-map',
  },
};
