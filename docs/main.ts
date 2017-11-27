// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';

import App from 'docs/App.vue';

Vue.config.productionTip = false;

/* tslint:disable no-unused-expression */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

/* tslint:enable */
