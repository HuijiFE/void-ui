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
import { Style, ClassName, Theme, ThemeComponent } from '../../base';

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

  @Prop({ type: Boolean, default: false })
  public readonly bordered!: boolean;

  @Prop({ type: [Boolean, Number], default: false })
  public readonly raise!: boolean | number;

  public get classes(): ClassName {
    return [
      `vdp-theme_${this.themeValue}`,
      {
        'is-bordered': this.bordered,
        'is-raise': this.raise && typeof this.raise === 'boolean',
        [`vdp-raise_${this.raise}`]: this.raise && typeof this.raise === 'number',
      },
    ];
  }

  private panes: VdTabPane[] = [];
  public selectedPane: VdTabPane | null = null;

  private indicatorStyle: Style = { left: '', width: '' };

  public add(pane: VdTabPane): void {
    this.panes.push(pane);
    if (!this.selectedPane) {
      this.select(pane);
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

  private frozen?: boolean;

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
        this.indicatorStyle.left = '';
        this.indicatorStyle.width = '';
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
            >
              {pane.$slots.label || pane.label}
            </button>
          ))}
          {this.$slots.right}
        </div>
        <div staticClass="vd-tabs_separator">
          <div staticClass="vd-tabs_indicator" style={this.indicatorStyle} />
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
  @Prop({ type: String })
  public readonly label?: string;

  @Prop({ type: [String, Array] })
  public readonly labelExtraClass?: string | ClassName;

  private tabs!: VdTabs;

  public get selected(): boolean {
    return this.tabs.selectedPane === this;
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

  private beforeCreate(): void {
    if (this.$parent instanceof VdTabs) {
      this.tabs = this.$parent;
      this.tabs.add(this);
    } else {
      throw new Error("VdTabPane's parent must be VdTabs.");
    }
  }
  private beforeDestroy(): void {
    this.tabs.remove(this);
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-tabs_pane" class={this.classes}>
        {this.$slots.default}
      </div>
    );
  }
}
