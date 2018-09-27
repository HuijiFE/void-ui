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

/**
 * Component: Example
 */
@Component
export default class Example extends Vue {
  private status: boolean = false;

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="e-switch-demo">
        <vd-flexbox gap>
          <vd-flexbox flex={100}>
            <div>
              Current value: <strong>{this.status.toString()}</strong>
            </div>
          </vd-flexbox>
          <vd-flexbox flex={100}>
            <vd-switch
              model={this.status}
              onChange={(value: boolean) => (this.status = value)}
              true-label="on"
              false-label="off"
            />
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
