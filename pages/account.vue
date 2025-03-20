<script lang="ts" setup>
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'
import {useAuth} from '~/composables/useAuth'
import ProductsTable from '~/components/products/ProductsTable.vue'

const {user, logout} = useAuth()
const router = useRouter()

onMounted(() => {
  if (!user.value) router.push('/')
})

const handleLogout = (): void => {
  logout()
  router.push('/')
}
</script>

<template>
  <div>
    <div class="account">
      <button @click="handleLogout">Выход</button>
      <div>
        <p>{{ `${user?.surname}, ${user?.name}` }}</p>
        <span>{{ user?.credentials.username }}</span>
      </div>
    </div>
    <ProductsTable/>
  </div>
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

  h1 {
    margin-bottom: 1rem;
  }

  div {
    p {
      margin-bottom: 0.2rem;
    }

    display: grid;
  }

}
</style>
