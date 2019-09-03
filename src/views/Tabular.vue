<template>
  <div class="tabular-container">
    <BackButton :path=path v-if="$route.path != path"/>
    <CloseButton/>
    <div class="category-content">
      <h1> <router-link :to="path">{{name}}</router-link></h1>
      <p class="description" v-if="$route.path == path">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien quam, efficitur sed nibh tempus, efficitur iaculis lacus. Curabitur ut hendrerit velit. Ut iaculis ligula mauris, ac porttitor tellus vehicula semper. Nam vitae risus lectus. Nam pellentesque sit amet dui sit amet vehicula.</p>
      <div class="app-list-container" v-if="$route.path == path">
        <h3>{{name}} Apps <span class="count">{{count}}</span></h3>
        <div class="app-list">
          <router-link to="vision/bearimages" class="app">
            <h4>Bear Image App</h4>
          </router-link>
          <router-link to="vision/bearimages" class="app">
           <h4>Sample App 2</h4>
          </router-link>
          <router-link to="vision/bearimages" class="app">
            <h4>Sample App 3</h4>
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
  name: 'Tabular',
    components: {
    CloseButton,
    BackButton,
  },
  data() {
    return {
      name: 'Tabular',
      path: '/tabular',
      count: 4,
    }
  },
  methods: {

  }

}
</script>

<style scoped lang="scss">
$color: purple;

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
h4 {
  color: $color;
  text-decoration: none;
}
.count {
  font-weight: 400;
}
</style>