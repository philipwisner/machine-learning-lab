<template>
  <div class="healthcare">
    <CategoryHeader :categoryName="categoryName" :categories="categories" :images="images"/>
  </div>
</template>

<script>
import CategoryHeader from '@/components/Reusable/CategoryHeader.vue';

export default {
  name: 'Healthcare',
    components: {
      CategoryHeader
  },
  props: {
    categories: Array,
    images: Array,
  },
  data() {
    return {
      categoryName: "Healthcare",
    }
  }
}
</script>
