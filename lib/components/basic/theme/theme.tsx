import Vue, { CreateElement, VNode, PluginObject, PluginFunction } from 'vue';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { Theme } from '../../base/variables';
import { ComponentOptions, DefaultData, DefaultMethods } from 'vue/types/options';

let $$Vue: typeof Vue | undefined;

declare module 'vue/types/vue' {
  interface Vue {
    $vd_theme: VdTheme;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    vdTheme?: VdTheme;
    isVdTheme?: boolean;
  }
}

export interface VdThemeOptions {
  defaultTheme?: Theme;
}

/**
 * A wrapper class component for managing region theme.
 */
@Component({
  isVdTheme: true,
})
export class VdTheme extends Vue {
  // tslint:disable-next-line:function-name
  public static install: PluginFunction<VdThemeOptions> = ($Vue, options) => {
    if ($$Vue && $$Vue === $Vue) {
      return;
    }

    $$Vue = $Vue;

    const defaultTheme: Theme = (options && options.defaultTheme) || 'lite';

    $Vue.mixin({
      beforeCreate(): void {
        if (!this.$vd_theme) {
          if (this.$options.vdTheme) {
            this.$vd_theme = this.$options.vdTheme;
          } else if (this.$options.parent && this.$options.parent.$vd_theme) {
            this.$vd_theme = this.$options.parent.$vd_theme;
          } else if (this === this.$root && !this.$options.isVdTheme) {
            this.$vd_theme = new VdTheme({ propsData: { theme: defaultTheme } });
          }
        }
      },
    });
  };

  @Prop({ type: String, default: 'div' })
  private readonly tag!: keyof HTMLElementTagNameMap;

  @Prop({ type: String, required: true })
  public theme!: Theme;

  private beforeCreate(): void {
    this.$vd_theme = this;
  }

  public setColor(theme: Theme): void {
    this.theme = theme;
  }

  public switchColor(): void {
    if (this.theme === 'lite') {
      this.theme = 'dark';
    } else {
      this.theme = 'lite';
    }
  }

  private render(h: CreateElement): VNode {
    return h(
      this.tag,
      {
        staticClass: 'vd-theme',
        class: `vdp-theme_${this.theme}`,
      },
      this.$slots.default,
    );
  }
}
