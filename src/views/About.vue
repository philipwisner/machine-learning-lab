<template>
  <div class="about">
    <CloseButton />
    <BackButton path="/" />
    <div class="about-content">
      <div class="content-block header">
        <h2>About Us</h2>
        <p
          class="description"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien quam, efficitur sed nibh tempus, efficitur iaculis lacus. Curabitur ut hendrerit velit. Ut iaculis ligula mauris, ac porttitor tellus vehicula semper. Nam vitae risus lectus. Nam pellentesque sit amet dui sit amet vehicula.</p>
      </div>
    </div>
  </div>
</template>

<script>
import CloseButton from "@/components/Reusable/CloseButton.vue";
import BackButton from "@/components/Reusable/BackButton.vue";

export default {
  name: "About",
  components: {
    CloseButton,
    BackButton
  },
  props: {
    members: Array
  }
};
</script>

<style lang="scss" scoped>
.about-content {
  padding: 5%;
}
h2 {
  color: #05386b;
  margin-bottom: 20px;
  font-size: 26px;
}
a {
  color: #0099ff;
  font-weight: 600;
  text-decoration: none;
}
p {
  color: #242424;
}
.content-block {
  margin-bottom: 30px;
}
.content-block.header {
  margin-bottom: 70px;
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
  background: #b4d9ff;
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
  color: #05386b;
  font-weight: 700;
  margin-bottom: 5px;
}
.info-content {
  font-size: 16px;
}
</style>
