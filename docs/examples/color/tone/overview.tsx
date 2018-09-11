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
import { TONE_KEYS } from 'void-ui';

/**
 * Component: Example
 */
@Component
export default class Example extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="e-tone-overview">
        <vd-flexbox gap direction="column" align="stretch">
          <vd-flexbox gap>
            {TONE_KEYS.map(tone => (
              <vd-flexbox key={tone} justify="center">
                <vd-button tone={tone}>{tone}</vd-button>
              </vd-flexbox>
            ))}
          </vd-flexbox>
          <vd-flexbox direction="column" align="stretch" gap>
            {['lightener', 'lighten', 'standard', 'darken', 'darkener'].map(level => (
              <vd-flexbox gap>
                {TONE_KEYS.map(tone => (
                  <vd-flexbox>
                    <div
                      staticClass="e-tone-overview_item"
                      class={`tone-${tone}-${level}`}
                    >
                      {level}
                    </div>
                  </vd-flexbox>
                ))}
              </vd-flexbox>
            ))}
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
