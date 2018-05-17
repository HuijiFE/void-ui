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
import { CreateElement, VNode } from 'vue';
import { VdControl } from '@void/controls/base/VdControl';
import { VdTabs } from '@void/controls/navigation/tabs/VdTabs';
import { VdTabPane } from '@void/controls/navigation/tabs/VdTabPane';

/**
 * Control TabsHeaderItem
 */
@Component
export class VdTabsHeaderItem extends VdControl {
  @Prop({ type: Object, required: true })
  public readonly pane!: VdTabPane;

  public get classes(): ClassName {
    return [
      'vd-tabs-header-item',
      'vd-menu-item',
      `vdp-theme_${this.$theme}`,
      `vdp-skin_${this.skin}`,
      'vdp-direction_horizontal',
      {
        'is-selected': this.pane.selected,
      },
    ];
  }

  private render(h: CreateElement): VNode {
    return (
      <li class={this.classes} role="menuitem" onClick={this.pane.select}>
        <span class="vd-tabs-header-item_inner vd-menu-item_inner">
          {this.pane.label}
        </span>
      </li>
    );
  }
}
