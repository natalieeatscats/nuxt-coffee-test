<script lang="ts" setup>
import {ref, watch} from 'vue'
import type {FiltersProps} from "~/components/products/ProductsFilters.types";

const props = defineProps<FiltersProps>()
const emits = defineEmits<{
  (e: 'update', filters: { filterDate: string; filterStatus: string; filterName: string }): void
}>()

const localFilters = ref({
  date: props.filterDate || '',
  status: props.filterStatus || '',
  name: props.filterName || ''
})

const onChange = (): void => {
  emits('update', {
    filterDate: localFilters.value.date,
    filterStatus: localFilters.value.status,
    filterName: localFilters.value.name
  })
}

watch(
    () => localFilters.value,
    () => {
      onChange()
    },
    {deep: true}
)

</script>

<template>
  <div class="filters">
    <div class="filter-item">
      <label for="filter-date">Фильтр по дате создания:</label>
      <input id="filter-date" v-model="localFilters.date" type="date" @change="onChange"/>
    </div>
    <div class="filter-item">
      <label for="filter-status">Фильтр по статусу:</label>
      <select id="filter-status" v-model="localFilters.status" @change="onChange">
        <option value="">Все</option>
        <option value="active">active</option>
        <option value="inactive">inactive</option>
      </select>
    </div>
    <div class="filter-item">
      <label for="filter-name">Фильтр по названию:</label>
      <input
          id="filter-name" v-model="localFilters.name" placeholder="Введите название товара" type="text"
          @input="onChange"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.filter-item {
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 0.25rem;
  }


}
</style>
