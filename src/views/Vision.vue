<template>
  <div class="computer-vision">
    <CategoryHeader :categoryName="categoryName" :categories="categories" :images="images"/>
  </div>
</template>

<script>
import CategoryHeader from '@/components/Reusable/CategoryHeader.vue';

export default {
  name: 'Vision',
    components: {
      CategoryHeader
  },
  props: {
    categories: Array,
    images: Object,
  },
  data() {
    return {
      categoryName: "Computer Vision",
    }
  }
}
</script>