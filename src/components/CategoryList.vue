<template>
  <div class="category-list">
    <h3 class="category-header">Categories <span class="category-count">{{categories.length}}</span></h3>
      <div class="category-container">
        <Category :key="category.index" v-for="category in categories" :category="category"/>
      </div>
  </div>
</template>

<script>
import Category from '@/components/Category.vue'

export default {
  name: 'CategoryList',
  components: {
    Category
  },
  props: {
    categories: Array
  }
}
</script>

<style scoped>
.category-list {
  margin-top: 30px;
}
.category-container {
  height: calc(100vh - 305px);
  overflow-y: auto;
}
.category-header {
  color: white;
  font-size: 28px;
  margin-bottom: 10px;
}
.category-count {
  color: #B4D9FF;
  font-size: 20px;
}

</style>