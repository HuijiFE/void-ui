import Vue, { AsyncComponent } from 'vue';
import VueRouter, { RouterOptions, RouteConfig } from 'vue-router';
import { VTest } from '@src/views/test';
import { VIndex } from '@src/views';
import { VHome } from '@src/views/home';
import { VGuide } from '@src/views/guide';
import { VComponents } from '@src/views/components';
import { VApis } from '@src/views/apis';

import zhCN from '@src/articles/zh-CN/all';
const articles: RouteConfig[][] = [zhCN];

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
        redirect: '/zh-CN/components',
      },
      {
        path: '/test',
        name: 'test',
        component: VTest,
      },
      ...['zh-CN'].map<RouteConfig>((lang, index) => ({
        path: `/${lang}`,
        component: VIndex,
        children: [
          {
            path: '',
            name: 'home',
            component: VHome,
          },
          {
            path: 'guide',
            name: 'guide',
            component: VGuide,
          },
          {
            path: 'components',
            component: VComponents,
            children: articles[index],
          },
          {
            path: 'apis',
            name: 'apis',
            component: VApis,
          },
        ],
      })),
    ],
  });
