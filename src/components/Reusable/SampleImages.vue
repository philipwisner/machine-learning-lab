<template>
  <div class="sample-images">
    <!--<h3>Sample Images</h3>-->
    <div class="sample-images-container">
      <div class="image-container" :key="image.$index" v-for="image in selectedImages" :style="{ backgroundImage: 'url(' + image.path + ')' }" @click="setSelectedFile(image)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SampleImages',
  props: {
    selectedImages: Array,
  },
  data() {
    return {
      //Detemine image set based off url?
    }
  },
  methods: {
    setSelectedFile(image) {
      console.log('image selected', image);
      this.$emit('image-selected', image);
    }
  }
}
</script>

<style scoped>
h3 {
  margin-top: 15px;
}
.sample-images-container {
  margin: 20px 0 20px 0;
  display: flex;
}
.image-container {
  cursor: pointer;
  width: 70px;
  height: 70px;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
