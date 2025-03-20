<script lang="ts" setup>
import {ref} from 'vue'
import {useAuth} from '~/composables/useAuth'
import {useRouter} from 'vue-router'
import InputField from "~/components/login/InputField.vue";
import LoginButton from "~/components/login/LoginButton.vue";

const {error, login} = useAuth()
const router = useRouter()

const username = ref<string>('')
const password = ref<string>('')

const handleSubmit = async (): Promise<void> => {
  if (await login(username.value, password.value)) {
    await router.push('/account')
  }
}
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <InputField id="username" v-model="username" label="Логин"/>
    <InputField id="password" v-model="password" label="Пароль" type="password"/>
    <LoginButton @click="handleSubmit"/>
  </form>
  <p v-if="error" class="error">{{ error }}</p>
</template>


<style scoped lang="scss">
form {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error {
  color: red;
  margin-top: 1rem;
  text-align: center;
}
</style>
