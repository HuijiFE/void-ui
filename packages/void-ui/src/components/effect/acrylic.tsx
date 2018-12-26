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
import { Style, ClassName, Theme, ThemeComponent, DockPosition } from '../base';

/**
 * Component: Acrylic
 */
@Component
export class VdAcrylic extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme || 'lite';
  }

  @Prop({ type: String, default: 'center' })
  public readonly position!: DockPosition;

  public get classes(): ClassName {
    return [`vdp-theme_${this.themeValue}`, `vdp-position_${this.position}`];
  }

  @Prop({ type: String, required: true })
  public readonly image!: string;

  @Prop([Number, String])
  public readonly amount?: number | string;

  public get imageStyle(): Style {
    return {
      filter:
        this.amount !== undefined && this.amount !== null
          ? `blur(${this.amount}px)`
          : null,
    };
  }

  private isMounted: boolean = false;

  private mounted(): void {
    this.isMounted = true;
  }

  private render(h: CreateElement): VNode {
    return this.isMounted && this.image ? (
      <div staticClass="vd-acrylic" class={this.classes}>
        <div staticClass="vd-acrylic_inner">
          <img
            staticClass="vd-acrylic_image"
            style={this.imageStyle}
            src={this.image}
            role="presentation"
            alt=""
          />
          <div staticClass="vd-acrylic_cover" />
        </div>
      </div>
    ) : (
      h()
    );
  }
}
