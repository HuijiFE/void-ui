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
import { Style, ClassName, Theme, ThemeComponent } from '@void/ui/lib/components/base';

/**
 * Component: Tabs
 */
@Component
export class VdTabs extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme!: Theme;
  public get $theme(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  public get classes(): ClassName {
    return [`vdp-theme_${this.$theme}`];
  }

  private panes: VdTabsPane[] = [];
  public selectedPane: VdTabsPane | null = null;

  private indicatorStyle: Style = { left: '', width: '' };

  public add(pane: VdTabsPane): void {
    this.panes.push(pane);
    if (!this.selectedPane) {
      this.select(pane);
    }
  }

  public remove(pane: VdTabsPane): void {
    const index: number = this.panes.indexOf(pane);
    if (index > -1) {
      this.panes.splice(index, 1);
    }
    if (this.selectedPane === pane) {
      this.select(this.panes[0]);
    }
  }

  private frozen?: boolean;

  public select(pane: VdTabsPane): void {
    if (!pane) {
      this.selectedPane = null;

      return;
    }

    if (this.panes.includes(pane)) {
      this.selectedPane = pane;
    }
  }

  @Watch('selectedPane')
  private watchSelectedPane(newPane: VdTabsPane, oldPane: VdTabsPane): void {
    if (newPane && oldPane && newPane !== oldPane) {
      this.panes.forEach(pane => {
        if (pane === newPane) {
          pane.transition =
            this.panes.indexOf(newPane) - this.panes.indexOf(oldPane) > 0
              ? 'right-in'
              : 'left-in';
        } else {
          pane.transition = '';
        }
      });
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
          {this.panes.map((pane, index) => (
            <button
              staticClass="vd-tabs_header-item"
              key={`${index}-${pane.label}`}
              class={{ 'is-selected': pane.selected }}
              onClick={() => this.select(pane)}
            >
              {pane.$slots.header || pane.label}
            </button>
          ))}
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
export class VdTabsPane extends Vue {
  @Prop({ type: String })
  public readonly label?: string;

  private tabs!: VdTabs;

  public get selected(): boolean {
    return this.tabs.selectedPane === this;
  }

  public transition: 'left-in' | 'right-in' | '' = '';

  public get classes(): ClassName {
    return [
      {
        'is-selected': this.selected,
        [`is-${this.transition}`]: this.transition,
      },
    ];
  }

  private beforeMount(): void {
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
