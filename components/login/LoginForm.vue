<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import {useAuth} from '~/composables/useAuth'
import {useRouter} from 'vue-router'
import InputField from "~/components/login/InputField.vue";
import LoginButton from "~/components/login/LoginButton.vue";

const {user, error, isValidLogin, initialize} = useAuth()
const router = useRouter()

const username = ref<string>('')
const password = ref<string>('')
const redirect = async () => {
  await router.push('/account')
}

const handleSubmit = async (): Promise<void> => {
  if (await isValidLogin(username.value, password.value)) {
    await redirect()
  }
}

onMounted(async () => {
  initialize();
  if (user.value) {
    await redirect()
  }
})

</script>
<template>
  <form @submit.prevent="handleSubmit">
    <InputField id="username" v-model="username" aria-autocomplete="both" label="Логин"/>
    <InputField id="password" v-model="password" aria-autocomplete="both" label="Пароль" type="password"/>
    <LoginButton @click="handleSubmit"/>
  </form>
  <p v-if="error" class="error">{{ error }}</p>
</template>

<style scoped>
.error {
  color: red;
  margin-top: 1rem;
  text-align: center;
}
</style>
