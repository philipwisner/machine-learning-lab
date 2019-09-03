<template>
  <div class="vision-container">
    <CloseButton/>
    <div class="vision-content">
      <h1> <router-link to="/vision">Computer Vision</router-link></h1>
      <p class="description" v-if="$route.path == '/vision'">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien quam, efficitur sed nibh tempus, efficitur iaculis lacus. Curabitur ut hendrerit velit. Ut iaculis ligula mauris, ac porttitor tellus vehicula semper. Nam vitae risus lectus. Nam pellentesque sit amet dui sit amet vehicula.</p>
      <div class="app-list-container" v-if="$route.path == '/vision'">
        <h3> Computer Vision Apps <span class="count">4</span></h3>
        <div class="app-list">
          <router-link to="vision/bearimages" class="app">Bear Image App</router-link>
          <router-link to="vision/bearimages" class="app">Sample App 2</router-link>
          <router-link to="vision/bearimages" class="app">Sample App 3</router-link>
        </div>
      </div>
      <router-view class="app-content"></router-view>
    </div>
  </div>
</template>


<script>
import CloseButton from '@/components/CloseButton.vue'

export default {
  name: 'Vision',
    components: {
    CloseButton,
  },
  data() {
    return {
      pictureResult: '',
      picturePreview: null,
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
.vision-content {
  padding: 5%;
  border: 1px solid red;
}
h1 a {
  margin-bottom: 20px;
  color: #34D671;
  text-decoration: none;
  display: block;
}
h3 {
  color: #34D671;
  margin-bottom: 15px;
  font-size: 22px;
}
.computer-vision {
  padding: 0 20px;
}
.description {
  margin-bottom: 30px;
}
.count {
  font-size: 16px;
  margin-left: 10px;
  color:  rgb(113, 255, 168);
}
.app-list-container {
  border: 1px solid blue;
  margin-top: 60px;
}
.app-list {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid red;
}
.app {
  flex: 1 1 100%;
  border: 1px solid grey;
  border-radius: 3px;
  margin-bottom: 10px;
}
.app-content {
  border: 1px solid red;
}
</style>