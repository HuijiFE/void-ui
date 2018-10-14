import Vue, { CreateElement, VNode } from 'vue';
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
  ClassName,
  Theme,
  ThemeComponent,
  Align,
  FloatPosition,
  Trigger,
} from '../../base';
import { VdFloat } from './float';

/**
 * Component: Dropdown
 */
@Component
export class VdDropdown extends VdFloat implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  @Prop({ type: String, default: 'bottom' })
  public readonly position!: FloatPosition;
  protected positionValue: string = '';

  @Prop({ type: String, default: 'start' })
  public readonly align!: Align;

  @Prop({ type: String, default: 'click' })
  public readonly trigger!: Trigger;

  public className(): string {
    return 'vd-dropdown';
  }

  public get classes(): ClassName {
    return [...this.superClasses, `vdp-theme_${this.themeValue}`];
  }

  public renderContent(): VNode {
    return <div staticClass="vd-dropdown_wrapper">{this.$slots.default}</div>;
  }
}
