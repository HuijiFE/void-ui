import Vue, { CreateElement, VNode } from 'vue';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { ClassName, Theme } from 'void-ui';

/**
 * Component: DemoBox
 */
@Component
export class CDemoBox extends Vue {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get $theme(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  public get classes(): ClassName {
    return [`cp-theme_${this.$theme}`];
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-demo-box" class={this.classes}>
        <div staticClass="c-demo-box_content">{this.$slots.default}</div>
      </div>
    );
  }
}
