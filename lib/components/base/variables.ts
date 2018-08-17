/**
 * Void-UI variables
 */

export const DEFAULT_ROOT_FONT_SIZE: number = 100;
export const NAMESPACE: string = 'vd';

/**
 * Type of computed property style
 */
export type Style = Partial<CSSStyleDeclaration>;

/**
 * Type of computed property classes
 */
// tslint:disable-next-line:no-any
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

export interface BreakPoints extends Record<BreakPointKey, number> {}

export const KEYOF_BREAK_POINTS: BreakPointKey[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const DEFAULT_BREAK_POINTS: BreakPoints = {
  xs: 600,
  sm: 960,
  md: 1280,
  lg: 1920,
  xl: 5000,
};
