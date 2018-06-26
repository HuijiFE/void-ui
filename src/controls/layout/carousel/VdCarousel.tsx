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

/**
 * Component: Carousel
 */
@Component
export class VdCarousel extends VdControl {
  @Prop({ type: [String, Number], default: '30%' })
  public readonly ratio!: string | number;

  public readonly panes: VdCarouselPane[] = [];

  public selectedPane: VdCarouselPane[] = [];

  public select(index: number): void {
    //
  }

  private onSelect(index: number): () => void {
    return () => this.select(index);
  }

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

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-carousel" class={this.classes}>
        <div class="vd-carousel_inner" style={this.style}>
          <div class="vd-carousel_pane-wrapper">{this.$slots.default}</div>
          <button class="vd-carousel_control-previous">
            <vd-icon class="vd-carousel_control-icon" fa={['fas', 'chevron-left']} />
          </button>
          <button class="vd-carousel_control-next">
            <vd-icon class="vd-carousel_control-icon" fa={['fas', 'chevron-right']} />
          </button>
        </div>
        <div class="vd-carousel_indicator-wrapper">
          <button staticClass="vd-carousel_indicator" class="is-selected">
            <span class="vd-carousel_indicator-inner" />
          </button>
          <button class="vd-carousel_indicator">
            <span class="vd-carousel_indicator-inner" />
          </button>
          <button class="vd-carousel_indicator">
            <span class="vd-carousel_indicator-inner" />
          </button>
          <button class="vd-carousel_indicator">
            <span class="vd-carousel_indicator-inner" />
          </button>
        </div>
      </div>
    );
  }
}

/**
 * Component: Pane
 */
@Component
export class VdCarouselPane extends Vue {
  private render(h: CreateElement): VNode {
    return <div class="vd-carousel_pane">{this.$slots.default}</div>;
  }
}
