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
import { Style } from '../../base';

/**
 * Component: UniformScale
 */
@Component
export class VdUniformScale extends Vue {
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
    return (
      <div staticClass="vd-uniform-scale">
        <div staticClass="vd-uniform-scale_brace" style={this.braceStyle} />
        <div staticClass="vd-uniform-scale_container">{this.$slots.default}</div>
      </div>
    );
  }
}
