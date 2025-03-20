/// <reference types="@nuxt/schema" />

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    css: ['~/assets/scss/main.scss'],
    devtools: {enabled: true},
    modules: ['@nuxt/eslint'],
    runtimeConfig: {
        public: {
            baseUrl: process.env.BASE_URL || 'http://localhost:3001'
        }
    }
})