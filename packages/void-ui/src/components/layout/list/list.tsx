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
 * Component: List
 */
@Component
export class VdList extends Vue {
  private render(h: CreateElement): VNode {
    return <ul staticClass="vd-list">{this.$slots.default}</ul>;
  }
}

/**
 * Component: ListItem
 */
@Component
export class VdListItem extends Vue {
  private render(h: CreateElement): VNode {
    return <li staticClass="vd-list_item">{this.$slots.default}</li>;
  }
}
