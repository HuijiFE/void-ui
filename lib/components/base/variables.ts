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
