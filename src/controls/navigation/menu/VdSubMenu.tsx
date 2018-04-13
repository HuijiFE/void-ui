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
import { VNode, CreateElement, VNodeChildrenArrayContents } from 'vue';
import { Location } from 'vue-router/types/router';
import { VdControl } from '@void/controls/base/VdControl';
import { VdMenu } from '@void/controls/navigation/menu/VdMenu';
import { MenuItem, MenuItemGroup } from '@void/controls/navigation/menu/VdMenuModels';

/**
 * Control SubMenu
 */
@Component
export class VdSubMenu extends VdControl {
  // tslint:disable-next-line:no-null-keyword
  private menu: VdMenu | null = null;

  @Prop({ type: String, required: true })
  public subMenuLabel: string;

  @Prop({ type: String })
  public icon: string;

  @Prop({ type: String })
  public fa: string;

  @Prop({ type: Array, default: () => [] })
  public itemsSource: (MenuItem | MenuItemGroup)[];

  public get classes(): ClassName {
    return ['vd-sub-menu', ...(this.menu ? this.menu.sharedClasses : [])];
  }

  private beforeMount(): void {
    if (this.$parent instanceof VdMenu) {
      this.menu = this.$parent;
    }
    if (!this.menu) {
      throw new Error('VdSubMenu must be placed in VdMenu.');
    }
  }

  private render(h: CreateElement): VNode {
    return (
      <li class={this.classes}>
        <div class="vd-sub-menu_header">
          <span class="vd-sub-menu_icon-container">
            <vd-icon class="vd-sub-menu_icon" icon={this.icon} fa={this.fa} />
          </span>
          <span className="vd-sub-menu_label">{this.subMenuLabel}</span>
          <span class="vd-sub-menu_icon-container">
            <vd-icon class="vd-sub-menu_icon" fa="chevron-down" />
          </span>
        </div>
        <ul class="vd-sub-menu_item-wrapper">
          {this.itemsSource.map(model => {
            if ((model as MenuItemGroup).groupLabel) {
              return (
                <vd-menu-item-group
                  groupLabel={(model as MenuItemGroup).groupLabel}
                  itemsSource={(model as MenuItemGroup).itemsSource}
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
      </li>
    );
  }
}
