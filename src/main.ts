import Vue from 'vue';
import App from '@docs/App.vue';
import router from '@docs/router';

Vue.config.productionTip = false;

/**
 * App
 */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
