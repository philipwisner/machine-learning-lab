<template>
  <div class="gan-container">
    <BackButton :path=path v-if="$route.path != path"/>
    <CloseButton/>
    <div class="category-content">
      <h1> <router-link :to="path">{{name}}</router-link></h1>
      <p class="description" v-if="$route.path == path">{{category.longDescription}}</p>
      <div class="app-list-container" v-if="$route.path == path">
        <h3>Apps <span class="count">{{count}}</span></h3>
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
  name: 'Gan',
    components: {
    CloseButton,
    BackButton,
  },
  props: {
    categories: Array
  },
  data() {
    return {
      name: this.categories[2].fullName,
      path: this.categories[2].link,
      count: this.categories[2].apps.length,
      category: this.categories[2],
    }
  },
  methods: {

  }

}
</script>

<style scoped lang="scss">
$color: #e67e22;

h1 a {
  margin-bottom: 20px;
  color: $color;
  text-decoration: none;
  display: block;
}
h3 {
  color: $color;
  margin-bottom: 15px;
}
.count {
  font-weight: 400;
}
</style>