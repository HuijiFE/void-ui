export type FlexboxFlex = null | string | number;
export type FlexboxGutter =
  | null
  | 'auto'
  | 'none'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge';
export type FlexboxDirection = null | 'row' | 'col';
export type FlexboxJustify = null | 'start' | 'end' | 'center' | 'between' | 'around';
export type FlexboxAlign = null | 'start' | 'end' | 'center' | 'stretch' | 'baseline';

export { default as VdFlexbox } from '../../src/controls/flexbox/VdFlexbox.vue';
