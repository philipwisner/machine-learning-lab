import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vision from "./views/Vision.vue"
import Nlp from "./views/Nlp.vue";;
import Gan from "./views/Gan.vue";
import Tabular from "./views/Tabular.vue";
import Healthcare from "./views/Healthcare.vue";


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
    },
    {
      path: "/nlp",
      name: "nlp",
      component: Nlp
    },
    {
      path: "/gan",
      name: "gan",
      component: Gan
    },
    {
      path: "/tabular",
      name: "tabular",
      component: Tabular
    },
    {
      path: "/healthcare",
      name: "healthcare",
      component: Healthcare
    }
  ]
});