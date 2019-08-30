<template>
  <div class="vision-container">
    <router-link to="/" class="close">x</router-link>
    <div class="computer-vision">
      <h1>Computer Vision</h1>
      <h3>Classify Bear Images 🐻</h3>
      <p class="description">Use images of teddy bears, black bears, grizzly bears, or all three!</p>
      <p>Image upload</p>
      <input type="file" name="pic" accept="image/*" @change="imageUploaded">
      <p>Image preview</p>
      <p>{{picturePreview}}</p>
      <p>RESULT: {{pictureResult}}</p>
      <button @click="analyzeImage">Analyze</button>
    </div>
  </div>
</template>

</form>

<script>
export default {
  name: 'Vision',
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
.close {
  position: absolute;
  top: 40px;
  right: 40px;
  text-decoration: none;
  font-size: 20px;
  color: grey;
}
h1 {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #0099FF;
}
h3 {
  color: #0099FF;
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
  background: #0099FF;
  border: none;
  border-radius: 3px;
  padding: 5px 20px;
  font-weight: 700;
  font-size: 14px;
}
</style>