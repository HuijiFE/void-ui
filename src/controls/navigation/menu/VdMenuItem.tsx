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

export interface MenuItem {
  icon?: string;
  fa?: string;
  label: string;
  to?: string | Location;
  href?: string;
  target?: string;
  itemsSource?: MenuItem[];
}

/**
 * Control NavbarItem
 */
@Component
export class VdMenuItem extends VdControl {
  // tslint:disable-next-line:no-null-keyword
  private parent: VdMenu | null = null;

  @Prop({ type: String })
  private icon: string;

  @Prop({ type: String })
  private fa: string;

  @Prop({ type: String })
  private label: string;

  @Prop({ type: [String, Object] })
  private to: string | Location;

  @Prop({ type: String })
  private href: string;

  @Prop({ type: String })
  private target: string;

  @Prop({ type: Array })
  private itemsSource: MenuItem[];

  public get isActive(): boolean {
    return window.location.href === this.href || window.location.pathname === this.href;
  }

  private handlerClick(event: MouseEvent): void {
    this.$emit('click', event);
  }

  private render(h: CreateElement): VNode {
    const data: object = {
      onClick: this.handlerClick,
      onNativeClick: this.handlerClick,
    };

    const inner: JSX.Element = (
      <a
        class="vd-menu-item_inner"
        href={this.href}
        target={this.target}
        ref="noopener noreferrer"
      >
        <vd-icon class="vd-menu-item_icon" icon={this.icon} fa={this.fa} />
        <span className="vd-menu-item_label">{this.label || this.$slots.default}</span>
      </a>
    );

    return this.to ? (
      <router-link
        class={['vd-menu-item', ...(this.parent ? this.parent.classes : [])]}
        role="menuitem"
        tag="li"
        to={this.to}
        exact-active-class="is-active"
        nativeOnClick={this.handlerClick}
      >
        {inner}
      </router-link>
    ) : (
      <li
        class={['vd-menu-item', ...(this.parent ? this.parent.classes : [])]}
        role="menuitem"
        onClick={this.handlerClick}
      >
        {inner}
      </li>
    );
  }

  private mounted(): void {
    if (this.$parent instanceof VdMenu) {
      this.parent = this.$parent;
    }
  }
}
