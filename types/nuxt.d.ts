/// <reference types="@nuxt/schema" />

declare global {
    const defineNuxtConfig: <T>(config: T) => T;
}
export {};