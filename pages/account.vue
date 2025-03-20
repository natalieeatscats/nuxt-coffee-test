<script lang="ts" setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "~/composables/useAuth";
import ProductsTable from "~/components/products/ProductsTable.vue";

const { user, logout } = useAuth();
const router = useRouter();

onMounted(() => {
    if (!user.value) router.push("/");
});

const handleLogout = (): void => {
    logout();
    router.push("/");
};
</script>

<template>
    <main>
        <header class="account">
            <button @click="handleLogout">Выход</button>
            <div v-if="user">
                <strong>{{ `${user.surname}, ${user.name}` }}</strong>
                <p>{{ user.credentials.username }}</p>
            </div>
        </header>
        <ProductsTable />
    </main>
</template>

<style lang="scss" scoped>

body {
    padding: 2rem;
}

.account {
    display: grid;
    grid-template-columns: 1fr 10fr;
    gap: 1rem;
    justify-content: center;
    height: 3rem;

    div {
        display: grid;

        p {
            margin-bottom: 0;
        }

    }

}

</style>
