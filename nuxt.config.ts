// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    // https://nuxt.com/modules/eslint
    '@nuxt/eslint',
    // https://nuxt.com/modules/shadcn
    'shadcn-nuxt',
    // https://nuxt.com/modules/color-mode
    '@nuxtjs/color-mode',
    // https://nuxt.com/modules/fonts
    '@nuxt/fonts',
    'vue-sonner/nuxt',
  ],
  shadcn: {
    prefix: 'SC',
    componentDir: './components/ui',
  },
  build: {
    transpile: ['vue-sonner'],
  },
});
