import {
  Vue,
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
import { Theme } from '@void/components/base';

let $$Vue: typeof Vue | undefined;

export interface ThemeHub {
  theme: Theme;
}

/**
 * A wrapper class component for managing region theme.
 */
@Component
export class VdTheme extends Vue implements ThemeHub {
  // tslint:disable-next-line:function-name
  public static install($Vue: typeof Vue): void {
    if ($$Vue && $$Vue === $Vue) {
      return;
    }

    $$Vue = $Vue;

    $Vue.mixin({
      beforeCreate(): void {
        if (!this.$vdTheme) {
          if (this.$options.vdTheme) {
            this.$vdTheme = this.$options.vdTheme;
          } else if (this.$options.parent && this.$options.parent.$vdTheme) {
            this.$vdTheme = this.$options.parent.$vdTheme;
          }
        }
      },
    });

    $Vue.component('VdTheme', VdTheme);
  }

  @Prop({ type: String, default: 'div' })
  public readonly tag!: keyof HTMLElementTagNameMap;

  @Prop({ type: String })
  public readonly theme!: Theme;

  private beforeCreate(): void {
    this.$vdTheme = this;
  }

  private created(): void {
    (this.$vdTheme as ThemeHub).theme = this.theme;
  }

  @Watch('theme')
  private onThemeChange(): void {
    (this.$vdTheme as ThemeHub).theme = this.theme;
  }

  public render(h: CreateElement): VNode {
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
