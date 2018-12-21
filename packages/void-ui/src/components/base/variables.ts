// tslint:disable:no-any
/**
 * Void-UI variables
 */
import { VNode } from 'vue';

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

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type Align = 'start' | 'center' | 'end';

export type FlexAlign =
  | Align
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
export type FlexJustify = Align | 'space-between' | 'space-around' | 'space-evenly';

export type Flex = 'initial' | 'auto' | 'none' | 'expand' | number;

// Various Positions --------

/**
 * Use for various indicators, where are they placed related to the component main element.
 */
export type AroundPosition = 'inside' | 'outside';

/**
 * Use for absolute position components, how the component dock to its parent or screen.
 */
export type DockPosition = 'center' | 'top' | 'bottom' | 'left' | 'right';

/**
 * Use for float components, where the component show related to its trigger.
 */
export type FloatPosition =
  | 'top'
  | 'bottom'
  | 'top-or-bottom'
  | 'left'
  | 'right'
  | 'left-or-right';

// Use for a float component, trigger show event
export type Trigger = 'hover' | 'click' | 'focus' | 'none';

/**
 * Component with theme color.
 */
export interface FloatComponent {
  className(): string;
  renderContent(): VNode | VNode[] | string | undefined;
}
