<template>
  <div class="vision-container">
    <CloseButton/>
    <h1>Computer Vision</h1>
  </div>
</template>


<script>
import CloseButton from '@/components/CloseButton.vue'
import BearImages from '@/components/Apps/BearImages.vue'


export default {
  name: 'Vision',
    components: {
    CloseButton,
    BearImages
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
      console.log('pic', this.picturePreview);
    },
    analyzeImage() {
      //DO POST TO localhost:3000/analyze
      this.pictureResult = 'hi'
    }
  }

}
</script>

<style scoped>
h1 {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #34D671;
}
h3 {
  color: #34D671;
  margin-bottom: 20px;
}
.computer-vision {
  padding: 0 20px;
}
.description {
  margin-bottom: 30px;
}
</style>