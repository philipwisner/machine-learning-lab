<template>
  <div class="home">
    <Welcome :reasons="reasons"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'home',
  components: {
    Welcome
  },
  props: {
    reasons: Array
  }
}
</script>
