import Vue from 'vue';
import { VoidHub } from '@void/controls/base/VdControl';

declare module 'vue/types/vue' {
  interface Vue {
    $void: VoidHub;
  }
}
