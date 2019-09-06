import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from "./views/About.vue";

//Category Pages
import Vision from "./views/Vision.vue";
import Healthcare from "./views/Healthcare.vue";
import Nlp from "./views/Nlp.vue";
import Gan from "./views/Gan.vue";
import Tabular from "./views/Tabular.vue";

//Outlet Components
import ImageUpload from "./components/Apps/ImageUpload.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/vision",
      name: "vision",
      component: Vision,
      children: [
        {
          path: "bearimages",
          component: ImageUpload
        },
        {
          path: "agedetector",
          component: ImageUpload
        },
        {
          path: "foodclassifier",
          component: ImageUpload
        }
      ]
    },
    {
      path: "/nlp",
      name: "nlp",
      component: Nlp,
    },
    {
      path: "/gan",
      name: "gan",
      component: Gan,
    },
    {
      path: "/tabular",
      name: "tabular",
      component: Tabular,
    },
    {
      path: "/healthcare",
      name: "healthcare",
      component: Healthcare,
      children: [
        {
          path: "breastcancer",
          component: ImageUpload
        },
        {
          path: "melanoma",
          component: ImageUpload
        },
        {
          path: "malaria",
          component: ImageUpload
        },
        {
          path: "mura",
          component: ImageUpload
        },
        {
          path: "pneumonia",
          component: ImageUpload
        }
      ]
    }
  ]
});