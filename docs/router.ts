import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/**
 * Router
 */
export default new Router({
  base: '/void-ui/',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/test',
    },
    {
      path: '/test',
      component: async () => import('@docs/views/Test'),
    },
    {
      path: '/home',
      component: async () => import('@docs/views/Home'),
    },
  ],
});
