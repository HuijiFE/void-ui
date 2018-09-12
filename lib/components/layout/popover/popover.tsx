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
import { Style, ClassName, PopPosition, Align } from '../../base';
import { BodyDestroyer } from '../../../plugins/all';
import { getFirstTagChild } from '../../../utils/vdom';

/**
 * Component: Popover
 */
@Component
export class VdPopover extends Vue {
  @Prop({ type: String })
  public readonly content?: string;

  @Prop({ type: String, default: 'top-or-bottom' })
  public readonly position!: PopPosition;

  @Prop({ type: String, default: 'center' })
  public readonly align!: Align;

  public visible: boolean = false;

  public get classes(): ClassName {
    return [
      {
        'is-visible': this.visible,
      },
    ];
  }

  public style: Style = {
    top: '',
    bottom: '',
    left: '',
    right: '',
  };

  private anchor(): void {
    const rect: ClientRect | DOMRect = this.$el.getBoundingClientRect();
    const { top, bottom, left, right } = rect;
  }

  public show(): void {
    this.anchor();
    this.visible = true;
  }
  public close(): void {
    this.visible = false;
  }

  private destroyBody?: BodyDestroyer;

  private mounted(): void {
    this.destroyBody = this.$vd_bodyRender(() => this.renderBody());
    this.$el.addEventListener('mouseenter', this.show);
    this.$el.addEventListener('mouseleave', this.close);
  }

  private beforeDestroy(): void {
    if (this.destroyBody) {
      this.destroyBody();
    }
  }

  public $slots!: {
    // tslint:disable-next-line:no-reserved-keywords
    default: VNode[];
    trigger: VNode[];
  };

  private renderBody(): VNode {
    return (
      <div staticClass="vd-popover" class={this.classes} style={this.style}>
        {this.$slots.default || this.content}
      </div>
    );
  }
  private render(h: CreateElement): VNode | undefined {
    return getFirstTagChild(this.$slots.trigger);
  }
}
