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
}
</style>
