<script setup>
import HelloWorld from './components/HelloWorld.vue'
import navbarVue from './components/navbar.vue';
</script>

<template>
  <div>
    <navbar-vue/>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
