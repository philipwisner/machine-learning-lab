<template>
  <div class="header-container">
    <BackButton :path=category.link v-if="$route.path != category.link"/>
    <CloseButton/>
    <div class="category-content">
      <h1><router-link :to="category.link" :style="{color: category.color}">{{category.name}}</router-link></h1>
      <p class="long-description" v-if="$route.path == category.link">{{category.longDescription}}</p>
      <div class="app-list-container" v-if="$route.path == category.link">
        <h3 :style="{color: category.color}">Apps <span class="count">{{category.apps.length}}</span></h3>
        <div class="app-list" v-if="category.apps.length">
          <router-link :key="app.index" v-for="app in category.apps" :to="app.link" class="app">
            <h4 class="app-name">{{app.name}} <img class="app-icon" v-if="app.icon" :src="app.icon" alt="icon"></h4>
            <p class="description">{{app.description}}</p>
          </router-link>
        </div>
        <div v-else class="coming-soon">
          COMING SOON
        </div>
      </div>
      <router-view class="app-outlet" :category="category" :images="images"></router-view>
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
    images: Array,
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
$box-shadow: 0px 3px 6px 3px rgba(0,0,0,.2);
$dark-font: #2c3e50;
$light-font: #7f8c8d;
$border-color: #BFBFBF;

.app-icon {
  width: 20px;
  margin-bottom: -3px;
}
.coming-soon {
  font-size: 25px;
  margin-top: 20px;
}
h1 a {
  margin-bottom: 10px;
  text-decoration: none;
  display: block;
}
h3 {
  margin-bottom: 15px;
}
.category-content {
  padding: 5% 5% 5% 5%;
  .long-description {
    height: 150px;
  }
}

.app-list-container {
  margin-top: 50px;
  .app-list {
    display: flex;
    flex-wrap: wrap;
    .app {
      flex: 1 1 100%;
      border: 1px solid $border-color;
      border-radius: 3px;
      margin-bottom: 10px;
      padding: 25px;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      .app-name {
        color: $dark-font;
        text-decoration: none;
        font-size: 18px;
      }
      .description {
        color: $dark-font;
        margin-top: 10px;
        font-size: 14px;
      }
    }
  }
  .count {
    font-size: 16px;
    margin-left: 5px;
    color: $light-font;
    font-weight: 400;
  }
}
@media screen and (min-width: 1200px) {
  .category-content {
    .long-description {
      height: 100px;
    }
  }
}
@media screen and (max-width: 1000px) {
  .category-content {
    font-size: 14px;
    .long-description {
      height: 150px;
    }
  }
}
@media screen and (max-width: 600px) {
  .category-content {
    font-size: 14px;
    .long-description {
      height: 240px;
    }
  }
}
</style>
