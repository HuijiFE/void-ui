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
import { Location } from 'vue-router/types/router';
import { FontAwesomeIconProps } from '@void/controls/basic/icon/VdIcon';

import {
  Shape,
  VdControl,
  RouterControl,
  IconControl,
  LoadingControl,
} from '@void/controls/base/VdControl';

/**
 * Control Button
 */
@Component
export class VdButton extends VdControl
  implements IconControl, RouterControl, LoadingControl {
  @Prop({ type: String, default: 'button' })
  // tslint:disable-next-line:no-reserved-keywords
  public type: string;

  @Prop({ type: String })
  public content: string;

  @Prop({ type: Boolean, default: false })
  public wide: boolean;

  @Prop({ type: String })
  public icon: string;

  @Prop({ type: [String, Array, Object] })
  public fa: string | string[] | FontAwesomeIconProps;

  @Prop({ type: String, default: 'left' })
  public iconPosition: 'left' | 'right';

  @Prop({ type: [String, Object] })
  public to: string | Location;

  @Prop({ type: String })
  public href: string;

  @Prop({ type: String })
  public target: string;

  @Prop({ type: Boolean, default: false })
  public loading: boolean;

  public get classes(): ClassName {
    return [
      'vd-button',
      `vdp-theme_${this.$theme}`,
      `vdp-tone_${this.tone}`,
      `vdp-skin_${this.skin}`,
      `vdp-shape_${this.shape}`,
      `vdp-size_${this.size}`,
      {
        'is-disabled': this.disabled,
        'is-bordered': this.disabled,
        'is-wide': this.wide,
        'is-loading': this.loading,
      },
    ];
  }

  private render(h: CreateElement): VNode {
    const icon: VNode | string =
      this.shape === Shape.rect || this.shape === Shape.pill ? (
        this.loading ? (
          <vd-icon
            class="vd-button_icon"
            fa={{ icon: ['far', 'spinner'], pulse: true }}
          />
        ) : this.icon || this.fa ? (
          <vd-icon class="vd-button_icon" icon={this.icon} fa={this.fa} />
        ) : (
          ''
        )
      ) : (
        ''
      );
    const inner: VNode =
      this.iconPosition === 'left' ? (
        <span class="vd-button_inner">
          {icon}
          <span class="vd-button_content">{this.$slots.default || this.content}</span>
        </span>
      ) : (
        <span class="vd-button_inner">
          <span class="vd-button_content">{this.$slots.default || this.content}</span>
          {icon}
        </span>
      );

    return this.to ? (
      <router-link
        class={this.classes}
        nativeOnClick={this.$emit('click')}
        disabled={this.disabled}
      >
        {inner}
      </router-link>
    ) : this.href ? (
      <a
        class={this.classes}
        href={this.href}
        target={this.target}
        rel="noopener noreferrer"
        onClick={this.$emit('click')}
        disabled={this.disabled}
      >
        {inner}
      </a>
    ) : (
      <button
        class={this.classes}
        type={this.type}
        onClick={this.$emit('click')}
        disabled={this.disabled}
      >
        {inner}
      </button>
    );
  }
}
