import {
  Vue,
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
import { VdControl } from '@void/controls/base/VdControl';
import { createClamp } from '@void/ts/MathX';

import * as popmotion from 'popmotion';
import { Easing } from 'popmotion/lib/easing';
import { ValueReaction } from 'popmotion/lib/reactions/value';
import { PointerProps } from 'popmotion/lib/input/pointer/types';
import { ColdSubscription } from 'popmotion/lib/action/types';
import { Styler } from 'stylefire';
import { Setter } from 'stylefire/lib/styler/types';

const ease: Easing = popmotion.easing.easeInOut;
const duration: number = 500;

// tslint:disable-next-line:typedef
const clamp100 = createClamp(-100, 100);

/**
 * Component: Carousel
 */
@Component
export class VdCarousel extends VdControl {
  // ==== style ====

  @Prop({ type: [String, Number], default: '30%' })
  public readonly ratio!: string | number;

  public get style(): object {
    return {
      paddingBottom:
        typeof this.ratio === 'string' && this.ratio.endsWith('%')
          ? this.ratio
          : `${this.ratio}%`,
    };
  }

  public get classes(): ClassName {
    return [`vdp-theme_${this.$theme}`];
  }

  // ==== panels and selecting ====

  @Prop({ type: Boolean, default: false })
  public readonly autoPlay!: boolean;

  @Prop({ type: Number, default: 5000 })
  public readonly autoPlayInterval!: number;

  private autoPlayHandle!: number;

  @Watch('autoPlay', { immediate: true })
  private initAutoPlay(): void {
    if (this.autoPlay && window !== undefined) {
      window.clearInterval(this.autoPlayHandle);
      this.autoPlayHandle = window.setInterval(() => {
        this.selectedIndex++;
      }, 5000);
    }
  }

  public readonly panels: VdCarouselPanel[] = [];

  // tslint:disable-next-line:no-null-keyword no-any
  public selectedPanel: VdCarouselPanel = null as any;

  public get leftPanel(): VdCarouselPanel | undefined {
    const length: number = this.panels.length;

    return length > 1
      ? this.panels[(((this.selectedIndex - 1) % length) + length) % length]
      : undefined;
  }

  public get rightPanel(): VdCarouselPanel | undefined {
    const length: number = this.panels.length;

    return length > 1
      ? this.panels[(((this.selectedIndex + 1) % length) + length) % length]
      : undefined;
  }

  public get selectedIndex(): number {
    return this.panels.indexOf(this.selectedPanel);
  }

  public set selectedIndex(value: number) {
    if (this.selectedIndex === value) {
      return;
    }
    this.initAutoPlay();
    const length: number = this.panels.length;
    this.selectedPanel = this.panels[((value % length) + length) % length];
    this.emitChange();
  }

  public selectPrevious(event?: MouseEvent): void {
    if (event) {
      event.preventDefault();
    }
    if (this.isMoving) {
      return;
    }

    this.selectedIndex--;
    this.move(-100, this.selectedPanel, this.leftPanel, this.rightPanel);
  }

  public selectNext(event?: MouseEvent): void {
    if (event) {
      event.preventDefault();
    }
    if (this.isMoving) {
      return;
    }

    this.selectedIndex++;
    this.move(100, this.selectedPanel, this.leftPanel, this.rightPanel);
  }

  protected onSelect(index: number): (event?: MouseEvent) => void {
    return (event?: MouseEvent) => {
      if (event) {
        event.preventDefault();
      }
      if (this.isMoving) {
        return;
      }

      const formerIndex: number = this.selectedIndex;
      if (formerIndex === index) {
        return;
      }
      const formerPanel: VdCarouselPanel = this.selectedPanel;

      this.selectedIndex = index;
      if (index > formerIndex) {
        this.move(100, this.selectedPanel, formerPanel, undefined);
      } else {
        this.move(-100, this.selectedPanel, undefined, formerPanel);
      }
    };
  }

  public emitChange(): void {
    this.$emit('change', this.selectedIndex);
  }

  // ==== motion ====

  protected wrapperStyler!: Styler;
  protected isMoving!: boolean;
  protected subscription?: ColdSubscription;
  protected delta!: number;

  protected initSlide(): void {
    this.wrapperStyler = popmotion.styler(this.$refs.wrapper, {});
    this.isMoving = false;
    this.delta = 0;
  }

  protected onSlideStart(event?: MouseEvent | TouchEvent): void {
    if (event) {
      event.preventDefault();
    }
    if (this.isMoving) {
      return;
    }
    this.isMoving = true;
    console.log('slide start');

    if (this.panels.length < 2) {
      return;
    }

    const left: VdCarouselPanel | undefined = this.leftPanel;
    const right: VdCarouselPanel | undefined = this.rightPanel;
    const update: (x: number) => void =
      left && right
        ? left === right
          ? (x: number) => {
              this.selectedPanel.styler.set('x', `${x}%`);
              left.styler.set('x', `${x < 0 ? x + 100 : x - 100}%`);
            }
          : (x: number) => {
              this.selectedPanel.styler.set('x', `${x}%`);
              left.styler.set('x', `${x - 100}%`);
              right.styler.set('x', `${x + 100}%`);
            }
        : (x: number) => this.selectedPanel.styler.set('x', `${x}%`);

    const wrapperWidth: number = this.wrapperStyler.get('width');
    this.subscription = popmotion
      .pointer({ x: 0 })
      .pipe(({ x }: { x: number }) => (this.delta = clamp100((x / wrapperWidth) * 100)))
      .start(update);
  }

  protected onSlideEnd(event?: MouseEvent | TouchEvent): void {
    if (event) {
      event.preventDefault();
    }
    if (!this.isMoving) {
      return;
    }
    console.log('slide end');

    if (this.panels.length < 2) {
      return;
    }

    if (this.subscription && this.subscription.stop) {
      this.subscription.stop();
    }

    if (this.delta > 25) {
      this.selectedIndex--;
      this.move(this.delta - 100, this.selectedPanel, this.leftPanel, this.rightPanel);
    } else if (this.delta < -25) {
      this.selectedIndex++;
      this.move(this.delta + 100, this.selectedPanel, this.leftPanel, this.rightPanel);
    } else {
      this.move(this.delta, this.selectedPanel, this.leftPanel, this.rightPanel);
    }
  }

  protected move(
    start: number,
    toShow: VdCarouselPanel,
    left?: VdCarouselPanel,
    right?: VdCarouselPanel,
  ): void {
    this.isMoving = true;

    const update: (x: number) => void =
      left && right
        ? left === right
          ? start > 0
            ? x => {
                toShow.styler.set('x', `${x}%`);
                left.styler.set('x', `${x - 100}%`);
              }
            : x => {
                toShow.styler.set('x', `${x}%`);
                right.styler.set('x', `${x + 100}%`);
              }
          : x => {
              toShow.styler.set('x', `${x}%`);
              left.styler.set('x', `${x - 100}%`);
              right.styler.set('x', `${x + 100}%`);
            }
        : (left &&
            (x => {
              toShow.styler.set('x', `${x}%`);
              left.styler.set('x', `${x - 100}%`);
            })) ||
          (right &&
            (x => {
              toShow.styler.set('x', `${x}%`);
              right.styler.set('x', `${x + 100}%`);
            })) ||
          (x => toShow.styler.set('x', `${x}%`));

    popmotion
      .tween({
        from: start,
        to: 0,
        ease,
        // duration,
        duration: (duration * Math.abs(start)) / 100,
      })
      .start({
        update,
        complete: () => {
          this.isMoving = false;
          this.delta = 0;
        },
      });
  }

  // ==== view ====

  private mounted(): void {
    this.initSlide();
  }

  public $refs!: {
    wrapper: Element;
  };

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-carousel" class={this.classes}>
        <div class="vd-carousel_inner" style={this.style}>
          <div
            class="vd-carousel_panel-wrapper"
            ref="wrapper"
            role="tablist"
            onMousedown={this.onSlideStart}
            onTouchstart={this.onSlideStart}
            onMouseup={this.onSlideEnd}
            onTouchend={this.onSlideEnd}
            onMouseleave={this.onSlideEnd}
          >
            {this.$slots.default}
          </div>
          <button class="vd-carousel_control-previous" onClick={this.selectPrevious}>
            <vd-icon class="vd-carousel_control-icon" fa={['fas', 'chevron-left']} />
          </button>
          <button class="vd-carousel_control-next" onClick={this.selectNext}>
            <vd-icon class="vd-carousel_control-icon" fa={['fas', 'chevron-right']} />
          </button>
        </div>
        <div class="vd-carousel_indicator-wrapper" role="tablist">
          {this.panels.map((panel, index) => (
            <button
              staticClass="vd-carousel_indicator"
              class={{ 'is-selected': this.selectedIndex === index }}
              role="tab"
              aria-selected={this.selectedIndex === index}
              onClick={this.onSelect(index)}
            >
              <span class="vd-carousel_indicator-inner" />
            </button>
          ))}
        </div>
      </div>
    );
  }
}

/**
 * Component: Panel
 */
@Component
export class VdCarouselPanel extends Vue {
  public styler!: Styler;

  private mounted(): void {
    this.styler = popmotion.styler(this.$el, {});

    if (this.$parent instanceof VdCarousel) {
      this.$parent.panels.push(this);
      if (this.$parent.panels.length === 1) {
        this.$parent.selectedPanel = this;
        this.styler.set('x', '0%');
      } else {
        this.styler.set('x', '100%');
      }
    }
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-carousel_panel" role="tabpanel">
        {this.$slots.default}
      </div>
    );
  }
}
