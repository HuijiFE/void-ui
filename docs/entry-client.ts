/**
 * Entry Client
 */

import { createApp } from '@docs/main';

const { app, router } = createApp();

router.onReady(() => {
  app.$mount('#app');
});
