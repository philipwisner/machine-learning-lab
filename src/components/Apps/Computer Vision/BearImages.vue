<template>
  <div class="bear-app">
    <h3>Classify Bear Images 🐻</h3>
    <p
      class="description"
    >Upload images of teddy bears, black bears, grizzly bears, or all three and our model will tell you which one you uploaded.</p>
    <div class="image-upload">
      <p class="upload-image-header">Upload Image</p>
      <input type="file" name="pic" accept="image/*" @change="imageUploaded" />
    </div>
    <div class="image-preview">
      <div v-if="!picturePreview" class="dummy-image"></div>
      <img id="output-image" />
    </div>
    <div class="results-container">
      <p class="result-header">RESULTS</p>
      <p class="results">{{pictureResult}}</p>
    </div>
    <button @click="analyzeImage">Analyze</button>
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>


<script>
export default {
  name: "BearImages",
  data() {
    return {
      pictureResult: "None",
      picturePreview: false,
      selectedFile: null,
      analyzing: false,
      error: null,
    };
  },
  methods: {
    imageUploaded(event) {
      this.error = null;
      var reader = new FileReader();
      reader.onload = function() {
        var output = document.getElementById("output-image");
        output.src = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      this.selectedFile = event.target.files[0];
      this.picturePreview = true;
    },
    async analyzeImage() {
      if (this.selectedFile) {
        let formData = new FormData();
        formData.append('file', this.selectedFile)
        try {
          this.pictureResult = '...';
          const response = await this.axios.post("http://prakash.ai:3000/analyze", formData, {'Content-Type': '*' });
          switch (response.data.result) {
            case 'teddys':
              this.pictureResult = 'Teddy Bear';
              break;
            case 'grizzly':
              this.pictureResult = 'Grizzly Bear';
              break;
            case 'black':
              this.pictureResult = 'Black Bear';
              break;
            default:
              this.pictureResult = 'Error'
          }
          this.analyzing = false;
        } catch (error) {
          console.error(error);
          this.error = error;
        }
      } else {
        this.error = 'Please select a file'
      }
    }
  }
};
</script>

<style scoped>
h3 {
  color: #34d671;
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
  background: #bfbfbf;
  opacity: 0.3;
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
  color: #bfbfbf;
  font-weight: 700;
  font-size: 15px;
}
.results {
  color: #242424;
  font-size: 28px;
  font-weight: 500;
  text-transform: capitalize;
}
.error {
  margin-top: 20px;
  color: red;
}
button {
  margin-top: 10px;
  color: white;
  background: #34d671;
  border: none;
  border-radius: 3px;
  padding: 8px 25px;
  font-weight: 700;
  font-size: 14px;
}
button:hover {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background: rgb(61, 245, 131);
}
</style>