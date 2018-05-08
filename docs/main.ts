import Vue from 'vue';
import VoidUI from '@void/VoidUI';

// Font Awesome Icon
// API: https://fontawesome.com/how-to-use/font-awesome-api
// tslint:disable:match-default-export-name
import fontawesome from '@fortawesome/fontawesome';
import fontawesomeSolid from '@fortawesome/fontawesome-free-solid';
import fontawesomeRegular from '@fortawesome/fontawesome-free-regular';
import fontawesomeBrands from '@fortawesome/fontawesome-free-brands';
fontawesome.library.add(fontawesomeSolid, fontawesomeRegular, fontawesomeBrands);
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

import VoidBrand from '@docs/components/VoidBrand.vue';

import router from '@docs/router';
import App from '@docs/App.vue';

Vue.use(VoidUI, {
  theme: VoidUI.controls.Theme.lite,
});
Vue.component(VoidBrand.name, VoidBrand);

Vue.config.productionTip = false;

/**
 * App
 */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
