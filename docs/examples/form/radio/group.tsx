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
import { RadioData } from 'void-ui';

/**
 * Component: Example
 */
@Component
export default class Example extends Vue {
  private fruit: string = 'apple';

  private radios: RadioData[] = [
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Banana',
      value: 'banana',
    },
    {
      label: 'Orange',
      value: 'orange',
    },
  ];

  private onRadioChange(value: string): void {
    this.fruit = value;
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="e-radio-group">
        <vd-flexbox gap>
          <vd-flexbox flex={100}>
            <div>
              Current value: <strong>{this.fruit}</strong>
            </div>
          </vd-flexbox>
          <vd-flexbox flex={100}>
            <vd-radio-group
              model={this.fruit}
              items-source={this.radios}
              onChange={this.onRadioChange}
            />
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
