/// <reference types="@nuxt/schema" />

// Чтобы утихомирить WebStorm, ему не нравится Nuxt
declare global {
    const defineNuxtConfig: <T>(config: T) => T;
}
export {};