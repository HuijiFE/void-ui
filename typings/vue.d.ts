/**
 * Augment the typings of Vue.js
 */

import Vue from 'vue';
import { ThemeHub, VdTheme } from '../lib/void-ui';

declare module 'vue/types/vue' {
  interface Vue {
    $vdTheme?: ThemeHub;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    vdTheme?: VdTheme;
  }
}
