import Vue from 'vue';
import Router from 'vue-router';

import Hello from 'src/components/Hello.vue';
import VueJs from 'src/components/VueJs.vue';
import TypeScript from 'src/components/TypeScript.vue';

Vue.use(Router);

export default new Router({
  // Use html5 history api, for multi pages app.
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/vuejs',
      name: 'VueJs',
      component: VueJs,
    },
    {
      path: '/typescript',
      name: 'TypeScript',
      component: TypeScript,
    },
  ],
});
