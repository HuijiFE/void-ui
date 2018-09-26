/**
 * Entry Client
 */

import { createApp } from '@docs/src/main';

const { app, router } = createApp();

router.onReady(() => {
  app.$mount('#app');
});
