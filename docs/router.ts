import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/**
 * Router
 */
export const createRouter: () => VueRouter = () =>
  new VueRouter({
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
