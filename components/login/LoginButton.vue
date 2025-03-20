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
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
</style>
