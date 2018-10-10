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
      <div staticClass="e-note-basic">
        <vd-article>
          <vd-note title="Note">This is a note message.</vd-note>
          <vd-note tone="secondary" title="Tooltip">
            This is a note message.
          </vd-note>
          <vd-note tone="success" title="Success">
            This is a note message.
          </vd-note>
          <vd-note tone="warning" title="Warning">
            This is a note message.
          </vd-note>
          <vd-note tone="danger" title="Danger">
            This is a note message.
          </vd-note>
        </vd-article>
      </div>
    );
  }
}
