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
import axios, { AxiosInstance } from 'axios';
import examples from '@docs/examples/all';
import examplesTsx from '@docs/examples/all-tsx';
import examplesVue from '@docs/examples/all-vue';

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
  public types: string[] = [];
  public has: Record<string, boolean> = {};
  public src: Record<string, string> = {};

  public async loadSourceCode(ext: string): Promise<void> {
    if (this.has[ext]) {
      this.src[ext] = await getSourceCode(`${this.path}.${ext}`);
    }
  }

  @Watch('path')
  public async load(path: string): Promise<void> {
    if (!CExample.all[path]) {
      this.existed = false;

      return;
    }

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

    this.types = [...new Set<string>([...defaultTypes, ...CExample.all[path]])];
    this.has = has;
    this.src = src;

    await Promise.all(CExample.all[path].map(async ext => this.loadSourceCode(ext)));
  }

  private async mounted(): Promise<void> {
    try {
      await this.load(this.path);
    } catch (error) {
      console.error(error);
    }
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-example">
        <div staticClass="c-example_header">
          <c-file-icon icon="scss" />
          <c-file-icon icon="javascript" />
          <c-file-icon icon="typescript" />
          <c-file-icon icon="vue" />
          <c-file-icon icon="vuets" />
        </div>
        {this.has.tsx ? h(CExample.tsx[this.path]) : ''}
        {this.has.vue ? h(CExample.vue[this.path]) : ''}
        {this.types.filter(ext => this.has[ext]).map(ext => (
          <div>
            <h2>{ext}</h2>
            <pre>{this.src[ext]}</pre>
          </div>
        ))}
      </div>
    );
  }
}
