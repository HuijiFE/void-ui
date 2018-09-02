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
      component: async () =>
        import(/* webpackChunkName: "chunk-general_button" */ '@docs/views/Test'),
    },
    {
      path: '/markdown',
      component: async () => import('@docs/views/Markdown.md'),
    },
    {
      path: '/home',
      component: async () => import('@docs/views/Home'),
    },
  ],
});
