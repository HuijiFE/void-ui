import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from 'docs/components/HelloWorld.vue';

Vue.use(Router);

async function buttonArticle() {
  const component = await import('../articles/zhcn/button.md');
  return component;
}

export default new Router({
  // Use html5 history api, for multi pages app.
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/zhcn/controls/button',
      name: 'Button',
      component: buttonArticle,
    },
  ],
});
