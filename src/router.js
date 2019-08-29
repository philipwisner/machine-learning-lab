import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Age from "./views/Age.vue";
import Vision from "./views/Vision.vue";
import Life from "./views/Life.vue";
import Recommend from "./views/Recommend.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/age",
      name: "age",
      component: Age
    },
    {
      path: "/vision",
      name: "vision",
      component: Vision
    },
    {
      path: "/life",
      name: "life",
      component: Life
    },
    {
      path: "/recommend",
      name: "recommend",
      component: Recommend
    }
  ]
});
