<script lang="ts" setup>

type Product = {
  id: number
  status: 'active' | 'inactive'
  date_created: string
  name: string
}

defineProps<{ product: Product }>()
</script>

<template>
  <tr>
    <td>{{ product.id }}</td>
    <td>{{ product.status }}</td>
    <td>{{ product.date_created }}</td>
    <td>{{ product.name }}</td>
  </tr>
</template>

<style scoped>
td {
  padding: 0.5rem;
  border: 1px solid #ddd;
}
</style>
