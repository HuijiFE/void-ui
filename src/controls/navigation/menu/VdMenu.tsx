import { Vue, Component, Emit, Inject, Model, Prop, Provide, Watch } from 'vue-property-decorator';
import { VdControl } from '@void/controls/base/VdControl';
import { CreateElement, VNode } from 'vue';
import { Location } from 'vue-router/types/router';

/**
 * Direction for menu
 */
export type MenuDirection = 'horizontal' | 'vertical';

/**
 * Position for menu or menu item
 */
export type MenuPosition = 'left' | 'right';

/**
 * Control Navbar
 */
@Component
export class VdMenu extends VdControl {
  @Prop({ type: String })
  private brandImage: string;

  @Prop({ type: String })
  private brandLabel: string;

  @Prop({ type: Boolean, default: false })
  private brandLabelHidden: boolean;

  @Prop({ type: [String, Object] })
  private brandTo: string | Location;

  @Prop({ type: String, default: 'horizontal' })
  private direction: MenuDirection;

  @Prop({ type: String, default: 'left' })
  private position: MenuPosition;

  @Prop({ type: String, default: 'left' })
  private itemsPosition: MenuPosition;

  public get classes(): ClassName {
    return [`vdp-size-${this.size}`, `vdp-direction-${this.direction}`, `vdp-skin-${this.skin}`, `vdp-position-${this.position}`];
  }

  private render(h: CreateElement): VNode {
    return (
      <nav class={['vd-menu', ...this.classes]} role="navigation">
        <router-link class="vd-menu_brand" to={this.brandTo}>
          {this.$slots.brandImage ? (
            this.$slots.brandImage
          ) : (
            <img class="vd-menu_brand-image" v-show={this.brandImage} src={this.brandImage} alt={this.brandLabel} />
          )}
          <span class="vd-menu_brand-label" v-show={!this.brandLabelHidden && this.brandLabel}>
            {this.brandLabel}
          </span>
        </router-link>
        <div class="vd-menu_start">{this.$slots.start}</div>
        <ul class="vd-menu_item-wrapper">{this.$slots.default}</ul>
        <div class="vd-menu_end">{this.$slots.end}</div>
      </nav>
    );
  }
}
