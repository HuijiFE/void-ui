// tslint:disable:no-invalid-this no-any no-unsafe-any

import Vue, { PluginFunction } from 'vue';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import {
  BreakPointKey,
  MediaAlias,
  BreakPoints,
  BREAK_POINT_KEYS,
  MEDIA_ALIASES,
  DEFAULT_BREAK_POINTS,
} from '@void/ui/lib/components/base/variables';

let $$Vue: typeof Vue | undefined;

export interface MediaScreen extends Readonly<Record<MediaAlias, boolean>> {}

export interface MediaHub {
  readonly screen: MediaScreen;
  getMediaQueryLists(): Readonly<Record<BreakPointKey, MediaQueryList>>;
}

const additionalAliases: MediaAlias[] = MEDIA_ALIASES.filter(
  a => !(BREAK_POINT_KEYS as string[]).includes(a),
);

/**
 * Vue plugin for responsive media query.
 */
@Component
export class VdMedia extends Vue implements MediaHub {
  private static breakpoints: BreakPoints = DEFAULT_BREAK_POINTS;

  private static getQuery(key: BreakPointKey): string {
    const breakpoint: number = VdMedia.breakpoints[key];
    const keyNext: BreakPointKey | undefined =
      BREAK_POINT_KEYS[BREAK_POINT_KEYS.indexOf(key) + 1];
    const breakpointNext: number | undefined = keyNext && VdMedia.breakpoints[keyNext];

    return breakpointNext
      ? `(min-width: ${breakpoint}px) and (max-width: ${breakpointNext - 0.2}px)`
      : `(min-width: ${breakpoint}px)`;
  }

  public static readonly install: PluginFunction<BreakPoints> = ($Vue, breakpoints?) => {
    if ($$Vue && $$Vue === $Vue) {
      return;
    }

    $$Vue = $Vue;

    if (breakpoints) {
      // validate breakpoints
      BREAK_POINT_KEYS.forEach(key => {
        if (typeof breakpoints[key] !== 'number' || isNaN(breakpoints[key])) {
          throw Error(`Invalid breakpoints, breakpoints.${key} should be a number`);
        }
      });

      VdMedia.breakpoints = breakpoints;
    }

    $Vue.prototype.$vd_media = new VdMedia();
  };

  public readonly screen: Record<MediaAlias, boolean> = {
    xs: false,
    gtXs: false,

    ltSm: false,
    sm: false,
    gtSm: false,

    ltMd: false,
    md: false,
    gtMd: false,

    ltLg: false,
    lg: false,
    gtLg: false,

    ltXl: false,
    xl: false,
  };

  private setScreen(activeKey: BreakPointKey): void {
    const activeIndex: number = BREAK_POINT_KEYS.indexOf(activeKey);
    BREAK_POINT_KEYS.forEach((key, index) => {
      this.screen[key] = key === activeKey;
      this.screen[`lt${key.charAt(0).toUpperCase()}${key.substring(1)}` as MediaAlias] =
        index > activeIndex;
      this.screen[`gt${key.charAt(0).toUpperCase()}${key.substring(1)}` as MediaAlias] =
        index < activeIndex;
    });
  }

  private readonly mqlMap: Record<BreakPointKey, MediaQueryList> = {} as any;

  public getMediaQueryLists(): Record<BreakPointKey, MediaQueryList> {
    return this.mqlMap;
  }

  private created(): void {
    const createMQL: (query: string) => MediaQueryList =
      !this.$isServer &&
      window !== undefined &&
      window.matchMedia &&
      window.matchMedia('all').addListener
        ? query => window.matchMedia(query)
        : query => ({
            matches: false,
            media: query,
            addListener: listener => undefined,
            removeListener: listener => undefined,
          });

    BREAK_POINT_KEYS.forEach(key => {
      const mql: MediaQueryList = createMQL(VdMedia.getQuery(key));
      this.mqlMap[key] = mql;
      if (mql.matches) {
        this.setScreen(key);
      }
      mql.addListener(e => {
        if (e.matches) {
          this.setScreen(key);
        }
      });
    });
  }
}
