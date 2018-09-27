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
  public bordered: boolean = false;
  public raise: boolean = true;

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="e-card-demo">
        <vd-card bordered={this.bordered} raise={this.raise}>
          <vd-card-header>Card</vd-card-header>
          <vd-card-content>
            <div>Here is the content of the card.</div>
            <div>
              The card component can be styled by properties 'bordered' and 'raise'.
            </div>
          </vd-card-content>
          <vd-card-separator />
          <vd-card-content>
            <vd-flexbox gap>
              <vd-flexbox flex="none">
                <vd-button onClick={() => (this.bordered = !this.bordered)}>
                  {`bordered: ${this.bordered}`}
                </vd-button>
              </vd-flexbox>
              <vd-flexbox flex="none">
                <vd-button onClick={() => (this.raise = !this.raise)}>
                  {`raise: ${this.raise}`}
                </vd-button>
              </vd-flexbox>
            </vd-flexbox>
          </vd-card-content>
        </vd-card>
      </div>
    );
  }
}
