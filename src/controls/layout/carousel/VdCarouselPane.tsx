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
 * Component: Pane
 */
@Component
export class VdCarouselPane extends Vue {
  private render(h: CreateElement): VNode {
    return <div class="vd-pane">{this.$slots.default}</div>;
  }
}
