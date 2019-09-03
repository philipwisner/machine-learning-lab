<template>
  <div class="bear-app">
    <h3>Classify Bear Images 🐻</h3>
    <p class="description">Upload images of teddy bears, black bears, grizzly bears, or all three and our model will tell you which one you uploaded.</p>
    <div class="image-upload">
      <p class="upload-image-header">Upload Image</p>
      <input type="file" name="pic" accept="image/*" @change="imageUploaded">
    </div>
    <div class="image-preview">
      <div v-if="!picturePreview" class="dummy-image"></div>
      <img id="output-image"/>
    </div>
    <div class="results-container">
      <p class="result-header">RESULTS</p>
      <p class="results">{{pictureResult}}</p>
    </div>
    <button @click="analyzeImage">Analyze</button>
  </div>
</template>


<script>
export default {
  name: 'BearImages',
  data() {
    return {
      pictureResult: 'None',
      picturePreview: false,
    }
  },
  methods: {
    imageUploaded(event) {
      console.log('event', event);
      var reader = new FileReader();
      reader.onload = function() {
        var output = document.getElementById('output-image');
        output.src = reader.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.picturePreview = true;
    },
    analyzeImage() {
      //DO POST TO localhost:3000/analyze
      this.pictureResult = 'Teddy Bear';
    },
  }

}
</script>

<style scoped>
h3 {
  color: #34D671;
  margin-bottom: 20px;
}
.bear-app {
  margin-top: 40px;
}
.description {
  margin-bottom: 30px;
}
.image-preview {
  height: 250px;
}
.image-upload {
  margin-bottom: 20px;
}
.upload-image-header {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
}
.dummy-image {
  max-width: 500px;
  background: #BFBFBF;
  opacity: .30;
  height: 250px;
}
#output-image {
  max-width: 500px;
  max-height: 250px;
}
.results-container {
  margin: 40px 0;
  height: 60px;
}
.result-header {
  color: #BFBFBF;
  font-weight: 700;
  font-size: 15px;
}
.results {
  color: #242424;
  font-size: 28px;
  font-weight: 500;
}
button {
  margin-top: 20px;
  color: white;
  background: #34D671;
  border: none;
  border-radius: 3px;
  padding: 8px 25px;
  font-weight: 700;
  font-size: 14px;
}
button:hover {
  box-shadow: 0px 3px 6px rgba(0,0,0,.16);
  background: rgb(61, 245, 131);
}
</style>