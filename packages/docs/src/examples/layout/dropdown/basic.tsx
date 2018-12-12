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
import { SKIN_KEYS, SHAPE_KEYS } from 'void-ui';

/**
 * Component: Example
 */
@Component
export default class Example extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="e-dropdown-basic">
        <vd-flexbox gap direction="column">
          {SKIN_KEYS.map(skin => (
            <vd-flexbox gap>
              {SHAPE_KEYS.map(shape => (
                <vd-flexbox flex="none">
                  <vd-dropdown>
                    <vd-button skin={skin} slot="trigger">
                      {skin} {shape}
                    </vd-button>
                    <vd-button-group skin={skin} shape={shape}>
                      {shape === 'rect' || shape === 'pill'
                        ? [
                            <vd-button>Dropdown Item</vd-button>,
                            <vd-button>Dropdown 1</vd-button>,
                            <vd-button>Dropdown 2</vd-button>,
                            <vd-button>Menu Item</vd-button>,
                          ]
                        : [
                            <vd-button>D</vd-button>,
                            <vd-button>1</vd-button>,
                            <vd-button>2</vd-button>,
                            <vd-button>M</vd-button>,
                          ]}
                    </vd-button-group>
                  </vd-dropdown>
                </vd-flexbox>
              ))}
            </vd-flexbox>
          ))}
        </vd-flexbox>
      </div>
    );
  }
}
