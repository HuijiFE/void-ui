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
import { Style, LinkLikeComponent } from '../../base';

/**
 * Component: UniformScale
 */
@Component
export class VdUniformScale extends Vue implements LinkLikeComponent {
  @Prop({ type: String, default: 'div' })
  public readonly tag!: string;
  @Prop({ type: Boolean, default: false })
  public readonly routerLink!: boolean;

  @Prop({ type: [Number, String] })
  public readonly ratio?: number | string;

  public get braceStyle(): Style {
    const ratio: number | string | undefined = this.ratio;

    return {
      paddingBottom: ratio
        ? typeof ratio === 'number'
          ? `${ratio * 100}%`
          : ratio.endsWith('%')
            ? ratio
            : `${ratio}%`
        : '',
    };
  }

  private render(h: CreateElement): VNode {
    return h(
      this.routerLink ? 'router-link' : this.tag,
      {
        staticClass: 'vd-uniform-scale',
        props: this.routerLink
          ? {
              tag: this.tag,
              ...this.$attrs,
            }
          : undefined,
      },
      [
        <div staticClass="vd-uniform-scale_brace" style={this.braceStyle} />,
        <div staticClass="vd-uniform-scale_container">{this.$slots.default}</div>,
      ],
    );
  }
}
