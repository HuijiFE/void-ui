import Vue, { AsyncComponent } from 'vue';
import VueRouter, { RouterOptions, RouteConfig } from 'vue-router';
import { VTest } from '@docs/views/test';
import { VIndex } from '@docs/views';
import { VHome } from '@docs/views/home';
import { VGuide } from '@docs/views/guide';
import { VComponents } from '@docs/views/components';
import { VApis } from '@docs/views/apis';

import zhCN from '@docs/articles/zh-CN/all';
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
        redirect: '/zh-CN',
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
