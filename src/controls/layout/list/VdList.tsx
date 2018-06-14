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

/**
 * Control List
 */
@Component
export class VdList extends VdControl {
  @Prop({ type: Boolean, default: false })
  public readonly showSeparator!: boolean;

  public get classes(): ClassName {
    return [
      'vd-list',
      `vdp-theme_${this.$theme}`,
      { 'is-show-separator': this.showSeparator },
    ];
  }

  private render(h: CreateElement): VNode {
    return <ul class={this.classes}>{this.$slots.default}</ul>;
  }
}

/**
 * Control ListItem
 */
@Component
export class VdListItem extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <li class="vd-list_item">
        <div class="vd-list_item-content">{this.$slots.default}</div>
      </li>
    );
  }
}
