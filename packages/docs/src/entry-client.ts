/**
 * Entry Client
 */

import { createApp } from '@src/main';

const { app, router } = createApp();

router.onReady(() => {
  app.$mount('#app');
});
