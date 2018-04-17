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
import { VdMenuItemGroup } from '@void/controls/navigation/menu/VdMenuItemGroup';
import { VdSubMenu } from '@void/controls/navigation/menu/VdSubMenu';

/**
 * Control NavbarItem
 */
@Component
export class VdMenuItem extends VdControl {
  // tslint:disable-next-line:no-null-keyword
  private menu: VdMenu | null = null;

  // NOTE: non-reactive, do not initial
  private subMenu?: VdSubMenu;
  private group?: VdMenuItemGroup;

  @Prop({ type: String })
  public label: string;

  @Prop({ type: String })
  public icon: string;

  @Prop({ type: String })
  public fa: string;

  @Prop({ type: [String, Object] })
  public to: string | Location;

  @Prop({ type: String })
  public href: string;

  @Prop({ type: String })
  public target: string;

  private isSubItem: boolean = false;
  private isGroupItem: boolean = false;

  public get isSelected(): boolean {
    return !!(this.menu && this.menu.selectedItem === this);
  }

  public get classes(): ClassName {
    return [
      'vd-menu-item',
      ...(this.menu ? this.menu.sharedClasses : []),
      {
        'is-sub-item': this.isSubItem,
        'is-group-item': this.isGroupItem,
        'is-selected': this.isSelected,
      },
    ];
  }

  private onClick(): void {
    if (this.menu && (this.to || this.target !== '_blank')) {
      this.menu.selectedItem = this;
    }
    this.$emit('click');
  }

  private beforeMount(): void {
    let parent: Vue = this.$parent;
    for (let i: number = 0; i < 3; i++) {
      if (!parent) {
        break;
      }
      if (!this.group && parent instanceof VdMenuItemGroup) {
        this.group = parent;
        this.isGroupItem = true;
      } else if (!this.subMenu && parent instanceof VdSubMenu) {
        this.subMenu = parent;
        this.isSubItem = true;
      } else if (!this.menu && parent instanceof VdMenu) {
        this.menu = parent;
        break;
      }
      parent = parent.$parent;
    }
    if (!this.menu) {
      throw new Error('VdMenuItem must be placed in VdMenu.');
    }
  }

  // HACK: to make sure is selected
  private mounted(): void {
    if (this.menu) {
      if (this.to && this.$el.classList.contains('is-route-matched')) {
        this.menu.selectedItem = this;
        if (this.subMenu) {
          this.subMenu.isExpanded = true;
        }
      } else if (
        this.href &&
        (this.$refs.inner as HTMLAnchorElement).href === window.location.href
      ) {
        this.menu.selectedItem = this;
        if (this.subMenu) {
          this.subMenu.isExpanded = true;
        }
      }
    }
  }

  private render(h: CreateElement): VNode {
    const inner: JSX.Element = (
      <a
        class="vd-menu-item_inner"
        href={this.href}
        target={this.target}
        rel="noopener noreferrer"
        ref="inner"
      >
        <span class="vd-menu-item_icon-container">
          <vd-icon class="vd-menu-item_icon" icon={this.icon} fa={this.fa} />
        </span>
        <span class="vd-menu-item_label">{this.$slots.default || this.label}</span>
      </a>
    );

    return this.to ? (
      <router-link
        class={this.classes}
        exactActiveClass="is-route-matched"
        role="menuitem"
        tag="li"
        to={this.to}
        nativeOnClick={this.onClick}
      >
        {inner}
      </router-link>
    ) : (
      <li class={this.classes} role="menuitem" onClick={this.onClick}>
        {inner}
      </li>
    );
  }
}
