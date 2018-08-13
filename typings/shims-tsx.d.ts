import Vue, { VNode } from 'vue';
import { VdButtonProps } from '../lib/components/basic/button/button';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
      // 'vd-button': VdButtonProps;
    }
  }
}
