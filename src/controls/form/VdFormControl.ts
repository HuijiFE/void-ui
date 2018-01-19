import { Location } from 'vue-router/types/router';

export type RadioValue = string | number;

export type CheckboxValue = string | number;

export type ToggleValue = boolean | string | number;

export type TagValue = string | number;

export interface TagData {
  value: TagValue;
  content: string;
  href?: string;
  to?: string | Location;
}
