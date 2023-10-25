import Vue from 'vue';
import VueRouter from 'vue-router';
import Artists from '../views/Artists.vue';
import Discos from '../views/Discos.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/artists',
    name: 'artists',
    component: Artists,
  },
  {
    path: '/discos',
    name: 'Discos',
    component: Discos
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
