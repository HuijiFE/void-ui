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
import {
  Style,
  ClassName,
  Theme,
  ThemeComponent,
  FloatPosition,
  Align,
} from '../../base';
import { BodyDestroyer } from '../../../plugins/all';
import { getFirstTagChild } from '../../../utils/vdom';

/**
 * Component: Float
 */
@Component
export class VdFloat extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

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

  public get classes(): ClassName {
    return [
      `vdp-theme_${this.themeValue}`,
      `vdp-position_${this.positionValue}`,
      `vdp-align_${this.align}`,
      {
        'is-visible': this.visible,
      },
    ];
  }

  protected style: Style = {};

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
              gapLeft > gapRight
                ? `${gapRight * 2 + width}px`
                : `${gapLeft * 2 + width}px`;
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

  public show(): void {
    this.anchor();
    window.addEventListener('scroll', this.anchor);
    this.visible = true;
  }
  public close(): void {
    this.visible = false;
    window.removeEventListener('scroll', this.anchor);
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

  protected timeoutHandler?: number;

  protected onMouseEnter(event: MouseEvent): void {
    window.clearTimeout(this.timeoutHandler);
    if (!this.visible) {
      this.show();
    }
  }

  protected onMouseLeave(event: MouseEvent): void {
    this.timeoutHandler = window.setTimeout(this.close, 200);
  }

  protected addListener(): void {
    if (this.trigger === 'click') {
      this.$el.addEventListener('click', this.onClick);
      window.addEventListener('click', this.onWindowClick);
    } else {
      this.$el.addEventListener('mouseenter', this.onMouseEnter);
      this.$el.addEventListener('mouseleave', this.onMouseLeave);
    }
  }

  protected removeListener(): void {
    this.$el.removeEventListener('click', this.onClick);
    window.removeEventListener('click', this.onWindowClick);

    this.$el.removeEventListener('mouseenter', this.show);
    this.$el.removeEventListener('mouseleave', this.close);
  }

  protected destroyBodyHandler?: BodyDestroyer;

  protected mounted(): void {
    this.destroyBodyHandler = this.$vd_bodyRender(() => this.renderBody());
    this.addListener();
    this.$nextTick(() => this.show());
  }

  protected beforeDestroy(): void {
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
    content: Element;
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
      >
        {this.renderContent()}
      </div>
    );
  }
  protected render(h: CreateElement): VNode | undefined {
    return getFirstTagChild(this.$slots.trigger);
  }
}
