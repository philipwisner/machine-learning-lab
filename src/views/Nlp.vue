<template>
  <div class="nlp-container">
    <BackButton :path=path v-if="$route.path != '/nlp'"/>
    <CloseButton/>
    <div class="category-content">
      <h1> <router-link to="/nlp">Natural Language Processing</router-link></h1>
      <p class="description" v-if="$route.path == '/nlp'">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien quam, efficitur sed nibh tempus, efficitur iaculis lacus. Curabitur ut hendrerit velit. Ut iaculis ligula mauris, ac porttitor tellus vehicula semper. Nam vitae risus lectus. Nam pellentesque sit amet dui sit amet vehicula.</p>
      <div class="app-list-container" v-if="$route.path == '/nlp'">
        <h3>NLP Apps <span class="count">4</span></h3>
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
  name: 'Nlp',
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
  color: #0099FF;
  text-decoration: none;
  display: block;
}
h3 {
  color: #0099FF;
  margin-bottom: 15px;
}
h4 {
  color: #0099FF;
  text-decoration: none;
}
.count {
  color: #93C8FF;
}
</style>





