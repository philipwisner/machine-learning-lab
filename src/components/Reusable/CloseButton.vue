<template>
  <div class="close-button">
    <button @click="goToHome">
      <img src="../../assets/close.svg" alt="close">
    </button>
  </div>
</template>

<script>
export default {
  name: 'CloseButton',
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: none;
  background: none;
  position: absolute;
  right: 30px;
  cursor: pointer;
}
button:focus {
  outline: none;
}
img {
  width: 25px;
}

</style>
