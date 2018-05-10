/**
 * Augment the typings of Vue.js
 */

import Vue from 'vue';
import { VoidHub } from './controls/base/VdControl';

declare module 'vue/types/vue' {
  interface Vue {
    $void: VoidHub;
  }
}
