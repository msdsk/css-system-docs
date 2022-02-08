import { defineNuxtPlugin } from '#app'
import axios from 'axios'

const axiosInstance = axios.create()

export const $axios = axiosInstance

export default defineNuxtPlugin(() => {
  return {
    setup() {
      return {
        axios: useState('axios', () => axiosInstance)
      }
    },
    provide: {
      axios: axiosInstance
    }
  }
})
