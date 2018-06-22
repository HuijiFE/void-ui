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

/**
 * Component: Slide
 */
@Component
export class VdSlide extends Vue {
  private render(h: CreateElement): VNode {
    return <div class="vd-slide">{this.$slots.default}</div>;
  }
}

/**
 * Component: SlidePane
 */
@Component
export class VdSlidePane extends Vue {
  private render(h: CreateElement): VNode {
    return <div class="vd-slide_pane">{this.$slots.default}</div>;
  }
}
