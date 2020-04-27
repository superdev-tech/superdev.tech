module.exports = {
  publicPath: '/',

  configureWebpack: {
    devtool: 'source-map',
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
};
