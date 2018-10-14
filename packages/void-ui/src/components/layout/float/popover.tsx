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
import { Style, ClassName, Theme, ThemeComponent } from '../../base';
import { VdFloat } from './float';

/**
 * Component: Popover
 */
@Component
export class VdPopover extends VdFloat implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  @Prop({ type: Boolean, default: false })
  public readonly bordered!: boolean;

  @Prop({ type: String })
  public readonly title?: string;

  public className(): string {
    return 'vd-popover';
  }

  public get classes(): ClassName {
    return [
      ...this.superClasses,
      `vdp-theme_${this.themeValue}`,
      {
        'is-bordered': this.bordered,
      },
    ];
  }

  public renderContent(): VNode {
    return (
      <div staticClass="vd-popover_wrapper">
        <div staticClass="vd-popover_container">
          <div staticClass="vd-popover_arrow" />
          {this.title && <div staticClass="vd-popover_header">{this.title}</div>}
          <div staticClass="vd-popover_content">
            {this.$slots.default || this.content}
          </div>
        </div>
      </div>
    );
  }
}
