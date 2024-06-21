const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/data/Screen/deyis/dist/",
  filenameHashing: false,
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
      fallbackWarn: false,
      missingWarn: false,
      silentTranslationWarn: true,
      silentFallbackWarn: true
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
  },
  chainWebpack: config => {
    config.module
      .rule('fonts')
      .test(/\.(ttf|otf|eot|woff|woff2)$/)
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        options = {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
        return options
      })
      .end()
  }
});
