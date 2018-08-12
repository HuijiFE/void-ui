/**
 * Augment the typings of Vue.js
 */

import Vue from 'vue';
import { VoidThemeHub, VoidTheme } from '../lib/plugins/VoidTheme';

declare module 'vue/types/vue' {
  interface Vue {
    $vdTheme?: VoidThemeHub;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    vdTheme?: VoidTheme;
  }
}
