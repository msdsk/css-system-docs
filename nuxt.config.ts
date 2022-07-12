import { defineNuxtConfig } from 'nuxt'
import copyCss from './lib/copyCss'
import cssInputFolder from './lib/cssInputFolder'
import FileList from './lib/fileList'
import dynamicImport from 'vite-plugin-dynamic-import'


copyCss(cssInputFolder)
const fileList = FileList()

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: 'Scaffold CSS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Scaffold CSS - A minimal CSS system' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=swap&subset=latin-ext' }
    ]
  },
  css: ["@/assets/css/index.scss", "highlight.js/styles/github.css", "./css"],
  runtimeConfig: {
    public: {
      FILE_LIST: fileList
    }
  },
  typescript: {
    strict: true
  },
  // experimental: {
  //   viteNode: true
  // }
})
