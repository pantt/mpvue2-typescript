var utils = require('./utils')
var config = require('../config')
// var isProduction = process.env.NODE_ENV === 'production'
// for mp
var isProduction = true

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },

          ts: [ //添加对应vue的loader
            'babel-loader',
            {
               //loader: 'ts-loader',
              loader: 'awesome-typescript-loader',
              options: {
                // errorsAsWarnings: true,
                useCache: true,
              }
            }
          ],
  fileExt: config.build.fileExt
}
