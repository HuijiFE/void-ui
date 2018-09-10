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
import { Size, RadioData } from 'void-ui';

/**
 * Component: Example
 */
@Component
export default class Example extends Vue {
  private gap: boolean | Size = false;

  private radios: RadioData[] = [
    false,
    true,
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
  ].map<RadioData>(value => ({
    label: value.toString(),
    value,
  }));

  private onRadioChange(value: boolean | Size): void {
    this.gap = value;
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="e-flexbox-gap">
        <vd-flexbox gap={this.gap}>
          <vd-flexbox>
            <c-demo-box bordered rainbow ratio="200px" label={`gap = ${this.gap}`} />
          </vd-flexbox>
          <vd-flexbox>
            <c-demo-box bordered padding rainbow ratio="200px">
              <vd-radio-group
                direction="column"
                model={this.gap}
                items-source={this.radios}
                onChange={this.onRadioChange}
              />
            </c-demo-box>
          </vd-flexbox>
          <vd-flexbox>
            <c-demo-box bordered rainbow ratio="200px" />
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
