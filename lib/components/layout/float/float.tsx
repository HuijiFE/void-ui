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
import { Style, ClassName, FloatPosition, Align } from '../../base';
import { BodyDestroyer } from '../../../plugins/all';
import { getFirstTagChild } from '../../../utils/vdom';
import { Throttled, throttle } from '../../../utils/functional/';

const closeDelay: number = 240;
const animationDuration: number = 240;

/**
 * Component: Float
 */
@Component
export class VdFloat extends Vue {
  @Prop({ type: String })
  public readonly content?: string;

  @Prop({ type: String, default: 'top-or-bottom' })
  public readonly position!: FloatPosition;
  protected positionValue: string = '';

  @Prop({ type: String, default: 'center' })
  public readonly align!: Align;

  @Prop({ type: String, default: 'hover' })
  public readonly trigger!: 'hover' | 'click';

  protected visible: boolean = false;
  protected showing: boolean = false;
  protected closing: boolean = false;

  public get superClasses(): ClassName {
    return [
      `vdp-position_${this.positionValue}`,
      `vdp-align_${this.align}`,
      {
        'is-visible': this.visible,
        'is-showing': this.showing,
        'is-closing': this.closing,
      },
    ];
  }

  public get classes(): ClassName {
    return this.classes;
  }

  protected style: Style = {};

  protected anchorDebounced!: Throttled<[UIEvent], void>;

  // tslint:disable-next-line:max-func-body-length
  protected anchor(): void {
    // const scrollTop: number = window.document.documentElement.scrollTop;
    // const scrollLeft: number = window.document.documentElement.scrollLeft;

    const viewWidth: number = window.document.documentElement.clientWidth;
    const viewHeight: number = window.document.documentElement.clientHeight;

    const rect: ClientRect | DOMRect = this.$el.getBoundingClientRect();

    const width: number = rect.right - rect.left;
    const height: number = rect.bottom - rect.top;

    const gapLeft: number = rect.left;
    const gapRight: number = viewWidth - rect.right;
    const gapTop: number = rect.top;
    const gapBottom: number = viewHeight - rect.bottom;

    let position: FloatPosition = this.position;
    const align: Align = this.align;
    const style: Style = {};

    switch (position) {
      case 'left':
      case 'right':
        break;
      case 'left-or-right':
        position = gapLeft > gapRight ? 'left' : 'right';
        break;
      case 'top':
      case 'bottom':
        break;
      case 'top-or-bottom':
      default:
        position = gapTop > gapBottom ? 'top' : 'bottom';
    }

    switch (position) {
      case 'left':
        style.right = `${gapRight + width}px`;
        style.maxWidth = `${gapLeft}px`;
        break;
      case 'right':
        style.left = `${gapLeft + width}px`;
        style.maxWidth = `${gapRight}px`;
        break;
      case 'top':
        style.bottom = `${gapBottom + height}px`;
        style.maxHeight = `${gapTop}px`;
        break;
      case 'bottom':
        style.top = `${gapTop + height}px`;
        style.maxHeight = `${gapBottom}px`;
        break;
      default:
    }

    switch (position) {
      case 'left':
      case 'right':
        switch (align) {
          case 'start':
            style.top = `${gapTop}px`;
            style.maxHeight = `${gapBottom + height}px`;
            break;
          case 'end':
            style.bottom = `${gapBottom}px`;
            style.maxHeight = `${gapTop + height}px`;
            break;
          default:
            style.top = `${gapTop + height / 2}px`;
            style.maxHeight =
              gapTop > gapBottom
                ? `${gapBottom * 2 + height}px`
                : `${gapTop * 2 + height}px`;
        }
        break;

      case 'top':
      case 'bottom':
        switch (align) {
          case 'start':
            style.left = `${gapLeft}px`;
            style.maxWidth = `${gapRight + width}px`;
            break;
          case 'end':
            style.right = `${gapRight}px`;
            style.maxWidth = `${gapLeft + width}px`;
            break;
          default:
            style.left = `${gapLeft + width / 2}px`;
            style.maxWidth =
              gapLeft > gapRight
                ? `${gapRight * 2 + width}px`
                : `${gapLeft * 2 + width}px`;
        }
        break;

      default:
    }

    this.positionValue = position;
    this.style = style;
  }

