import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable-next-line:no-empty-interface
    interface Element extends VNode {}
    // tslint:disable-next-line:no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elementName: string]: any;
    }
  }
}
