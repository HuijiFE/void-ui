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
import { VdControl } from '@void/controls/base/VdControl';

/**
 * Control UniformScale
 */
@Component
export class VdUniformScale extends Vue {
  /**
   * The percentage number for depth-to-width ratio
   */
  @Prop({ type: [Number, String], default: '100%' })
  public readonly ratio!: number | string;

  public get style(): object {
    return {
      paddingBottom:
        typeof this.ratio === 'string' && this.ratio.endsWith('%')
          ? this.ratio
          : `${this.ratio}%`,
    };
  }

  private render(h: CreateElement): VNode {
    return (
      <div class="vd-uniform-scale" style={this.style}>
        <div class="vd-uniform-scale_container">{this.$slots.default}</div>
      </div>
    );
  }
}
