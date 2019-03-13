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
import { Align } from 'void-ui';

const aligns: Align[] = ['start', 'center', 'end'];

/**
 * Component: Example
 */
@Component
export default class Example extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="e-popover-demo">
        <vd-flexbox gap="small" align="stretch">
          <vd-flexbox gap="small" direction="column" align="end">
            <vd-flexbox staticClass="e-popover-demo_placeholder">
              <vd-button skin="flat" />
            </vd-flexbox>
            {aligns.map(align => (
              <vd-flexbox>
                <vd-popover title="Title" position="left" align={align}>
                  <vd-button slot="trigger" skin="silk">
                    {align}
                  </vd-button>
                  <div>{`position="left" align="${align}"`}</div>
                  <div>Content for popover.</div>
                  <div>Other content for popover.</div>
                </vd-popover>
              </vd-flexbox>
            ))}
            <vd-flexbox staticClass="e-popover-demo_placeholder">
              <vd-button skin="flat" />
            </vd-flexbox>
          </vd-flexbox>

          <vd-flexbox flex="none" direction="column" justify="space-between">
            <vd-flexbox flex="none" gap="small" justify="center">
              {aligns.map(align => (
                <vd-flexbox flex="none">
                  <vd-popover title="Title" position="top" align={align}>
                    <vd-button slot="trigger" skin="silk">
                      {align}
                    </vd-button>
                    <div>{`position="top" align="${align}"`}</div>
                    <div>Content for popover.</div>
                    <div>Other content for popover.</div>
                  </vd-popover>
                </vd-flexbox>
              ))}
            </vd-flexbox>

            <vd-flexbox flex="none" gap="small" justify="center">
              {aligns.map(align => (
                <vd-flexbox flex="none">
                  <vd-popover title="Title" position="bottom" align={align}>
                    <vd-button slot="trigger" skin="silk">
                      {align}
                    </vd-button>
                    <div>{`position="bottom" align="${align}"`}</div>
                    <div>Content for popover.</div>
                    <div>Other content for popover.</div>
                  </vd-popover>
                </vd-flexbox>
              ))}
            </vd-flexbox>
          </vd-flexbox>

          <vd-flexbox gap="small" direction="column" algin="start">
            <vd-flexbox staticClass="e-popover-demo_placeholder">
              <vd-button skin="flat" />
            </vd-flexbox>
            {aligns.map(align => (
              <vd-flexbox>
                <vd-popover title="Title" position="right" align={align}>
                  <vd-button slot="trigger" skin="silk">
                    {align}
                  </vd-button>
                  <div>{`position="right" align="${align}"`}</div>
                  <div>Content for popover.</div>
                  <div>Other content for popover.</div>
                </vd-popover>
              </vd-flexbox>
            ))}
            <vd-flexbox staticClass="e-popover-demo_placeholder">
              <vd-button skin="flat" />
            </vd-flexbox>
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
