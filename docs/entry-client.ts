/**
 * Entry Client
 */

import { createApp } from '@docs/App.tsx';

const { app, router } = createApp();

router.onReady(() => {
  app.$mount('#app');
});
