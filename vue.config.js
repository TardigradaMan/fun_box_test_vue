module.exports = {
  // productionSourceMap: false,
  // publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/styles/_variables.scss"; @import "@/assets/styles/_fonts.scss";`
      }
    }
  }
}
