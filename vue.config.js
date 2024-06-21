

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  //publicPath: "./",
  //publicPath: "https://development.welcomeyou.de/main/modules/registration/dist/",
  //publicPath: "https://portal.welcomeyou.de/main/modules/registration/dist/",
  publicPath: "https://development.welcomeyou.de/data/Screen/deyis/dist/",
  //publicPath: "https://portal.welcomeyou.de/data/TranslationUebersicht/dist/",
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
});