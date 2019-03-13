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
      <div staticClass="e-card-array">
        <vd-flexbox gap>
          {Array.of(1, 2, 3, 4, 5).map(num => (
            <vd-flexbox>
              <vd-card raise>
                <vd-card-content>
                  <div staticClass="e-card-array_item">Card {num}</div>
                </vd-card-content>
              </vd-card>
            </vd-flexbox>
          ))}
        </vd-flexbox>
      </div>
    );
  }
}
