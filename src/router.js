import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from "./views/About.vue";

//Computer Vision
import Vision from "./views/Vision.vue";
import ImageUpload from "./components/Apps/ImageUpload.vue";

//NLP
import Nlp from "./views/Nlp.vue";
import NlpChild from "./components/Apps/NlpChild.vue";

//GAN
import Gan from "./views/Gan.vue";
import GanChild from "./components/Apps/GanChild.vue";

//Tabular
import Tabular from "./views/Tabular.vue";
import TabularChild from "./components/Apps/TabularChild.vue";

//Healthcare
import Healthcare from "./views/Healthcare.vue";
import HealthcareChild from "./components/Apps/HealthcareChild.vue";


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
      children: [
        {
          path: "nlpchild",
          component: NlpChild
        }
      ]
    },
    {
      path: "/gan",
      name: "gan",
      component: Gan,
      children: [
        {
          path: "ganchild",
          component: GanChild
        }
      ]
    },
    {
      path: "/tabular",
      name: "tabular",
      component: Tabular,
      children: [
        {
          path: "tabularchild",
          component: TabularChild
        }
      ]
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