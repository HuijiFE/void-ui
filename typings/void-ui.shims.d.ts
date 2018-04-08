import Vue from "vue";
import { VoidHub } from '../src/controls/base/VdControl';

declare module 'vue/types/vue' {
  interface Vue {
    $void: VoidHub;
  }
}