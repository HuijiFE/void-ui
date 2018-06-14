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
const duration: number = 300;

/**
 * Control Tabs
 */
@Component
export class VdTabs extends VdControl {
  @Prop({ type: String, default: 'plain' })
  public readonly skin!: Skin;

  public readonly panes: VdTabPane[] = [];

  // tslint:disable-next-line:no-null-keyword
  public selectedPane: VdTabPane | null = null;

  @Watch('panes')
  public resetSelectedPane(panes: VdTabPane[]): void {
    if (panes.length > 0) {
      this.selectedPane = panes[0];
    }
  }

  private changing: boolean = false;

  public select(pane: VdTabPane): void {
    if (this.changing) {
      return;
    }

    this.selectedPane = pane;
    this.$emit('change', pane);
  }

  @Watch('selectedPane')
  private movePane(newPane: VdTabPane, oldPane: VdTabPane): void {
    if (newPane && oldPane && newPane !== oldPane && this.panes.includes(oldPane)) {
      this.changing = true;

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
      }).start({
        update: (v: number) => oldPane.styler.set('x', `${v}%`),
        complete: () => {
          this.changing = false;
          oldPane.styler.set('x', 0);
        },
      });

      tween({
        from: -100 * newIndex + direction * 50,
        to: -100 * newIndex,
        ease: easing.easeOut,
        duration,
      }).start({
        update: (v: number) => newPane.styler.set('x', `${v}%`),
      });
    }
  }

  public get classes(): ClassName {
    return [
      'vd-tabs',
      `vdp-theme_${this.$theme}`,
      `vdp-skin_${this.skin}`,
      {
        [`vda-raise_${this.raise}`]: this.raise,
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
