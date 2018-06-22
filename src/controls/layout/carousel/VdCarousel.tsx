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
import { VdCarouselPane } from '@void/controls/layout/carousel/VdCarouselPane';

/**
 * Component: Carousel
 */
@Component
export class VdCarousel extends VdControl {
  @Prop({ type: [String, Number], default: '30%' })
  public readonly ratio!: string | number;

  public readonly panes: VdCarouselPane[] = [];

  public selectedPane: VdCarouselPane[] = [];

  public get style(): object {
    return {
      paddingBottom:
        typeof this.ratio === 'string' && this.ratio.endsWith('%')
          ? this.ratio
          : `${this.ratio}%`,
    };
  }

  public get classes(): ClassName {
    return ['vd-carousel'];
  }

  private render(h: CreateElement): VNode {
    return (
      <div class="vd-carousel">
        <div class="vd-carousel_inner">{this.$slots.default}</div>
        <div class="vd-carousel_control_previous" />
        <div class="vd-carousel_control_next" />
        <div class="vd-carousel_indicator-wrapper">
          <button class="vd-carousel_indicator" />
        </div>
      </div>
    );
  }
}
