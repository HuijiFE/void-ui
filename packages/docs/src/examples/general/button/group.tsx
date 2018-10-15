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
      <div staticClass="e-button-group">
        <vd-flexbox direction="column" gap>
          <vd-flexbox>
            <vd-button-group>
              <vd-button>button</vd-button>
              <vd-button>button 1</vd-button>
              <vd-button>button 2</vd-button>
              <vd-button>group item</vd-button>
            </vd-button-group>
          </vd-flexbox>

          <vd-flexbox>
            <vd-button-group skin="plain">
              <vd-button>button</vd-button>
              <vd-button>button 1</vd-button>
              <vd-button>button 2</vd-button>
              <vd-button>group item</vd-button>
            </vd-button-group>
          </vd-flexbox>

          <vd-flexbox>
            <vd-button-group gap>
              <vd-button>button</vd-button>
              <vd-button>button 1</vd-button>
              <vd-button>button 2</vd-button>
              <vd-button>group item</vd-button>
            </vd-button-group>
          </vd-flexbox>

          <vd-flexbox>
            <vd-button-group skin="plain" gap>
              <vd-button>button</vd-button>
              <vd-button>button 1</vd-button>
              <vd-button>button 2</vd-button>
              <vd-button>group item</vd-button>
            </vd-button-group>
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
