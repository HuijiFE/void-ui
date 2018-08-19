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
import VoidUI from '@void/ui/lib/void-ui';

const { SIZE_KEYS, SHAPE_KEYS, TONE_KEYS } = VoidUI.base;

/**
 * Component: Example
 */
@Component
export class DocExample extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <vd-flexbox staticClass="doc-example" gap>
        {SIZE_KEYS.map(size =>
          TONE_KEYS.map(tone => (
            <vd-flexbox flex="0 1 100%" gap>
              <vd-flexbox flex="0 1 25%">
                <vd-button
                  tag="a"
                  router-link
                  to="/home"
                  tone={tone}
                  shape="rect"
                  size={size}
                >
                  按钮
                </vd-button>
              </vd-flexbox>
              <vd-flexbox flex="0 1 25%">
                <vd-button tag="a" href="/home" tone={tone} shape="pill" size={size}>
                  button
                </vd-button>
              </vd-flexbox>
              <vd-flexbox flex="0 1 25%">
                <vd-button tag="div" tone={tone} shape="circle" size={size}>
                  B
                </vd-button>
              </vd-flexbox>
              <vd-flexbox flex="0 1 25%">
                <vd-button tag="span" tone={tone} shape="square" size={size}>
                  张
                </vd-button>
              </vd-flexbox>
            </vd-flexbox>
          )),
        )}
      </vd-flexbox>
    );
  }
}
