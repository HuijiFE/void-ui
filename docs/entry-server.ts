/**
 * Entry Server
 */
import Vue from 'vue';
import { createApp } from '@docs/main';

export default async (context: { url: string; state?: any }): Promise<Vue> => {
  const { app, router } = createApp();

  return new Promise<Vue>((resolve, reject) => {
    router.push(context.url);

    router.onReady(() => {
      resolve(app);
    });
  });
};