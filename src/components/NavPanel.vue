<template>
  <div class="nav-panel">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavPanel',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: white;
}
</style>
