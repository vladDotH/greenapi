import { defineNuxtConfig } from 'nuxt/config'
import transformerDirective from '@unocss/transformer-directives'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      '@unocss/nuxt',
      {
        uno: true,
        icons: true,
        attributify: true,

        // core options
        shortcuts: [],
        transformers: [transformerDirective()],
        rules: [],
        theme: {
          colors: {
            heading: '#2E2E2E',
            subheading: '#16221C',
            body: '#555555',
          },
        },
      },
    ],
    '@pinia/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lexend: true,
          Inter: [400],
        },
      },
    ],
    '@formkit/nuxt',
  ],
  // Global page headers (https://go.nuxtjs.dev/config-head)
  css: ['normalize.css', 'assets/css/style.css'],
  typescript: {
    typeCheck: true,
  },

  formkit: {
    autoImport: true,
    configFile: 'formkit.config.ts',
  },

  app: {
    baseURL: process.env.BASE_URL,
  },

  runtimeConfig: {
    public: {
      apiURL: process.env.DEFAULT_GREENAPI_URL,
    },
  },
})
