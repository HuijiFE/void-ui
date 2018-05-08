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
import { Skin, VdControl } from '@void/controls/base/VdControl';
import { CreateElement, VNode } from 'vue';
import { Location } from 'vue-router/types/router';
import { VdMenuItem } from '@void/controls/navigation/menu/VdMenuItem';
import { VdSubMenu } from '@void/controls/navigation/menu/VdSubMenu';
import {
  MenuItem,
  MenuItemGroup,
  SubMenu,
} from '@void/controls/navigation/menu/VdMenuModels';

/**
 * Control Navbar
 */
@Component
export class VdMenu extends VdControl {
  private items: VdMenuItem[] = [];
  public addItem(item: VdMenuItem): VdMenu {
    this.items.push(item);

    return this;
  }

  private subMenus: VdSubMenu[] = [];
  public addSubMenu(subMenu: VdSubMenu): VdMenu {
    this.subMenus.push(subMenu);

    return this;
  }

  // tslint:disable-next-line:no-null-keyword
  public selectedItem: VdMenuItem | null = null;

  // tslint:disable-next-line:no-null-keyword
  public selectedSubMenu: VdSubMenu | null = null;

  @Watch('selectedSubMenu')
  private onSelectedSubMenuChange(newSubMenu: VdSubMenu, oldSubMenu: VdSubMenu): void {
    if (
      (this.autoCollapse || this.direction === 'horizontal') &&
      newSubMenu !== oldSubMenu &&
      oldSubMenu
    ) {
      oldSubMenu.expanded = false;
    }
  }

  /**
   * Items model for the menu,
   * it will detect the type of items by properties
   * 'label', 'groupLabel' and 'subMenuLabel'
   */
  @Prop({ type: Array, default: () => [] })
  public itemsSource: (MenuItem | MenuItemGroup | SubMenu)[];

  @Prop({ type: String, default: 'plain' })
  public skin: Skin;

  @Prop({ type: String, default: 'vertical' })
  public direction: 'vertical' | 'horizontal';

  /**
   * The position of the menu, only enable when the direction is vertical
   */
  @Prop({ type: String, default: 'left' })
  public position: 'left' | 'right';

  @Prop({ type: Boolean, default: false })
  public autoCollapse: boolean;

  /**
   * Shared CSS class names for the menu and its items.
   */
  public get sharedClasses(): ClassName {
    return [
      `vdp-theme_${this.$theme}`,
      `vdp-skin_${this.skin}`,
      `vdp-direction_${this.direction}`,
      `vdp-position_${this.position}`,
    ];
  }

  public get classes(): ClassName {
    return ['vd-menu', ...this.sharedClasses];
  }

  private render(h: CreateElement): VNode {
    return (
      <div class={this.classes} role="menu">
        <ul class="vd-menu_start">{this.$slots.start}</ul>
        <ul class="vd-menu_center">
          {this.itemsSource.map(model => {
            if ((model as MenuItemGroup).groupLabel) {
              return (
                <vd-menu-item-group
                  groupLabel={(model as MenuItemGroup).groupLabel}
                  itemsSource={(model as MenuItemGroup).itemsSource}
                />
              );
            } else if ((model as SubMenu).subMenuLabel) {
              return (
                <vd-sub-menu
                  subMenuLabel={(model as SubMenu).subMenuLabel}
                  icon={(model as SubMenu).icon}
                  fa={(model as SubMenu).fa}
                  itemsSource={(model as SubMenu).itemsSource}
                />
              );
            } else if ((model as MenuItem).label) {
              return (
                <vd-menu-item
                  label={(model as MenuItem).label}
                  icon={(model as MenuItem).icon}
                  fa={(model as MenuItem).fa}
                  to={(model as MenuItem).to}
                  href={(model as MenuItem).href}
                  target={(model as MenuItem).target}
                  onClick={(model as MenuItem).onClick || (() => undefined)}
                />
              );
            }
          })}
          {this.$slots.default}
        </ul>
        <ul class="vd-menu_end">{this.$slots.end}</ul>
      </div>
    );
  }
}
