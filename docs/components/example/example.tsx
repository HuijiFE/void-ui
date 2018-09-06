import Vue, { CreateElement, VNode, AsyncComponent } from 'vue';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { ClassName } from 'void-ui';
import axios, { AxiosInstance } from 'axios';
import examples from '@docs/examples/all';
import examplesTsx from '@docs/examples/all-tsx';
import examplesVue from '@docs/examples/all-vue';
import { isDevelopment } from '@docs/utils/environment';

export type AsyncComponentRecord = Record<string, () => Promise<typeof import('vue')>>;

const sourceCode: AxiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}examples/${process.env.VUE_APP_VOID_UI_VERSION}/`,
  timeout: 1000,
  transformResponse: (data: string) => data,
});

const getSourceCode: (path: string) => Promise<string> = async path => {
  try {
    return (await sourceCode.get<string>(path)).data;
  } catch (error) {
    console.error(error);
  }

  return '';
};

const defaultTypes: string[] = ['vue', 'tsx', 'scss'];

/**
 * Component: Example
 */
@Component
export class CExample extends Vue {
  public static readonly all: Record<string, string[]> = examples;
  public static readonly tsx: Record<string, AsyncComponent> = examplesTsx;
  public static readonly vue: Record<string, AsyncComponent> = examplesVue;

  @Prop({ type: String, required: true })
  public readonly path!: string;

  public existed: boolean = false;
  public extensions: string[] = [];
  public has: Record<string, boolean> = {};
  public src: Record<string, string> = {};

  public expanded: boolean = false;

  public get classes(): ClassName {
    return [
      {
        'is-expanded': this.expanded,
      },
    ];
  }

  public toggleFullscreen(): void {
    this.expanded = !this.expanded;
  }

  public loadSourceCode(): void {
    if (!this.$isServer) {
      this.extensions.forEach(async ext => {
        if (this.has[ext]) {
          this.src[ext] = await getSourceCode(`${this.path}.${ext}`);
        }
      });
    }
  }

  @Watch('path', { immediate: true })
  public watchPath(path: string): void {
    if (!CExample.all[path]) {
      this.existed = false;

      return;
    }

    this.existed = true;

    const has: Record<string, boolean> = {};
    const src: Record<string, string> = {};

    defaultTypes.forEach(ext => {
      has[ext] = false;
      src[ext] = '';
    });
    CExample.all[path].forEach(ext => {
      has[ext] = true;
      src[ext] = '';
    });

    this.extensions = [...new Set<string>([...defaultTypes, ...CExample.all[path]])];
    this.has = has;
    this.src = src;

    this.loadSourceCode();
  }

  private render(h: CreateElement): VNode {
    return (
      <vd-tabs staticClass="c-example" class={this.classes} raise>
        <button
          slot="right"
          staticClass="c-example_toggle-fullscreen"
          onClick={this.toggleFullscreen}
        >
          <fa-icon icon={this.expanded ? 'compress' : 'expand'} />
        </button>
        {this.has.vue && isDevelopment ? (
          <vd-tab-pane label="Preview" data-source=".vue">
            {h(CExample.vue[this.path])}
          </vd-tab-pane>
        ) : (
          h()
        )}
        {this.has.tsx ? (
          <vd-tab-pane
            label="Preview"
            label-extra-class="c-example_preview-header"
            data-source=".tsx"
          >
            {h(CExample.tsx[this.path])}
          </vd-tab-pane>
        ) : (
          h()
        )}

        {this.extensions.map(
          ext =>
            this.has[ext] ? (
              <vd-tab-pane>
                <span slot="label">
                  <c-file-icon staticClass="c-example_header-icon" icon={ext} />.{ext}
                </span>
                <pre>{this.src[ext]}</pre>
              </vd-tab-pane>
            ) : (
              h()
            ),
        )}
      </vd-tabs>
    );
  }
}
