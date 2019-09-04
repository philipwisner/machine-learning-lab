import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vision from "./views/Vision.vue"
import Nlp from "./views/Nlp.vue";
import Gan from "./views/Gan.vue";
import Tabular from "./views/Tabular.vue";
import Healthcare from "./views/Healthcare.vue";

import BearImages from "./components/Apps/Computer Vision/BearImages.vue";
import NlpChild from "./components/Apps/NlpChild.vue";
import GanChild from "./components/Apps/GanChild.vue";
import TabularChild from "./components/Apps/TabularChild.vue";
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
      path: "/vision",
      name: "vision",
      component: Vision,
      children: [
        {
          path: "bearimages",
          component: BearImages
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
          path: "healthcarechild",
          component: HealthcareChild
        }
      ]
    }
  ]
});