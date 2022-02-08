import fileReader from './server_lib/cssFileList'
import cssCopier from './server_lib/cssCopier'
import fs from 'fs-extra'

var cssModule = '',
  fileList,
  cssEntryFile
let devFolder = 'dev/css_module_copy'

try {
  const override = fs.readJSONSync('./local_override.json')
  cssModule = override.cssModule
  cssEntryFile = `@/${cssModule}/index.scss`
  fileList = fileReader(cssModule)
} catch (e) {
  console.log(e)
  cssModule = 'node_modules/@thisisdeploy/scaffold-css'
  cssEntryFile = `@thisisdeploy/scaffold-css/index.scss`
  fileList = fileReader(cssModule)
}
cssCopier(cssModule, devFolder)

export default {
  static: true,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=swap&subset=latin-ext' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [cssEntryFile],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  generate: {
    routes: fileList[1]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
      config.module.rules.push({
        test: /\.scss-doc$/i,
        loader: 'raw-loader'
      })
    }
  },
  publicRuntimeConfig: {
    fileList: fileList[0],
    cssModule,
    devFolder
  }
}
