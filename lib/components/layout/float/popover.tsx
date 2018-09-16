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
import { VdFloat } from './float';

/**
 * Component: Popover
 */
@Component
export class VdPopover extends VdFloat {
  @Prop({ type: String })
  public readonly title?: string;

  protected readonly className: string = 'vd-popover';

  protected renderContent(): VNode {
    return (
      <div staticClass="vd-popover_wrapper">
        <div staticClass="vd-popover_container">
          <div staticClass="vd-popover_arrow" />
          {this.title ? <div staticClass="vd-popover_header">{this.title}</div> : h()}
          <div staticClass="vd-popover_content">
            {this.$slots.default || this.content}
          </div>
        </div>
      </div>
    );
  }
}
