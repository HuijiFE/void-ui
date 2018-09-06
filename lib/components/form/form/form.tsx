import Vue, { CreateElement, VNode, ComponentOptions } from 'vue';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { Theme, ThemeComponent } from '@void/ui/lib/components/base';

/**
 * Component: From
 */
@Component
export class VdForm extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  private render(h: CreateElement): VNode {
    return <form staticClass="vd-form">{this.$slots.default}</form>;
  }
}
