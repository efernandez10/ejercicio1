import Vue from 'vue';
import VueRouter from 'vue-router';
import Artists from '../views/Artists.vue';


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
    component: () => import(/* webpackChunkName: "discos" */ '../views/Discos.vue'), 
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
