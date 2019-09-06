<template>
  <div class="child-app">
    <h3>{{app.name}} <img v-if="app.icon" :src="app.icon" alt="icon" class="app-icon"></h3>
    <p class="description">{{app.description}}
    <!--<SampleImages v-on:image-selected="setSelectedImage" :selectedImages="selectedImages" v-if="selectedImages.length > 0"/>-->
    <div class="image-upload">
      <p class="upload-image-header">Upload Image</p>
      <label for="pic">Choose a file</label>
      <input type="file" name="pic" id="pic" accept="image/*" @change="imageUploaded" />
    </div>
    <div class="image-preview">
      <!--<vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>-->
      <div v-if="!picturePreview" class="dummy-image"></div>
      <img id="output-image" />
    </div>
    <div class="results-container" :style="{ height: app.resultsHeight }">
      <p class="result-header">RESULTS</p>
      <!--
      <div class="loading-dots" v-if="loadingResults">
        <span class="dot one">.</span>
        <span class="dot two">.</span>
        <span class="dot three">.</span>
      </div>-->
      <p class="results">{{pictureResult}}</p>
      <div class="prediction-container" v-if="predictions">
        <div class="predictions" :key="prediction.$index" v-for="prediction in predictions" >
          <span class="category">{{prediction.class}}</span> -
          <span class="value">{{formatPercentage(prediction.prob)}}%</span>
        </div>
      </div>
    </div>
    <button @click="analyzeImage" v-if="selectedFile" :style="{background: category.color}">Analyze</button>
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>


<script>
import SampleImages from '@/components/Reusable/SampleImages.vue'
import { filter } from 'minimatch';
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: "ImageUpload",
  components: {
    SampleImages,
    vueDropzone: vue2Dropzone,
  },
  props: {
    category: Object,
    images: Array,
  },
  data() {
    return {
      app: this.category.apps.find(app => {
        return app.link == this.$route.path
      }),
      imageSetName: '',
      selectedImages: [],
      pictureResult: "None",
      loadingResults: false,
      predictions: null,
      picturePreview: false,
      selectedFile: null,
      analyzing: false,
      error: null,
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 300,
          maxFilesize: 5,
          headers: { "My-Awesome-Header": "header value" }
      }
    };
  },
  methods: {
    imageUploaded(event) {
      this.error = null;
      var output = document.getElementById("output-image");
      var reader = new FileReader();
      reader.onload = function() {
        output.src = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      this.selectedFile = event.target.files[0];
      console.log('selected File', this.selectedFile);
      this.picturePreview = true;
    },

    getDataUri(url, callback) {
        var image = new Image();
        image.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
            canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
            canvas.getContext('2d').drawImage(this, 0, 0);
            callback(canvas.toDataURL('image/jpg').replace(/^data:image\/(png|jpg);base64,/, ''));
        };
        image.src = url;
    },
    setSelectedImage(image) {
      this.error = null;
      var output = document.getElementById("output-image");
      output.src = image.path;
      this.getDataUri(image.path, (dataUri) => {
        let mime = dataUri.match(/:(.*?);/);
        let buf = new ArrayBuffer(dataUri);
        let arr = new Uint8Array(buf);
        dataUri
        .split('')
        .forEach((e,i)=>arr[i]=e.charCodeAt(0));
        let f = new File([buf], image.name, {type: image.type})
        this.selectedFile = f;
      });
      this.picturePreview = true;
    },
    transformBear(response) {
      switch (response) {
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
    },
    transformResults(response, type) {
      if (type == 'caps') {
        if (response == 'PNEUMONIA') {
          this.pictureResult = response.toLowerCase();
        } else {
          this.pictureResult = response;
        }
      }
      if (type == 'number') {
        if (response == 0) {
          this.pictureResult = 'Normal';
        } else {
          this.pictureResult = 'Abnormal';
        }
      }
    },
    async analyzeImage() {
      if (this.selectedFile) {
        let formData = new FormData();
        formData.append('file', this.selectedFile)
        console.log('file', this.selectedFile);
        try {
          this.loadingResults = true;
          this.pictureResult = '...'
          this.predictions = null;
          console.log(this.app.endPoint);
          let headers = {
            headers: {
              'Accept': '*/*'
            }
          }
          const response = await this.axios.post(this.app.endPoint, formData, headers);
            switch (this.app.link) {
              case '/vision/bearimages':
                this.transformBear(response.data.result);
                break;
              case '/healthcare/mura':
                this.transformResults(response.data.result, 'number');
                break;
              case '/healthcare/breastcancer':
                this.transformResults(response.data.result, 'number');
                break;
              case '/healthcare/pneumonia':
                this.transformResults(response.data.result, 'caps');
                break;
              default:
                this.pictureResult = response.data.result;
            }
             if (response.data.predictions) {
              this.predictions = response.data.predictions.sort((a,b) => {
                return b.prob - a.prob
              });
              this.pictureResult = this.predictions[0].class;
            }
          this.loadingResults = false;
          this.analyzing = false;
        } catch (error) {
          console.error(error);
          this.error = error;
          this.loadingResults = false;
        }
      } else {
        this.error = 'Please select a file'
      }
    },
    formatPercentage(percentage) {
      return Math.round(percentage * 100);
    }
  },
  mounted() {
    this.imageSetName = this.app.imageSet;

    var filterImages = this.images.filter(image => {
      return image.category == this.imageSetName;
    });

    if (filterImages.length > 0) {
      this.selectedImages = filterImages[0].images;
    }
  },
}
</script>

<style scoped lang="scss">
$background-main: #05386B;
.app-icon {
  width: 20px;
  margin-bottom: -3px;
}
h3 {
  color: $background-main;
  margin-bottom: 10px;
}
input {
  display: none;
}
label {
  cursor: pointer;
  border: none;
  background: white;
  border: 1px solid rgb(198, 198, 198);
  padding: 3px 10px;
  font-size: 13px;
  border-radius: 3px;
  &:hover {
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  }
}
.loading-dots {
  text-align: left;
  z-index: 5;
  border: 1px solid red;
  display: inline;
  position: relative;
  top: 0px;
  .dot {
    display: inline;
    margin: 0 3px;
    font-size: 3.5em;
    line-height: 10px;
    font-weight: bold;
    opacity: 0;
    animation: showHideDot 2.5s ease-in-out infinite;
    &.one { animation-delay: 0.2s; }
    &.two { animation-delay: 0.4s; }
    &.three { animation-delay: 0.6s; }
  }
}
@keyframes showHideDot {
  0% { opacity: 0; }
  50% { opacity: 1; }
  60% { opacity: 1; }
  100% { opacity: 0; }
}

.predictions {
  .category {
    text-transform: capitalize;
  }
}
.child-app {
  margin-top: 20px;
}
.description {
  margin-bottom: 30px;
}
.image-preview {
  height: 200px;
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
  max-width: 400px;
  background: #bfbfbf;
  opacity: 0.3;
  height: 200px;
}
#output-image {
  max-width: 400px;
  max-height: 200px;
}
.results-container {
  margin: 40px 0;
}
.long-container {
  height: 120px;
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
  color: #e74c3c;
}
button {
  margin-top: 10px;
  color: white;
  //background: #34d671;
  border: none;
  border-radius: 3px;
  padding: 8px 25px;
  font-weight: 700;
  font-size: 14px;
}
button:hover {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
</style>