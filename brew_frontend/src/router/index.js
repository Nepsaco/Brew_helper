import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import Recipes from '../components/Recipe.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/recipes/:id',
    name: 'recipes',
    component: Recipes,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
