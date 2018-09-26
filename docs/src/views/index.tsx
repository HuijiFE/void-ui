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

/**
 * Component: Index
 */
@Component
export class VIndex extends Vue {
  private render(h: CreateElement): VNode {
    return <router-view />;
  }
}
