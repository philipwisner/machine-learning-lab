<template>
  <div class="vision-container">
    <BackButton :path=path v-if="$route.path != '/vision'"/>
    <CloseButton/>
    <div class="category-content">
      <h1> <router-link to="/vision">Computer Vision</router-link></h1>
      <p class="description" v-if="$route.path == '/vision'">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien quam, efficitur sed nibh tempus, efficitur iaculis lacus. Curabitur ut hendrerit velit. Ut iaculis ligula mauris, ac porttitor tellus vehicula semper. Nam vitae risus lectus. Nam pellentesque sit amet dui sit amet vehicula.</p>
      <div class="app-list-container" v-if="$route.path == '/vision'">
        <h3> Computer Vision Apps <span class="count">4</span></h3>
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
  name: 'Vision',
    components: {
    CloseButton,
    BackButton,
  },
  data() {
    return {
      pictureResult: '',
      picturePreview: null,
      path: '/vision'
    }
  },
  methods: {
    imageUploaded(event) {
      this.picturePreview = event.target.files[0];
      //console.log('pic', this.picturePreview);
    },
    analyzeImage() {
      //DO POST TO localhost:3000/analyze
      this.pictureResult = 'hi'
    }
  }

}
</script>

<style scoped>
h1 a {
  margin-bottom: 20px;
  color: #34D671;
  text-decoration: none;
  display: block;
}
h3 {
  color: #34D671;
  margin-bottom: 15px;
}
h4 {
  color: #34D671;
  text-decoration: none;
}
.count {

  color:  rgb(113, 255, 168);
}
</style>