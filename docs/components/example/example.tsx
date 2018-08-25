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
import axios, { AxiosInstance } from 'axios';
import examplesSrc from '@docs/examples/all-src';
import examplesTsx from '@docs/examples/all-tsx';
import examplesVue from '@docs/examples/all-vue';

const sourceCode: AxiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}examples/${process.env.VUE_APP_VOID_UI_VERSION}/`,
  timeout: 1000,
  transformResponse: data => data,
});

/**
 * Component: Example
 */
@Component
export class CExample extends Vue {
  public static readonly src: string[] = examplesSrc;
  public static readonly tsx: typeof examplesTsx = examplesTsx;
  public static readonly vue: typeof examplesVue = examplesVue;

  @Prop({ type: String, required: true })
  public readonly path!: keyof typeof examplesTsx | keyof typeof examplesVue;

  public readonly src: {
    tsx: string;
    vue: string;
    scss: string;
  } = {
    tsx: '',
    vue: '',
    scss: '',
  };

  public get tsx(): boolean {
    return CExample.src.includes(`${this.path}.tsx`);
  }
  public get vue(): boolean {
    return CExample.src.includes(`${this.path}.vue`);
  }
  public get scss(): boolean {
    return CExample.src.includes(`${this.path}.scss`);
  }

  private mounted(): void {
    if (this.tsx) {
      sourceCode.get(`${this.path}.tsx`).then(({ data }) => (this.src.tsx = data));
    }
    if (this.vue) {
      sourceCode.get(`${this.path}.vue`).then(({ data }) => (this.src.vue = data));
    }
    if (this.scss) {
      sourceCode.get(`${this.path}.scss`).then(({ data }) => (this.src.scss = data));
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
        {this.tsx ? h(CExample.tsx[this.path]) : ''}
        {this.vue ? h(CExample.vue[this.path]) : ''}
        {this.tsx ? <pre>{this.src.tsx}</pre> : ''}
        {this.vue ? <pre>{this.src.vue}</pre> : ''}
        {this.scss ? <pre>{this.src.scss}</pre> : ''}
      </div>
    );
  }
}
