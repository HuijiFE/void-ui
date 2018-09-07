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
import { Style, ClassName, Theme } from 'void-ui';

/**
 * Component: DemoBox
 */
@Component
export class CDemoBox extends Vue {
  private static count: number = 0;

  @Prop({ type: Boolean, default: false })
  public readonly bordered!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly bold!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly rainbow!: boolean;

  @Prop({ type: String })
  public readonly label?: String;

  @Prop({ type: [Number, String] })
  public readonly ratio!: number | string;

  private rainbowId!: number;

  private beforeCreate(): void {
    this.rainbowId = CDemoBox.count++;
  }

  public get classes(): ClassName {
    return [
      {
        'is-bordered': this.bordered,
        'is-bold': this.bold,
        [`cp-rainbow_${this.rainbowId % 9}`]: this.rainbow,
      },
    ];
  }

  public get style(): Style {
    return {
      paddingBottom:
        this.ratio !== undefined
          ? typeof this.ratio === 'number'
            ? `${this.ratio > 1 ? this.ratio : this.ratio * 100}%`
            : this.ratio
          : '',
    };
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-demo-box" class={this.classes} style={this.style}>
        <div staticClass="c-demo-box_content">
          {this.$slots.default || <div staticClass="c-demo-box_label">{this.label}</div>}
        </div>
      </div>
    );
  }
}
