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

  // tslint:disable-next-line:no-null-keyword no-any
  public selectedPane: VdCarouselPane = null as any;

  public emitChange(): void {
    this.$emit('change', this.panes.indexOf(this.selectedPane));
  }

  public select(index: number): void {
    if (index === this.panes.indexOf(this.selectedPane)) {
      return;
    }

    this.selectedPane.selected = false;

    if (index < 0) {
      this.selectedPane = this.panes[this.panes.length - 1];
    } else if (index >= this.panes.length) {
      this.selectedPane = this.panes[0];
    } else {
      this.selectedPane = this.panes[index];
    }

    this.selectedPane.selected = true;

    this.emitChange();
  }

  private onSelect(index: number): () => void {
    return () => this.select(index);
  }

  public selectPrevious(): void {
    this.select(this.panes.indexOf(this.selectedPane) - 1);
  }

  public selectNext(): void {
    this.select(this.panes.indexOf(this.selectedPane) + 1);
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
          <button class="vd-carousel_control-previous" onClick={this.selectPrevious}>
            <vd-icon class="vd-carousel_control-icon" fa={['fas', 'chevron-left']} />
          </button>
          <button class="vd-carousel_control-next" onClick={this.selectNext}>
            <vd-icon class="vd-carousel_control-icon" fa={['fas', 'chevron-right']} />
          </button>
        </div>
        <div class="vd-carousel_indicator-wrapper">
          {this.panes.map((pane, index) => (
            <button
              staticClass="vd-carousel_indicator"
              class={{ 'is-selected': this.selectedPane === pane }}
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
 * Component: Pane
 */
@Component
export class VdCarouselPane extends Vue {
  public selected: boolean = false;

  private beforeMount(): void {
    if (this.$parent instanceof VdCarousel) {
      this.$parent.panes.push(this);
      if (this.$parent.panes.length === 1) {
        this.$parent.selectedPane = this;
        this.selected = true;
      }
    }
  }

  private beforeDestroy(): void {
    if (this.$parent instanceof VdCarousel) {
      this.$parent.panes.splice(this.$parent.panes.indexOf(this));
    }
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-carousel_pane" class={{ 'is-selected': this.selected }}>
        {this.$slots.default}
      </div>
    );
  }
}
