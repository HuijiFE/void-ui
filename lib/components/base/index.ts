import Vue, { ComponentOptions } from 'vue';

/**
 * Type of computed property classes.
 */
// tslint:disable-next-line:no-any
export type ClassName = (string | { [cssPropName: string]: any })[];

/**
 * Type of prop theme
 */
export type Theme = 'lite' | 'dark';

/**
 * A component that can be styled via property theme.
 */
export interface ThemeComponent {
  readonly theme: Theme;
  readonly $theme: Theme;
}

/**
 * Type of prop tone
 */
export type Tone = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

/**
 * Type of prop skin
 */
export type Skin = 'fill' | 'flat' | 'plain' | 'silk';

/**
 * Type of prop shape
 */
export type Shape = 'rect' | 'pill' | 'square' | 'circle';

/**
 * Type of prop size
 */
export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
