<template>
  <div class="nlp">
    <CategoryHeader :categoryName="categoryName" :categories="categories" :images="images"/>
  </div>
</template>

<script>
import CategoryHeader from '@/components/Reusable/CategoryHeader.vue';

export default {
  name: 'Nlp',
    components: {
      CategoryHeader
  },
  props: {
    categories: Array,
    images: Object,
  },
  data() {
    return {
      categoryName: "NLP/NLU",
    }
  }
}
</script>


