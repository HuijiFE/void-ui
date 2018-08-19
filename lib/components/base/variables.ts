// tslint:disable:no-any
/**
 * Void-UI variables
 */

export const DEFAULT_ROOT_FONT_SIZE: number = 100;
export const NAMESPACE: string = 'vd';

/**
 * Type of computed property style
 */
export type Style = { [P in keyof CSSStyleDeclaration]+?: string | number | null };

/**
 * Type of computed property classes
 */
export type ClassName = (string | { [cssPropName: string]: any })[];

// --------------------------------
// Theme

export type Theme = 'lite' | 'dark';

/**
 * A component that can be styled via property theme.
 */
export interface ThemeComponent {
  readonly theme: Theme;
  readonly $theme: Theme;
}

// --------------------------------
// Tone

export type Tone = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

// --------------------------------
// Skin

export type Skin = 'fill' | 'flat' | 'plain' | 'silk';

// --------------------------------
// Shape

export type Shape = 'rect' | 'pill' | 'square' | 'circle';

// --------------------------------
// Size

export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

// --------------------------------
// Layout

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

export interface RecordResponsiveValues<T> extends Partial<Record<MediaAlias, T>> {
  value: T;
}

export type ResponsiveValues<T> = T | RecordResponsiveValues<T>;

export const BREAK_POINT_KEYS: ReadonlyArray<BreakPointKey> = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
];
export const MEDIA_ALIASES: ReadonlyArray<MediaAlias> = [
  ...BREAK_POINT_KEYS,
  'gtXs',
  'ltSm',
  'gtSm',
  'ltMd',
  'gtMd',
  'ltLg',
  'gtLg',
  'ltXl',
];

export const DEFAULT_BREAK_POINTS: BreakPoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};
