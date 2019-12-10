const fileReader = require('./server_lib/cssFileList')
const cssCopier = require('./server_lib/cssCopier')

let cssModule = '',
  fileList,
  devFolder = 'dev/css_module_copy'

try {
  const override = require('./local_override.js')
  cssModule = override.cssModule
  fileList = fileReader(cssModule)
} catch (e) {
  console.log(e)
  cssModule = 'node_modules/@thisisdeploy/css-system'
  fileList = fileReader(cssModule)
}
cssCopier(cssModule, devFolder)



export default {
  mode: 'universal',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
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
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
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
  env: {
    fileList: fileList[0],
    cssModule,
    devFolder
  }
}
