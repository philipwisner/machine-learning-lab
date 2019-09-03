<template>
  <div id="app">
    <NavPanel id="nav-panel" :categories="categories"/>
    <router-view id="router-view" :reasons="reasons"/>
  </div>
</template>

<script>
import NavPanel from '@/components/NavPanel.vue'
import appData from './data'


export default {
  name: 'home',
  components: {
    NavPanel
  },
  data () {
    return {
      categories: appData.categories,
      reasons: appData.reasons,
    }
  }
}

</script>

<style>
* {
  margin: 0;
}
#app {
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  background: #05386B;
}
#nav-panel {
  flex: 1 1 50%;
}
#router-view {
  height: calx(100vh - 60px);
  box-shadow: 0px 3px 6px 3px rgba(0,0,0,.2);
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
/* SHARED STYLES */
.category-content {
  padding: 5%;
}
.app-list-container {
  margin-top: 60px;
}
.app-list {
  display: flex;
  flex-wrap: wrap;
}
.app {
  flex: 1 1 100%;
  border: 1px solid #BFBFBF;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 40px 20px;
  text-decoration: none;
}
.computer-vision {
  padding: 0 20px;
}
.description {
  margin-bottom: 30px;
}
.count {
  font-size: 16px;
  margin-left: 5px;
}
</style>
