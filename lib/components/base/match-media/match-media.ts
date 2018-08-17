// tslint:disable:no-invalid-this no-any no-unsafe-any

import Vue, { PluginObject } from 'vue';
import {
  BreakPointKey,
  BreakPoints,
  KEYOF_BREAK_POINTS,
  DEFAULT_BREAK_POINTS,
} from '@void/ui/lib/components/base/variables';

let $$Vue: typeof Vue | undefined;

export type BreakPointAlias =
  | BreakPointKey
  | 'gtXs'
  | 'ltSm'
  | 'gtSm'
  | 'ltMd'
  | 'gtMd'
  | 'ltLg'
  | 'gtLg'
  | 'ltXl';

export interface MediaHub extends Readonly<Record<BreakPointAlias, boolean>> {
  getMediaQueryLists(): Readonly<Record<BreakPointAlias, MediaQueryList>>;
}

interface MediaHubInternal extends Record<BreakPointAlias, boolean> {}

/**
 * Media plugin for void-ui
 */
const plugin: PluginObject<BreakPoints> = {
  /**
   * @param $Vue the Vuejs
   * @param breakpoints the breakpoint dictionary
   */
  install: ($Vue, breakpoints = DEFAULT_BREAK_POINTS) => {
    if ($$Vue && $$Vue === $Vue) {
      return;
    }

    $$Vue = $Vue;

    // validate breakpoints
    KEYOF_BREAK_POINTS.forEach(key => {
      if (
        typeof breakpoints[key] !== 'number' ||
        breakpoints[key] !== Math.round(breakpoints[key])
      ) {
        throw Error(`Invalid breakpoints, breakpoints.${key} should be a integer number`);
      }
    });

    // tslint:disable-next-line:typedef
    const getPreviousKey = (key: BreakPointKey): BreakPointKey | undefined =>
      KEYOF_BREAK_POINTS[KEYOF_BREAK_POINTS.indexOf(key) - 1];

    // tslint:disable-next-line:typedef
    const getQuery = (alias: BreakPointAlias): string => {
      const key: BreakPointKey = alias
        .replace('lt', '')
        .replace('gt', '')
        .toLowerCase() as BreakPointKey;
      const breakpoint: number = breakpoints[key];
      const preKey: BreakPointKey | undefined = getPreviousKey(key);
      const preBreakpoint: number = preKey ? breakpoints[preKey] : 0;

      return alias.startsWith('lt')
        ? `(max-width: ${preBreakpoint - 0.02}px)`
        : alias.startsWith('gt')
          ? `(min-width: ${breakpoint}px)`
          : `(min-width: ${preBreakpoint}px) and (max-width: ${breakpoint - 0.02}px)`;
    };

    const createMQL: (query: string) => MediaQueryList =
      !!window && !!window.matchMedia && !!window.matchMedia('all').addListener
        ? query => window.matchMedia(query)
        : query => ({
            matches: false,
            media: query,
            addListener: listener => undefined,
            removeListener: listener => undefined,
          });

    const data: MediaHubInternal = {
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
    const mqlMap: Record<BreakPointAlias, MediaQueryList> = {} as any;

    (Object.keys(data) as BreakPointAlias[]).forEach(alias => {
      const mql: MediaQueryList = createMQL(getQuery(alias));
      data[alias] = mql.matches;
      mqlMap[alias] = mql;
    });

    $Vue.prototype.$vd_media = new $Vue({
      data,
      methods: {
        getMediaQueryLists: () => mqlMap,
      },
      created(): void {
        (Object.entries(mqlMap) as [BreakPointAlias, MediaQueryList][]).forEach(
          ([alias, mql]) =>
            mql.addListener(e => {
              if (this[alias] !== e.matches) {
                this[alias] = e.matches;
              }
            }),
        );
      },
    });
  },
};

export { plugin as PluginMatchMedia };
