<template>
  <div class="category" :class="[category.class, {'selected': $route.path.includes(category.link)}]" @click="updateRoute(category.link)">
      <h4>{{category.name}}</h4>
      <p>{{category.description}}</p>
    </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    category: Object,
  },
  methods: {
    updateRoute(route) {
      if (this.$route.path !== route) {
        this.$router.push(route);
      }
    }
  }
}
</script>

<style scoped>
.category {
  background: white;
  margin-bottom: 15px;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  transform: scale(.98);
  transition: all .05s ease-in-out;
}
.category:hover {
  transform: scale(1);
}
.category-box {
  border: 1px solid white;
  width: 100%;
}
h4 {
  color: white;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
}
p {
  color: white;
  font-weight: 13px;
}
.vision {
  background: linear-gradient(to bottom right, #34D671, #4EFD9D);
}
.nlp {
  background: linear-gradient(to bottom right, #0099FF, #4AB7FF);
}
.gan {
  background: linear-gradient(to bottom right,#DD7812, #FFA143);
}
.tabular {
  background: linear-gradient(to bottom right, #9D2786, #CC29AD);
}
.healthcare {
  background: linear-gradient(to bottom right, #FF2F27, #FD6161);
}
.selected {
  transform: scale(1);
}
</style>
