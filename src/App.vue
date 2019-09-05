<template>
  <div id="app">
    <NavPanel id="nav-panel" :categories="categories"/>
    <router-view id="router-view" :reasons="reasons" :categories="categories" :members="members" :images="images"/>
  </div>
</template>

<script>
import NavPanel from '@/components/NavPanel.vue'
import appData from './data'


export default {
  name: 'App',
  components: {
    NavPanel
  },
  data () {
    return {
      categories: appData.categories,
      reasons: appData.reasons,
      members: appData.members,
      images: appData.imageSets,
    }
  }
}

</script>

<style lang="scss">

$background-main: #05386B;
$box-shadow: 0px 3px 6px 3px rgba(0,0,0,.2);
$dark-font: #2c3e50;
$light-font: #7f8c8d;
$border-color: #BFBFBF;

* {
  margin: 0;
}
#app {
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  background: $background-main;
}
#nav-panel {
  flex: 1 1 50%;
}
#router-view {
  box-shadow: $box-shadow;
  padding: 20px;
  flex: 1 1 50%;
  background: white;
  margin: 30px 20px;
  border-radius: 10px;
  overflow-y: auto;
}
h3 {
  font-size: 22px;
}
button {
  cursor: pointer;
}
button:focus {
  outline: none;
}
</style>
