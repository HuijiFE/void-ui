import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import * as pages from 'docs/pages';
import Documentation from 'docs/components/Documentation.vue';
import { DocConfig, enUS, zhCN } from 'docs/articles.config';

Vue.use(Router);

const defaultLanguage = 'en-US';
const availableLanguage: ReadonlyArray<string> = ['en-US', 'zh-CN'];

const rootRouteConfig: RouteConfig = {
  path: '/',
  name: 'Void-UI',
  redirect: '/zh-CN',
  // redirect: to => {
  //   let userLanguage = navigator.language;
  //   if (userLanguage) {
  //     if (availableLanguage.indexOf(userLanguage) > -1) {
  //       return userLanguage;
  //     }
  //     userLanguage = userLanguage.split('-')[0];
  //     for (let languageCode of availableLanguage) {
  //       if (languageCode.startsWith(userLanguage)) {
  //         return languageCode;
  //       }
  //     }
  //   }
  //   return defaultLanguage;
  // },
};

// doc index

function genDocRoutes(
  language: string,
  docConfigs: DocConfig[],
  docRouteConfigs: RouteConfig[] = [],
) {
  docConfigs.forEach(config => {
    if (config.children) {
      genDocRoutes(language, config.children, docRouteConfigs);
    } else {
      docRouteConfigs.push({
        path: config.path || '',
        name: config.name,
        component: () => import(`docs/articles/${language}/${config.fileName}.md`),
      });
    }
  });
  return docRouteConfigs;
}

// Nav
function genNavRoutes(language: string): RouteConfig[] {
  return [
    {
      path: `/${language}`,
      component: pages.Home,
      props: {
        language: language,
      },
    },
    {
      path: `/${language}/about`,
      component: pages.About,
      props: {
        language: language,
      },
    },
    {
      path: `/${language}/changelog`,
      component: pages.ChangeLog,
      props: {
        language: language,
      },
    },
    {
      path: `/${language}/documentation`,
      component: Documentation,
      props: {
        language: language,
      },
      children: genDocRoutes(language, language === 'zh-CN' ? zhCN : enUS),
    },
  ];
}

const navRouteConfigs: RouteConfig[] = [
  ...genNavRoutes('en-US'),
  ...genNavRoutes('zh-CN'),
];

export default new Router({
  // Use html5 history api, for multi pages app.
  mode: 'history',
  routes: [rootRouteConfig, ...navRouteConfigs],
});
