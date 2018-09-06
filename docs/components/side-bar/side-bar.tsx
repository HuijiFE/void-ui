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
import { Theme, ThemeComponent, ClassName } from 'void-ui';

export interface SideBarGroup {
  label: string;
  items: SideBarItem[];
}
export interface SideBarItem {
  label: string;
  path: string;
}

/**
 * Component: SideBar
 */
@Component
export class CSideBar extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;

  public get $theme(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  public get classes(): ClassName {
    return [`cp-theme_${this.$theme}`];
  }

  @Prop({ type: Array, default: () => [] })
  public readonly itemsSource!: (SideBarGroup | SideBarItem)[];

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-side-bar" class={this.classes}>
        <ul staticClass="c-side-bar_wrapper">
          {this.itemsSource.map(
            item =>
              'items' in item ? (
                <c-side-bar-group label={item.label} items-source={item.items} />
              ) : (
                <c-side-bar-item label={item.label} path={item.path} />
              ),
          )}
          {this.$slots.default}
        </ul>
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

  @Prop({ type: Array, default: () => [] })
  public readonly itemsSource!: SideBarItem[];

  private render(h: CreateElement): VNode {
    return (
      <li staticClass="c-side-bar_group">
        <span staticClass="c-side-bar_group-label">{this.label}</span>
        <ul staticClass="c-side-bar_group-wrapper">
          {this.itemsSource.map(item => (
            <c-side-bar-item label={item.label} path={item.path} />
          ))}
          {this.$slots.default}
        </ul>
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

  @Prop({ type: String, required: true })
  public readonly path!: string;

  private render(h: CreateElement): VNode {
    return (
      <router-link
        tag="li"
        staticClass="c-side-bar_item"
        exact-active-class="is-active"
        to={this.path}
      >
        <a>{this.$slots.default || this.label}</a>
      </router-link>
    );
  }
}
