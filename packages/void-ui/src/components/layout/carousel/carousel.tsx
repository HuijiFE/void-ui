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
import { ClassName, Style, AroundPosition, LinkLikeComponent } from '../../base';

/**
 * Component: Carousel
 */
@Component
export class VdCarousel extends Vue {
  @Prop({ type: String, default: 'div' })
  public readonly containerTag!: string;

  @Prop({ type: String, default: 'inside' })
  public readonly indicatorPosition!: AroundPosition;

  @Prop({ type: String, default: 'inside' })
  public readonly switchButtonPosition!: AroundPosition;

  private switching: boolean = false;

  private items: VdCarouselItem[] = [];
  public add(item: VdCarouselItem): void {
    const length = this.items.push(item);
    if (length === 1) {
      this.selectedItem = item;
    }
  }
  public remove(item: VdCarouselItem): void {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  private timeoutHandler?: number;
  private selectedItem: VdCarouselItem | null = null;
  public get selectedIndex(): number {
    return this.selectedItem ? this.items.indexOf(this.selectedItem) : -1;
  }
  public set selectedIndex(value: number) {
    let index = value;
    const selectedIndex = this.selectedIndex;
    const size = this.items.length;

    if (window === undefined || this.switching || size < 2 || index === selectedIndex) {
      return;
    }

    if (index < 0) {
      index = (size + (index % size)) % size;
    } else if (index > size - 1) {
      index = index % size;
    }

    this.switching = true;
    this.selectedItem = this.items[index];
    this.$emit('change', index);

    window.setTimeout(() => (this.switching = false), 320);
    window.clearTimeout(this.timeoutHandler);
    this.timeoutHandler = window.setTimeout(() => this.selectedIndex++, 5000);
  }

  public get classes(): ClassName {
    return [
      {
        'is-switching': this.switching,
      },
    ];
  }

  public get wrapperStyle(): Style {
    return {
      transform: `translateX(-${this.selectedIndex * 100}%)`,
    };
  }

  private mounted(): void {
    window.setTimeout(() => this.selectedIndex++, 5000);
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-carousel" class={this.classes}>
        {h(
          this.containerTag,
          {
            staticClass: 'vd-carousel_container',
          },
          [
            <div staticClass="vd-carousel_wrapper" style={this.wrapperStyle}>
              {this.$slots.default}
            </div>,
          ],
        )}
        <button
          staticClass="vd-carousel_button-previous"
          class={{ 'is-inside': this.switchButtonPosition === 'inside' }}
          onClick={() => this.selectedIndex--}
        >
          {this.$slots.previous || <span>&lsaquo;</span>}
        </button>
        <button
          staticClass="vd-carousel_button-next"
          class={{ 'is-inside': this.switchButtonPosition === 'inside' }}
          onClick={() => this.selectedIndex++}
        >
          {this.$slots.next || <span>&rsaquo;</span>}
        </button>
        <div
          staticClass="vd-carousel_indicator-wrapper"
          class={{ 'is-inside': this.indicatorPosition === 'inside' }}
        >
          {this.items.map((_, index) => (
            <button
              staticClass="vd-carousel_indicator"
              class={{ 'is-selected': this.selectedIndex === index }}
              type="button"
              onClick={() => (this.selectedIndex = index)}
            >
              <span staticClass="vd-carousel_indicator-inner" />
            </button>
          ))}
        </div>
      </div>
    );
  }
}

/**
 * Component: CarouselItem
 */
@Component
export class VdCarouselItem extends Vue implements LinkLikeComponent {
  @Prop({ type: String, default: 'div' })
  public readonly tag!: string;
  @Prop({ type: Boolean, default: false })
  public readonly routerLink!: boolean;

  private carousel?: VdCarousel;

  private beforeCreate(): void {
    if (this.$parent instanceof VdCarousel) {
      this.carousel = this.$parent;
      this.carousel.add(this);
    }
  }
  private beforeDestroy(): void {
    if (this.carousel) {
      this.carousel.remove(this);
    }
  }

  private render(h: CreateElement): VNode {
    return h(
      this.routerLink ? 'router-link' : this.tag,
      {
        staticClass: 'vd-carousel_item',
        props: this.routerLink
          ? {
              tag: this.tag,
              ...this.$attrs,
            }
          : undefined,
      },
      [this.$slots.default],
    );
  }
}
