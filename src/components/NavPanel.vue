<template>
  <div class="nav-panel">
    <img class="logo" src="../assets/logo.svg" alt="logo">
    <div class="title-container">
      <h1 class="title-name">Machine Learning Lab</h1>
      <p class="title-subtext">Welcome to Jefferson’s Machine Learning Playground</p>

    </div>

    <router-link to="/age">Age</router-link> |
    <router-link to="/vision">Vision</router-link> |
    <router-link to="/life">Life</router-link> |
    <router-link to="/recommend">Recommend</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavPanel',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-panel {
  padding: 5%;
}
.logo {
  position: absolute;
  top: 20px;
  left: 20px;
}
.title-container {
  border: 1px solid white;
  margin-top: 40px;
}
.title-name {
  color: white;
  font-size: 38px;
}
.title-subtext {
  color: #B4D9FF;
  font-size: 18px;
}
</style>
