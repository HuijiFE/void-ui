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
  ResponsiveValues,
  RecordResponsiveValues,
} from '@void/ui/lib/components/base/variables';

let $$Vue: typeof Vue | undefined;

export interface MediaScreen extends Readonly<Record<MediaAlias, boolean>> {}

export interface MediaHub {
  readonly screen: MediaScreen;
  getMediaQueryListsMap(): Readonly<Record<BreakPointKey, MediaQueryList>>;
  subscribe<T extends number | string | boolean>(
    vm: Vue,
    propName: string,
    values: ResponsiveValues<T> | undefined,
    update: (value: T | undefined) => void,
  ): void;
  unsubscribeAll(vm: Vue): void;
}

export interface VdMediaOptions {
  breakpoints?: BreakPoints;
}

interface Consumer<T extends number | string | boolean = any> {
  vm: Vue;
  propName: string;
  values: RecordResponsiveValues<T>;
  update(value: T): void;
}

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

  public static readonly install: PluginFunction<VdMediaOptions> = ($Vue, options?) => {
    if ($$Vue && $$Vue === $Vue) {
      return;
    }

    $$Vue = $Vue;

    const breakpoints: BreakPoints | undefined = options && options.breakpoints;

    if (breakpoints) {
      // validate breakpoints
      BREAK_POINT_KEYS.forEach(key => {
        if (typeof breakpoints[key] !== 'number' || isNaN(breakpoints[key])) {
          throw Error(
            `Invalid options for plugin VdMedia, breakpoints.${key} should be a number`,
          );
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

  public getMatchedAliases(): MediaAlias[] {
    return MEDIA_ALIASES.filter(a => this.screen[a]);
  }

  private onScreenChange(activeKey: BreakPointKey): void {
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

  public getMediaQueryListsMap(): Record<BreakPointKey, MediaQueryList> {
    return { ...this.mqlMap };
  }

  private consumerList!: Consumer[];

  private dispatch(matchedAliases: MediaAlias[], consumer: Consumer): void {
    // tslint:disable-next-line:prefer-for-of
    for (let index: number = 0; index < matchedAliases.length; index++) {
      const value: any = consumer.values[matchedAliases[index]];
      if (value !== undefined) {
        return consumer.update(value);
      }
    }
    consumer.update(consumer.values.staticValue);
  }

  public subscribe<T extends number | string | boolean>(
    vm: Vue,
    propName: string,
    values: ResponsiveValues<T> | undefined,
    update: (value: T | undefined) => void,
  ): void {
    const index: number = this.consumerList.findIndex(
      c => c.vm === vm && c.propName === propName,
    );
    if (index > -1) {
      this.consumerList.splice(index, 1);
    }

    if (typeof values === 'object') {
      const consumer: Consumer = {
        vm,
        propName,
        update,
        values,
      };
      this.dispatch(this.getMatchedAliases(), consumer);
      this.consumerList.push(consumer);
    } else {
      update(values);
    }
  }

  public unsubscribeAll(vm: Vue): void {
    this.consumerList = this.consumerList.filter(c => c.vm !== vm);
  }

  @Watch('screen', { deep: true })
  private watchScreen(): void {
    const matchedAliases: MediaAlias[] = this.getMatchedAliases();
    // tslint:disable-next-line:prefer-for-of
    for (let index: number = 0; index < this.consumerList.length; index++) {
      this.dispatch(matchedAliases, this.consumerList[index]);
    }
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
        this.onScreenChange(key);
      }
      mql.addListener(e => {
        if (e.matches) {
          this.onScreenChange(key);
        }
      });
    });

    this.consumerList = [];
  }
}
