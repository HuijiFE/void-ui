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
import { Skin, VdControl } from '@void/controls/base/VdControl';
import { VdTabPane } from '@void/controls/navigation/tabs/VdTabPane';
import { MenuItem } from '@void/controls/navigation/menu/VdMenuModels';

import { easing, tween } from 'popmotion';
const duration: number = 400;

/**
 * Control Tabs
 */
@Component
export class VdTabs extends VdControl {
  @Prop({ type: String, default: 'plain' })
  public skin!: Skin;

  public readonly panes: VdTabPane[] = [];

  // tslint:disable-next-line:no-null-keyword
  public selectedPane: VdTabPane | null = null;

  @Watch('selectedPane')
  private movePane(newPane: VdTabPane, oldPane: VdTabPane): void {
    if (newPane && oldPane && newPane !== oldPane) {
      const newIndex: number = this.panes.indexOf(newPane);
      const oldIndex: number = this.panes.indexOf(oldPane);

      // 1  <-
      // -1 ->
      const direction: number = newIndex > oldIndex ? 1 : -1;

      tween({
        from: -100 * oldIndex,
        to: -100 * oldIndex - direction * 50,
        ease: easing.easeIn,
        duration,
      }).start((v: number) => oldPane.styler.set('x', `${v}%`));

      tween({
        from: -100 * newIndex + direction * 50,
        to: -100 * newIndex,
        ease: easing.easeOut,
        duration,
      }).start((v: number) => newPane.styler.set('x', `${v}%`));
    }
  }

  public get headerItems(): MenuItem[] {
    return this.panes.map(pane => ({
      label: pane.label,
      onClick: () => (this.selectedPane = pane),
    }));
  }

  public get classes(): ClassName {
    return [
      'vd-tabs',
      `vdp-theme_${this.$theme}`,
      `vdp-skin_${this.skin}`,
      {
        [`vda-raise-${this.raise}`]: this.raise,
        'is-bordered': this.disabled,
      },
    ];
  }

  private render(h: CreateElement): VNode {
    return (
      <div class={this.classes}>
        <vd-menu
          class="vd-tabs_header"
          theme={this.theme}
          skin={this.skin}
          direction="horizontal"
          bordered
        >
          {this.panes.map<VNode>(pane => (
            <vd-tabs-header-item theme={this.theme} skin={this.skin} pane={pane} />
          ))}
        </vd-menu>
        <div class="vd-tabs_body">
          <div class="vd-tabs_pane-wrapper">{this.$slots.default}</div>
        </div>
      </div>
    );
  }
}
