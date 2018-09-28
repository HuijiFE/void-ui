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
  private fruit: string = 'apple';

  private onRadioChange(value: string): void {
    this.fruit = value;
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="e-radio-basic">
        <vd-flexbox gap>
          <vd-flexbox flex={100}>
            <div>
              Current value: <strong>{this.fruit}</strong>
            </div>
          </vd-flexbox>
          <vd-flexbox flex="none">
            <vd-radio model={this.fruit} value="apple" onChange={this.onRadioChange}>
              Apple
            </vd-radio>
          </vd-flexbox>
          <vd-flexbox flex="none">
            <vd-radio model={this.fruit} value="banana" onChange={this.onRadioChange}>
              Banana
            </vd-radio>
          </vd-flexbox>
          <vd-flexbox flex="none">
            <vd-radio model={this.fruit} value="orange" onChange={this.onRadioChange}>
              Orange
            </vd-radio>
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
