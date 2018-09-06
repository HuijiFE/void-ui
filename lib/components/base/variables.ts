// tslint:disable:no-any
/**
 * Void-UI variables
 */

export const DEFAULT_ROOT_FONT_SIZE: number = 100;
export const NAMESPACE: string = 'vd';

export type Style = { [P in keyof CSSStyleDeclaration]+?: string | number | null };
export type ClassName = (string | { [cssPropName: string]: any })[];

// --------------------------------
// Core style system

export type Theme = 'lite' | 'dark';
export type Tone = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type Skin = 'fill' | 'flat' | 'plain' | 'silk';
export type Shape = 'rect' | 'pill' | 'square' | 'circle';
export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export const THEME_KEYS: ReadonlyArray<Theme> = ['lite', 'dark'];
export const TONE_KEYS: ReadonlyArray<Tone> = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
];
export const SKIN_KEYS: ReadonlyArray<Skin> = ['fill', 'flat', 'plain', 'silk'];
export const SHAPE_KEYS: ReadonlyArray<Shape> = ['rect', 'pill', 'square', 'circle'];
export const SIZE_KEYS: ReadonlyArray<Size> = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
];

/**
 * Component with theme color.
 */
export interface ThemeComponent {
  readonly theme?: Theme;
  readonly themeValue: Theme;
}

/**
 * Component can be used as a anchor-link (<a href="..."/>) or a router-link.
 */
export interface LinkLikeComponent {
  readonly tag: string;
  readonly routerLink: boolean;
}

// --------------------------------
// Responsive

export type BreakPointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MediaAlias =
  | BreakPointKey
  | 'gtXs'
  | 'ltSm'
  | 'gtSm'
  | 'ltMd'
  | 'gtMd'
  | 'ltLg'
  | 'gtLg'
  | 'ltXl';

export interface BreakPoints extends Record<BreakPointKey, number> {}

export interface RecordResponsiveValues<T extends number | string | boolean>
  extends Partial<Record<MediaAlias, T>> {
  staticValue?: T;
}

export type ResponsiveValues<T extends number | string | boolean> =
  | T
  | RecordResponsiveValues<T>;

export const BREAK_POINT_KEYS: ReadonlyArray<BreakPointKey> = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
];

/**
 * Media query alias.
 * DO NOT change the orders,these decide the priority for responsive values
 */
export const MEDIA_ALIASES: ReadonlyArray<MediaAlias> = [
  ...BREAK_POINT_KEYS,
  'ltSm',
  'ltMd',
  'ltLg',
  'ltXl',
  'gtLg',
  'gtMd',
  'gtSm',
  'gtXs',
];

export const DEFAULT_BREAK_POINTS: BreakPoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

// --------------------------------
// Layout

export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
