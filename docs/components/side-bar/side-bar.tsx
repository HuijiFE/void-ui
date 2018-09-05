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

export interface SideBarGroup {
  label: string;
  items: SideBarItem[];
}
export interface SideBarItem {
  label: string;
  to: string;
}

/**
 * Component: SideBar
 */
@Component
export class CSideBar extends Vue {
  @Prop({ type: Array, default: () => [] })
  public readonly itemsSource!: (SideBarGroup | SideBarItem)[];

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-side-bar">
        <ul staticClass="c-side-bar_wrapper">{this.$slots.default}</ul>
      </div>
    );
  }
}

/**
 * Component: SideBarGroup
 */
@Component
export class CSideBarGroup extends Vue {
  @Prop({ type: String })
  public readonly label?: string;

  private render(h: CreateElement): VNode {
    return (
      <li staticClass="c-side-bar_group">
        <span staticClass="c-side-bar_group-label">{this.label}</span>
        <ul staticClass="c-side-bar_group-wrapper" />
      </li>
    );
  }
}

/**
 * Component: SideBarGroup
 */
@Component
export class CSideBarItem extends Vue {
  @Prop({ type: String })
  public readonly label?: string;

  private render(h: CreateElement): VNode {
    return (
      <li staticClass="c-side-bar_item">
        <router-link staticClass="c-side-bar_item-link">
          {this.$slots.default || this.label}
        </router-link>
      </li>
    );
  }
}
