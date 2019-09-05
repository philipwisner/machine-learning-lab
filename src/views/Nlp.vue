<template>
  <div class="nlp">
    <CategoryHeader :categoryName="categoryName" :categories="categories"/>
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
    categories: Array
  },
  data() {
    return {
      categoryName: "NLP/NLU",
    }
  }
}
</script>


