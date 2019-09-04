<template>
  <div class="tabular">
    <CategoryHeader :categoryName="categoryName" :categories="categories"/>
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
    categories: Array
  },
  data() {
    return {
      categoryName: "Tabular",
    }
  }
}
</script>