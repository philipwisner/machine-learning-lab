<template>
  <div class="tabular">
    <CategoryHeader :categoryName="categoryName" :categories="categories" :images="images"/>
  </div>
</template>

<script>
import CategoryHeader from '@/components/Reusable/CategoryHeader.vue';

export default {
  name: 'Tabular',
    components: {
      CategoryHeader
  },
  props: {
    categories: Array,
    images: Array,
  },
  data() {
    return {
      categoryName: "Tabular",
    }
  }
}
</script>