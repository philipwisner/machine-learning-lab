<template>
  <div class="nav-panel">
    <img class="logo" src="../assets/logo-main.svg" alt="logo">
    <div class="title-container">
      <h1 class="title-name">MLab</h1>
      <p class="title-subtext">Welcome to the Machine Learning Playground</p>
    </div>
    <CategoryList :categories="categories" class="category-list"/>
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'

export default {
  name: 'NavPanel',
  components: {
    CategoryList
  },
  props: {
    categories: Array
  }
}
</script>

<style scoped>
.nav-panel {
  padding: 80px 5% 5% 5%;
}
.logo {
  position: absolute;
  top: 20px;
  left: 20px;
}
.title-container {
  margin-top: 0px;
  margin-bottom: 40px;
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
