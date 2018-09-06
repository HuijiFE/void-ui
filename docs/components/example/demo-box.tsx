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
import { ClassName, Theme } from 'void-ui';

/**
 * Component: DemoBox
 */
@Component
export class CDemoBox extends Vue {
  @Prop({ type: String })
  public readonly label?: String;

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-demo-box">
        <div staticClass="c-demo-box_content">
          {this.$slots.default || <div staticClass="c-demo-box_label">{this.label}</div>}
        </div>
      </div>
    );
  }
}
