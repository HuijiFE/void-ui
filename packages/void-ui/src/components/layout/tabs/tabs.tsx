// tslint:disable:no-any
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
import { Style, ClassName, Theme, ThemeComponent, Flex, Size } from '../../base';

/**
 * Component: Tabs
 */
@Component
export class VdTabs extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  @Prop(String)
  public readonly size!: Size;

  @Prop({ type: Boolean, default: false })
  public readonly noGap!: boolean;

  @Prop(String)
  public readonly headerFlex?: Flex;

  @Prop([String, Array, Object])
  public readonly indicatorClass?: string | ClassName;

  @Prop({ type: Boolean, default: false })
  public readonly hover!: boolean;

  public get classes(): ClassName {
    return [
      `vdp-theme_${this.themeValue}`,
      {
        [`vdp-size_${this.size}`]: this.size,
        [`vdp-header-flex_${this.headerFlex}`]: this.headerFlex,
        'is-no-gap': this.noGap,
      },
    ];
  }

  private panes: VdTabPane[] = [];
  public selectedPane: VdTabPane | null = null;

  private indicatorStyle: Style = { left: null, width: null };

  public add(pane: VdTabPane): void {
    this.panes.push(pane);
    if (!this.selectedPane) {
      this.selectedPane = pane;
    }
  }

  public remove(pane: VdTabPane): void {
    const index: number = this.panes.indexOf(pane);
    if (index > -1) {
      this.panes.splice(index, 1);
    }
    if (this.selectedPane === pane) {
      this.select(this.panes[0]);
    }
  }

  public select(pane: VdTabPane): void {
    if (!pane) {
      this.selectedPane = null;

      return;
    }

    if (this.panes.includes(pane)) {
      this.selectedPane = pane;
    }
  }

  @Watch('selectedPane')
  private watchSelectedPane(newPane: VdTabPane, oldPane: VdTabPane): void {
    if (newPane && oldPane && newPane !== oldPane) {
      this.panes.forEach(pane => (pane.transition = ''));
      if (this.panes.indexOf(newPane) - this.panes.indexOf(oldPane) > 0) {
        newPane.transition = 'right-in';
        oldPane.transition = 'left-out';
      } else {
        newPane.transition = 'left-in';
        oldPane.transition = 'right-out';
      }
    }

    this.$nextTick(() => {
      const selectedIndex: number = this.panes.indexOf(newPane);

      const selectedHeaderItem: Element | undefined =
        selectedIndex > -1
          ? Array.from(this.$refs.header.querySelectorAll('.vd-tabs_header-item'))[
              selectedIndex
            ]
          : undefined;

      if (selectedHeaderItem) {
        this.indicatorStyle.left = `${selectedHeaderItem.getBoundingClientRect().left -
          this.$refs.header.getBoundingClientRect().left}px`;
        this.indicatorStyle.width = `${selectedHeaderItem.scrollWidth}px`;
      } else {
        this.indicatorStyle.left = null;
        this.indicatorStyle.width = null;
      }
    });
  }

  public $refs!: {
    header: Element;
  };

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-tabs" class={this.classes}>
        <div staticClass="vd-tabs_header" ref="header">
          {this.$slots.left}
          {this.panes.map((pane, index) => (
            <button
              staticClass="vd-tabs_header-item"
              key={`${index}-${pane.label}`}
              class={[
                { 'is-selected': pane.selected },
                ...(pane.labelExtraClass
                  ? typeof pane.labelExtraClass === 'string'
                    ? [pane.labelExtraClass]
                    : pane.labelExtraClass
                  : []),
              ]}
              onClick={() => this.select(pane)}
              onMouseenter={() => this.hover && this.select(pane)}
            >
              {pane.$slots.label || pane.label}
            </button>
          ))}
          {this.$slots.right}
        </div>
        <div staticClass="vd-tabs_separator">
          <div
            staticClass="vd-tabs_indicator"
            class={this.indicatorClass}
            style={this.indicatorStyle}
          >
            {this.$slots.indicator}
          </div>
        </div>
        <div staticClass="vd-tabs_body">
          <div staticClass="vd-tabs_container">
            <div staticClass="vd-tabs_wrapper">{this.$slots.default}</div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Child Component: TabPane
 */
@Component
export class VdTabPane extends Vue {
  private static count: number = 0;

  private id!: number;

  @Prop({ type: String })
  public readonly label?: string;

  @Prop({ type: [String, Array] })
  public readonly labelExtraClass?: string | ClassName;

  private tabs: VdTabs = null as any;

  public get selected(): boolean {
    return (
      this.tabs.selectedPane === this ||
      !!(
        this.$isServer &&
        this.tabs.selectedPane &&
        this.tabs.selectedPane.id === this.id
      )
    );
  }

  public transition: 'left-in' | 'left-out' | 'right-in' | 'right-out' | '' = '';

  public get classes(): ClassName {
    return [
      {
        'is-selected': this.selected,
        [`is-${this.transition}`]: this.transition,
      },
    ];
  }

  private created(): void {
    this.id = VdTabPane.count++;
    if (this.$parent instanceof VdTabs) {
      this.tabs = this.$parent;
      this.tabs.add(this);
    } else {
      throw new Error("VdTabPane's parent must be VdTabs.");
    }
  }
  private beforeDestroy(): void {
    this.tabs.remove(this);
    this.tabs = undefined as any;
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-tabs_pane" class={this.classes}>
        {this.$slots.default}
      </div>
    );
  }
}
