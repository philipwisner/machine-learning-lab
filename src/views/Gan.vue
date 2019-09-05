<template>
  <div class="gan">
    <CategoryHeader :categoryName="categoryName" :categories="categories" :images="images"/>
  </div>
</template>

<script>
import CategoryHeader from '@/components/Reusable/CategoryHeader.vue';

export default {
  name: 'Gan',
    components: {
      CategoryHeader
  },
  props: {
    categories: Array,
    images: Array,
  },
  data() {
    return {
      categoryName: "GAN",
    }
  }
}
</script>
