// tslint:disable:no-any no-unsafe-any
import Vue, { CreateElement, VNode, VNodeData } from 'vue';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { ClassName, Theme, ThemeComponent } from 'void-ui';

/** 操作属性的表单部件类型 */
type PropWidget = 'checkbox' | 'radio' | 'text';

/** 属性选项 */
interface PropOptions {
  /** 属性名 */
  name: string;
  /** 表单部件类型 */
  widget: PropWidget;
  /** 允许值 */
  availableValues: any[];
  /** 是否允许自定义值 */
  allowCustomized: boolean;
}

interface MenuData {
  expanded: boolean;
  props: PropOptions[];
}

interface BindModel {
  tag: string;
  nodeData: VNodeData;
  menuData: MenuData;
  children: (BindModel | string)[];
}

/**
 * 空 `VNodeData`，注意：保证空属性的响应式，所有 BindModel 都必须基于此创建
 */
function emptyNodeData(): VNodeData {
  return {
    staticClass: '',
    class: {},
    staticStyle: {},
    style: {},
    props: {},
    attrs: {},
    domProps: {},
    on: {},
    nativeOn: {},
  };
}

function emptyMenuData(): MenuData {
  return {
    expanded: true,
    props: [],
  };
}

const presets = {
  debugDiv: (): BindModel => ({
    tag: 'div',
    nodeData: {
      ...emptyNodeData(),
      staticStyle: {
        width: '100%',
        height: '215px',
        border: '1px solid #ccc',
      },
    },
    menuData: emptyMenuData(),
    children: [],
  }),
  flexbox: (): BindModel => ({
    tag: 'vd-flexbox',
    nodeData: {
      ...emptyNodeData(),
      props: {
        gap: true,
        align: 'stretch',
      },
    },
    menuData: emptyMenuData(),
    children: Array(8)
      .fill(0)
      .map<BindModel>((e, i) => ({
        tag: 'vd-flexbox',
        nodeData:
          i % 2 === 0
            ? {
                ...emptyNodeData(),
                props: {
                  gap: true,
                },
              }
            : emptyNodeData(),
        menuData: emptyMenuData(),
        children:
          i === 0
            ? [
                {
                  tag: 'vd-flexbox',
                  nodeData: emptyNodeData(),
                  menuData: emptyMenuData(),
                  children: [presets.debugDiv()],
                },
              ]
            : i % 2 === 0
            ? Array(i)
                .fill(0)
                .map<BindModel>(() => ({
                  tag: 'vd-flexbox',
                  nodeData: emptyNodeData(),
                  menuData: emptyMenuData(),
                  children: [presets.debugDiv()],
                }))
            : [presets.debugDiv()],
      })),
  }),
};

/**
 * Component: Manual
 */
@Component
export class CDesigner extends Vue implements ThemeComponent {
  @Prop(String)
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme || 'lite';
  }

  public get classes(): ClassName {
    return [`cp-theme_${this.themeValue}`];
  }

  private selectedModel: BindModel | null = null;

  private root: BindModel = presets.flexbox();

  private onUnSelect(event: MouseEvent): void {
    console.log('unselect');
    event.preventDefault();
    event.stopPropagation();
    this.selectedModel = null;
  }

  private onSelectFunc(model: BindModel): (e: MouseEvent) => void {
    return e => {
      console.log(`select ${model.tag}`);
      // 跳过重复选择
      if (this.selectedModel === model) {
        return;
      }

      // 判断是否原生事件
      if (e instanceof Event) {
        // 阻止事件冒泡
        e.preventDefault();
        e.stopPropagation();
      }

      this.selectedModel = model;

      this.scrollMenu();
    };
  }

  private scrollMenu(): void {
    this.$nextTick(() => {
      const selected = this.$refs.menu.querySelector<HTMLDivElement>(
        '.c-designer_menu.is-selected',
      );
      if (selected && selected.scrollIntoView) {
        selected.scrollIntoView();
      }
    });
  }

  private renderComponent(h: CreateElement, model: BindModel): VNode {
    const select = this.onSelectFunc(model);
    (model.nodeData.on || (model.nodeData.on = {})).click = select;
    (model.nodeData.nativeOn || (model.nodeData.nativeOn = {})).click = select;

    return h(
      model.tag,
      {
        ...model.nodeData,
        class: {
          ...model.nodeData.class,
          'is-designer-selected': this.selectedModel === model,
        },
      },
      model.children.map(c => (typeof c === 'string' ? c : this.renderComponent(h, c))),
    );
  }

  private renderMenu(h: CreateElement, model: BindModel, level: number = 0): VNode {
    const selected = this.selectedModel === model;

    return (
      <div
        staticClass="c-designer_menu"
        class={{
          'is-selected': selected,
        }}
      >
        <div
          staticClass="c-designer_menu-label"
          class={{
            'is-selected': selected,
          }}
        >
          <button
            staticClass="c-designer_menu-expand-button"
            class={{
              'is-expanded': model.menuData.expanded,
            }}
            style={{
              paddingLeft: `${level}em`,
            }}
            onClick={(e: MouseEvent) => {
              e.preventDefault();
              e.stopPropagation();
              model.menuData.expanded = !model.menuData.expanded;
            }}
          >
            {model.children.length > 0 && (
              <fa-icon
                staticClass="c-designer_menu-expand-icon"
                icon={['fas', 'caret-right']}
              />
            )}
          </button>
          <button
            staticClass="c-designer_menu-label-content"
            onClick={this.onSelectFunc(model)}
          >
            {model.tag}
          </button>
        </div>
        <ul
          staticClass="c-designer_menu-wrapper"
          class={{
            'is-expanded': model.menuData.expanded,
          }}
        >
          {model.children
            .filter((c): c is BindModel => typeof c !== 'string')
            .map(c => (
              <li staticClass="c-designer_menu-item">
                {this.renderMenu(h, c, level + 1)}
              </li>
            ))}
        </ul>
      </div>
    );
  }

  private renderOptions(h: CreateElement, model: BindModel): VNode {
    return <div staticClass="c-designer_options" />;
  }

  public $refs!: {
    menu: HTMLDivElement;
  };

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-designer" class={this.classes}>
        <div staticClass="c-designer_main" onClick={this.onUnSelect} role="presentation">
          <div staticClass="c-designer_view-container">
            {this.renderComponent(h, this.root)}
          </div>
        </div>
        <div staticClass="c-designer_side">
          <div
            ref="menu"
            staticClass="c-designer_menu-container"
            onClick={this.onUnSelect}
            role="menubar"
          >
            {this.renderMenu(h, this.root)}
          </div>
          <div staticClass="c-designer_options-container">
            {!!this.selectedModel && this.renderOptions(h, this.selectedModel)}
          </div>
        </div>
      </div>
    );
  }
}
