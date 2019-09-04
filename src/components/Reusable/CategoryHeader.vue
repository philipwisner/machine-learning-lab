<template>
  <div class="header-container">
    <BackButton :path=category.link v-if="$route.path != category.link"/>
    <CloseButton/>
    <div class="category-content">
      <h1> <router-link :to="category.link" :style="{color: category.color}">{{category.name}}</router-link></h1>
      <p class="description" v-if="$route.path == category.link">{{category.longDescription}}</p>
      <div class="app-list-container" v-if="$route.path == category.link">
        <h3 :style="{color: category.color}">Apps <span class="count">{{category.apps.length}}</span></h3>
        <div class="app-list">
          <router-link :key="app.index" v-for="app in category.apps" :to="app.link" class="app">
            <h4 class="app-name">{{app.name}}</h4>
          </router-link>
        </div>
      </div>
      <router-view class="app-outlet"></router-view>
    </div>
  </div>
</template>

<script>
import CloseButton from '@/components/Reusable/CloseButton.vue';
import BackButton from '@/components/Reusable/BackButton.vue';

export default {
  name: 'CategoryHeader',
    components: {
    CloseButton,
    BackButton,
  },
  props: {
    categories: Array,
    categoryName: String,
  },
  data() {
    return {
      category: this.categories.find(category => {
        return category.name == this.categoryName
      }),
    }
  },
}
</script>

<style scoped lang="scss">
h1 a {
  margin-bottom: 20px;
  text-decoration: none;
  display: block;
}
h3 {
  margin-bottom: 15px;
}
.count {
  font-weight: 400;
}
</style>
