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
 * Component: Article
 */
@Component
export class VdArticle extends Vue {
  private render(h: CreateElement): VNode {
    return <article staticClass="vd-article">{this.$slots.default}</article>;
  }
}
