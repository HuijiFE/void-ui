import { default as _Vue, PluginFunction } from 'vue';
import { Theme } from '@void/components/base';

let $Vue: typeof _Vue | undefined;

export interface VoidThemeHub {
  theme: Theme;
}

/**
 * Vue plugin: void-ui components theme context
 */
export class VoidTheme {
  // tslint:disable-next-line:variable-name
  public static readonly install: PluginFunction<undefined> = Vue => {
    if ($Vue && $Vue === Vue) {
      return;
    }

    $Vue = Vue;

    Vue.mixin({
      beforeCreate(): void {
        if (this.$options.vdTheme) {
          this.$vdTheme = this.$options.vdTheme.vm;
        } else if (this.$options.parent && this.$options.parent.$vdTheme) {
          this.$vdTheme = this.$options.parent.$vdTheme;
        }
      },
    });
  };

  public readonly vm!: VoidThemeHub;

  /**
   * Instance a theme context for
   */
  constructor(options: VoidThemeHub) {
    if ($Vue) {
      this.vm = new $Vue({
        data(): VoidThemeHub {
          return {
            theme: options.theme,
          };
        },
      });
    } else {
      console.error('Must invoke Vue.use(VoidTheme) before instance a VoidTheme.');
    }
  }
}
