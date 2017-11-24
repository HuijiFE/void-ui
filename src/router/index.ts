import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from 'src/components/HelloWorld.vue';
import VueJs from 'src/components/VueJs.vue';
import TypeScript from 'src/components/TypeScript.vue';
import DomGhost from 'src/components/DomGhost.vue';

Vue.use(Router);

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
      path: '/vuejs',
      name: 'VueJs',
      component: VueJs,
    },
    {
      path: '/typescript',
      name: 'TypeScript',
      component: TypeScript,
    },
    {
      path: '/domghost',
      name: 'DomGhost',
      component: DomGhost,
    },
  ],
});
