<script lang="ts" setup>
import {defineEmits} from 'vue'

defineEmits<{ (e: 'click'): void }>()
</script>

<template>
  <button type="button" @click="$emit('click')">
    <slot>Войти</slot>
  </button>
</template>

<style scoped>
button {
  width: 100%;
}
</style>