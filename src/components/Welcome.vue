<template>
  <div class="welcome">
    <div class="content-block header">
      <h2>What is Machine Learning?</h2>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien quam, efficitur sed nibh tempus, efficitur iaculis lacus. Curabitur ut hendrerit velit. Ut iaculis ligula mauris, ac porttitor tellus vehicula semper. Nam vitae risus lectus. Nam pellentesque sit amet dui sit amet vehicula.
      </p>
      <a href="#">Learn More</a>
    </div>
    <div class="content-block">
      <h2>The Impacts of Machine Learning</h2>
      <div class="subcontent-block" :key="reason.$index" v-for="reason in reasons">
        <div class="icon-block">
          <img src="../assets/logo.svg" alt="icon">
        </div>
        <div class="info-block">
          <p class="info-header">{{reason.heading}}</p>
          <p class="info-content">{{reason.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    reasons: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: #05386B;
  margin-bottom: 20px;
  font-size: 26px;
}
a {
  color: #0099FF;
  font-weight: 600;
  text-decoration: none;
}
p {
  color: #242424;
}
.welcome {
  padding: 5%;
}
.content-block {
  margin-bottom: 30px;
}
.content-block.header {
  margin-bottom: 100px;
}
.description {
  margin-bottom: 20px;
}
.subcontent-block {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  padding-left: 20px;
}
.icon-block {
  flex: 0 1 auto;
  width: 70px;
  height: 70px;
  background:#B4D9FF;
  border-radius: 5px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.info-block {
  flex: 1 1 auto;
  margin-left: 40px;
}
.info-header {
  font-size: 20px;
  color: #05386B;
  font-weight: 700;
  margin-bottom: 5px;
}
.info-content {
  font-size: 16px;
}

</style>
