<script lang="ts" setup>
import type {TProduct} from "~/types/api.types";

defineProps<{ product: TProduct }>()
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

tr:nth-child(even) {
  background-color: var(--coffee);

  td {
    border: 1px dashed var(--coffee-dark);
  }
}
</style>
