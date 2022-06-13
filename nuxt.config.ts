import { defineNuxtConfig } from 'nuxt'
import fileList from './lib/fileList'
import copyCss from './lib/copyCss'

copyCss()

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=swap&subset=latin-ext' }
    ]
  },
  css: ["@thisisdeploy/scaffold-css", "highlight.js/styles/github.css"],
  runtimeConfig: {
    public: {
      FILE_LIST: fileList
    }
  },
  typescript: {
    strict: true
  }
})
