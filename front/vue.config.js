module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack:{
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk:{
        name: 'runtime'
      },
      minimize: true
    }  
  }
}