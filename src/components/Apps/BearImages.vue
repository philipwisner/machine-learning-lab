<template>
  <div class="bear-app">
    <h3>Classify Bear Images 🐻</h3>
    <p class="description">Use images of teddy bears, black bears, grizzly bears, or all three!</p>
    <p>Image upload</p>
    <input type="file" name="pic" accept="image/*" @change="imageUploaded">
    <p>Image preview</p>
    <p>{{picturePreview}}</p>
    <p>RESULT: {{pictureResult}}</p>
    <button @click="analyzeImage">Analyze</button>
  </div>
</template>


<script>
import CloseButton from '@/components/CloseButton.vue'

export default {
  name: 'BearVision',
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
button {
  margin-top: 20px;
  color: white;
  background: #34D671;
  border: none;
  border-radius: 3px;
  padding: 5px 20px;
  font-weight: 700;
  font-size: 14px;
}
</style>