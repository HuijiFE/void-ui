/**
 * Augment the typings of Vue.js
 */

import Vue from 'vue';
import { ThemeHub, VdTheme, MediaHub } from '../lib/void-ui';

declare module 'vue/types/vue' {
  interface Vue {
    $vd_theme: ThemeHub;
    $vd_media: MediaHub;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    vdTheme?: VdTheme;
  }
}
