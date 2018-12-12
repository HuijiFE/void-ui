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
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="e-flexbox-tiles">
        <vd-flexbox gap>
          <vd-flexbox flex={40}>
            <c-demo-box bordered rainbow bold label="0" ratio={100} />
          </vd-flexbox>
          <vd-flexbox flex={60}>
            <vd-flexbox gap>
              {Array<number>(6)
                .fill(0)
                .map((item, index) => (
                  <vd-flexbox key={index} flex={1 / 3}>
                    <c-demo-box bordered rainbow bold label={index + 1} ratio={100} />
                  </vd-flexbox>
                ))}
            </vd-flexbox>
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
