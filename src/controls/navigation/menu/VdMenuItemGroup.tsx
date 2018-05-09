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

import { VdMenu } from '@void/controls/navigation/menu/VdMenu';
import { VdSubMenu } from '@void/controls/navigation/menu/VdSubMenu';
import { MenuItem } from '@void/controls/navigation/menu/VdMenuModels';

/**
 * Control MenuItemGroup
 */
@Component
export class VdMenuItemGroup extends Vue {
  // tslint:disable-next-line:no-null-keyword
  private menu: VdMenu | null = null;

  @Prop({ type: String, required: true })
  public groupLabel!: string;

  @Prop({ type: Array, default: () => [] })
  public itemsSource!: MenuItem[];

  private isSubItem: boolean = false;

  public get classes(): ClassName {
    return [
      'vd-menu-item-group',
      ...(this.menu ? this.menu.sharedClasses : []),

      {
        'is-sub-item': this.isSubItem,
      },
    ];
  }

  private beforeMount(): void {
    let parent: Vue = this.$parent;
    for (let i: number = 0; i < 2; i++) {
      if (!parent) {
        break;
      }
      if (parent instanceof VdSubMenu) {
        this.isSubItem = true;
      } else if (parent instanceof VdMenu) {
        this.menu = parent;
        break;
      }
      parent = parent.$parent;
    }

    if (!this.menu) {
      throw new Error('VdMenuItemGroup must be placed in VdMenu.');
    }
  }

  private render(h: CreateElement): VNode {
    return (
      <li class={this.classes}>
        <div class="vd-menu-item-group_label" title={this.groupLabel}>
          {this.groupLabel}
        </div>
        <ul class="vd-menu-item-group_item-wrapper">
          {this.itemsSource.map(item => (
            <vd-menu-item
              label={item.label}
              icon={item.icon}
              fa={item.fa}
              to={item.to}
              href={item.href}
              target={item.target}
              onClick={item.onClick || (() => undefined)}
            />
          ))}
          {this.$slots.default}
        </ul>
      </li>
    );
  }
}