  protected timeoutHandlerClose?: number;

  public show(): void {
    window.clearTimeout(this.timeoutHandlerClose);
    this.closing = false;
    this.showing = true;
    window.setTimeout(() => (this.showing = false), animationDuration);

    this.destroyBodyHandler = this.$vd_bodyRender(() => this.renderBody());

    this.anchor();

    window.addEventListener('scroll', this.anchorDebounced);
    window.setTimeout(() => window.addEventListener('click', this.onWindowClick), 10);

    this.visible = true;
  }
  public close(): void {
    if (this.closing) {
      return;
    }

    const destroy: () => void = this.destroyBodyHandler || (() => undefined);

    this.closing = true;
    this.timeoutHandlerClose = window.setTimeout(() => {
      this.visible = false;
      window.removeEventListener('scroll', this.anchor);
      window.removeEventListener('click', this.onWindowClick);
      destroy();
    }, animationDuration);
  }

  protected onClick(event: MouseEvent): void {
    if (this.visible) {
      this.close();
    } else {
      this.show();
    }
  }
  protected onWindowClick(event: MouseEvent): void {
    if (this.visible) {
      this.close();
    }
  }
  protected onContentClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  protected timeoutHandlerMouseLeave?: number;

  protected onMouseEnter(event: MouseEvent): void {
    if (this.trigger !== 'hover') {
      return;
    }
    window.clearTimeout(this.timeoutHandlerMouseLeave);
    if (!this.visible) {
      this.show();
    }
  }

  protected onMouseLeave(event: MouseEvent): void {
    if (this.trigger !== 'hover') {
      return;
    }
    this.timeoutHandlerMouseLeave = window.setTimeout(this.close, closeDelay);
  }

  protected addListener(): void {
    if (this.trigger === 'click') {
      this.$el.addEventListener('click', this.onClick);
    } else {
      this.$el.addEventListener('mouseenter', this.onMouseEnter);
      this.$el.addEventListener('mouseleave', this.onMouseLeave);
    }
  }

  protected removeListener(): void {
    this.$el.removeEventListener('click', this.onClick);

    this.$el.removeEventListener('mouseenter', this.show);
    this.$el.removeEventListener('mouseleave', this.close);
  }

  @Watch('trigger')
  protected watchTrigger(): void {
    this.removeListener();
    this.addListener();
  }

  protected destroyBodyHandler?: BodyDestroyer;

  protected mounted(): void {
    this.anchorDebounced = throttle((event: UIEvent) => this.anchor(), 100, true);
    this.addListener();
  }

  protected beforeDestroy(): void {
    this.anchorDebounced.clear();
    this.anchorDebounced = undefined as any;
    this.removeListener();
    if (this.destroyBodyHandler) {
      this.destroyBodyHandler();
    }
  }

  public $slots!: {
    // tslint:disable-next-line:no-reserved-keywords
    default: VNode[];
    trigger: VNode[];
  };

  public $refs!: {
    content: HTMLElement;
  };

  protected readonly className?: string;

  protected renderContent(): VNode {
    return h();
  }

  protected renderBody(): VNode {
    return (
      <div
        ref="content"
        staticClass={this.className ? `vd-float ${this.className}` : 'vd-float'}
        class={this.classes}
        style={this.style}
        onClick={this.onContentClick}
        onMouseenter={this.onMouseEnter}
        onMouseleave={this.onMouseLeave}
        role="tooltip"
      >
        {this.renderContent()}
      </div>
    );
  }
  protected render(h: CreateElement): VNode | undefined {
    return getFirstTagChild(this.$slots.trigger);
  }
}
