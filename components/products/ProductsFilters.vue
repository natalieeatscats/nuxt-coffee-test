<script lang="ts" setup>
import {defineProps, defineEmits, ref, watch} from 'vue'

type FiltersProps = {
  filterDate?: string
  filterStatus?: string
  filterName?: string
}

const props = defineProps<FiltersProps>()
const emits = defineEmits<{ (e: 'update', filters: { filterDate: string; filterStatus: string }): void }>()

const localDate = ref<string>(props.filterDate || '')
const localStatus = ref<string>(props.filterStatus || '')
const localName = ref<string>(props.filterName || '')

const onChange = (): void => {
  emits('update', {filterDate: localDate.value, filterStatus: localStatus.value, filterName: localName.value})
}

watch(() => props.filterDate, (newVal) => {
  localDate.value = newVal || ''
})
watch(() => props.filterStatus, (newVal) => {
  localStatus.value = newVal || ''
})
watch(() => props.filterName, (newVal) => {
  localName.value = newVal || ''
})
</script>

<template>
  <div class="filters">
    <div class="filter-item">
      <label for="filter-date">Фильтр по дате создания:</label>
      <input id="filter-date" v-model="localDate" type="date" @change="onChange"/>
    </div>
    <div class="filter-item">
      <label for="filter-status">Фильтр по статусу:</label>
      <select id="filter-status" v-model="localStatus" @change="onChange">
        <option value="">Все</option>
        <option value="active">active</option>
        <option value="inactive">inactive</option>
      </select>
    </div>
    <div class="filter-item">
      <label for="filter-name">Фильтр по названию:</label>
      <input
          id="filter-name" v-model="localName" type="text" placeholder="Введите название продукта"
          @input="onChange"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
