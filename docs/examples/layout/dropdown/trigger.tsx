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
      <div staticClass="e-dropdown-trigger">
        <vd-flexbox gap>
          <vd-flexbox flex="none">
            <vd-dropdown trigger="click">
              <vd-button slot="trigger">click</vd-button>
              <vd-button-group>
                <vd-button>Dropdown Item</vd-button>
                <vd-button>Dropdown 1</vd-button>
                <vd-button>Dropdown 2</vd-button>
                <vd-button>Menu Item</vd-button>
              </vd-button-group>
            </vd-dropdown>
          </vd-flexbox>

          <vd-flexbox flex="none">
            <vd-dropdown trigger="hover">
              <vd-button slot="trigger">hover</vd-button>
              <vd-button-group>
                <vd-button>Dropdown Item</vd-button>
                <vd-button>Dropdown 1</vd-button>
                <vd-button>Dropdown 2</vd-button>
                <vd-button>Menu Item</vd-button>
              </vd-button-group>
            </vd-dropdown>
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
