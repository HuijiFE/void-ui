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

import { styler } from 'popmotion';
import { Styler } from 'stylefire';

/**
 * Control TabPane
 */
@Component
export class VdTabPane extends VdControl {
  // tslint:disable-next-line:no-any no-null-keyword
  private tabs: VdTabs = null as any;

  // no reactive, do not init
  public styler!: Styler;

  @Prop({ type: String, required: true })
  public label!: string;

  public get selected(): boolean {
    return this.tabs.selectedPane === this;
  }

  public get classes(): ClassName {
    return [
      'vd-tab-pane',
      {
        'is-selected': this.selected,
        'is-hidden': !this.selected,
      },
    ];
  }

  public select(): void {
    this.tabs.select(this);
  }

  private beforeMount(): void {
    this.tabs = this.$parent as VdTabs;
    if (this.tabs.panes.length === 0) {
      this.select();
    }
    this.tabs.panes.push(this);
  }

  private mounted(): void {
    this.styler = styler(this.$el as Element, {});
  }

  private beforeDestroy(): void {
    this.tabs.panes.splice(this.tabs.panes.indexOf(this), 1);
  }

  private render(h: CreateElement): VNode {
    return h('div', { class: this.classes }, [this.$slots.default]);
  }
}
