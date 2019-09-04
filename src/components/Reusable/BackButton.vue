<template>
  <div class="back-button">
    <button @click="goBack(path)">
      <img src="../../assets/back.svg" alt="back">
    </button>
  </div>
</template>

<script>
export default {
  name: 'BackButton',
  props: {
    path: String
  },
  methods: {
    goBack(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>

button {
  position: fixed;
  margin-left: -15px;
  border: none;
  background: none;
  cursor: pointer;
}
button:focus {
  outline: none;
}
img {
  width: 25px;
}

</style>
