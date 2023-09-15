<script setup>
// import FormLogin from './components/FormLogin.vue'
// import DashBoard from './components/DashBoard.vue'
// import {computed, ref} from 'vue'
// import { useRouter } from 'vue-router';

// const accessToken = ref(localStorage.getItem('accessToken'))
// const isLoggedIn = computed(() => accessToken.value !== null)

// function handleLogin(token) {
//   accessToken.value = token
//   console.log(accessToken.value)
// }


</script>

<template>
  <Notifications />
  <router-view/>


</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
