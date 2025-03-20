<script lang="ts" setup>

type TInputProps = {
  id: string
  label: string
  type?: string
  modelValue: string
}

defineProps<TInputProps>()
const emits = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
</script>

<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input
        :id="id"
        :type="type"
        :value="modelValue"
        required
        @input="onInput"
    />
  </div>
</template>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.25rem;
}

input {
  width: 100%;
  padding: 0.5rem;
}
</style>
