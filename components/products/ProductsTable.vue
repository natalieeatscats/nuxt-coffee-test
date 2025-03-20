<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import ProductsFilters from "./ProductsFilters.vue";
import ProductsTableHeader from "./ProductsTableHeader.vue";
import ProductsTableRow from "./ProductsTableRow.vue";
import { useData } from "~/composables/useData";
import type { TProduct } from "~/types/api.types";

const { products, fetchProducts } = useData();

const filterDate = ref<string>("");
const filterStatus = ref<string>("");
const filterName = ref<string>("");

onMounted(async () => {
    await fetchProducts();
});


const updateFilters = (filters: { filterDate: string; filterStatus: string; filterName: string }): void => {
    filterDate.value = filters.filterDate;
    filterStatus.value = filters.filterStatus;
    filterName.value = filters.filterName;
};

const filteredProducts = computed(() =>
    products.value.filter((product: TProduct) => {
        const matchDate = filterDate.value
            ? product.date_created.startsWith(filterDate.value)
            : true;
        const matchStatus = filterStatus.value
            ? product.status === filterStatus.value
            : true;
        const matchName = filterName.value
            ? product.name.toLowerCase().includes(filterName.value.toLowerCase())
            : true;
        return matchDate && matchStatus && matchName;
    }),
);
</script>

<template>
    <div class="products-table">
        <h2>Список товаров</h2>
        <ProductsFilters
            :filter-date="filterDate"
            :filter-status="filterStatus"
            @update="updateFilters"
        />
        <table>
            <ProductsTableHeader />
            <tbody>
            <ProductsTableRow
                v-for="product in filteredProducts"
                :key="product.id"
                :product="product"
            />
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.products-table {
    margin-top: 2rem;
}

table {
    width: 100%;
    border-collapse: collapse;

}
</style>
