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
import { Style } from 'void-ui';

const stylePropertyNames: string[] = [
  'background',
  'background-color',
  'background-image',
];

const cssVariablePropertyNames: string[] = [
  'theme-lite-fg-emphasize',
  'theme-lite-fg-normal',
  'theme-lite-fg-sub',
  'theme-lite-fg-placeholder',
  'theme-lite-fg-disabled',
  'theme-lite-bg-higher',
  'theme-lite-bg-high',
  'theme-lite-bg-normal',
  'theme-lite-bg-low',
  'theme-lite-bg-lower',
  'theme-lite-bg-hover',
  'theme-lite-bg-disabled',
  'theme-lite-bd-normal',
  'theme-lite-bd-disabled',
  'theme-lite-bd-focus',
  'theme-dark-fg-emphasize',
  'theme-dark-fg-normal',
  'theme-dark-fg-sub',
  'theme-dark-fg-placeholder',
  'theme-dark-fg-disabled',
  'theme-dark-bg-higher',
  'theme-dark-bg-high',
  'theme-dark-bg-normal',
  'theme-dark-bg-low',
  'theme-dark-bg-lower',
  'theme-dark-bg-hover',
  'theme-dark-bg-disabled',
  'theme-dark-bd-normal',
  'theme-dark-bd-disabled',
  'theme-dark-bd-focus',
  'tone-primary-lightener',
  'tone-primary-lighten',
  'tone-primary-standard',
  'tone-primary-darken',
  'tone-primary-darkener',
  'tone-secondary-lightener',
  'tone-secondary-lighten',
  'tone-secondary-standard',
  'tone-secondary-darken',
  'tone-secondary-darkener',
  'tone-success-lightener',
  'tone-success-lighten',
  'tone-success-standard',
  'tone-success-darken',
  'tone-success-darkener',
  'tone-warning-lightener',
  'tone-warning-lighten',
  'tone-warning-standard',
  'tone-warning-darken',
  'tone-warning-darkener',
  'tone-danger-lightener',
  'tone-danger-lighten',
  'tone-danger-standard',
  'tone-danger-darken',
  'tone-danger-darkener',
  'grade-1',
  'grade-2',
  'grade-3',
  'grade-4',
  'grade-5',
  'raise-1',
  'raise-2',
  'raise-3',
  'raise-4',
  'raise-5',
  'raise-6',
  'raise-7',
  'raise-8',
];

/**
 * Component: MachineLearn
 */
@Component
export class CMachineLearn extends Vue {
  public get tag(): string {
    return this.$route.params.tag;
  }

  public get query(): Record<string, string | undefined> {
    return this.$route.query;
  }

  public get style(): Record<string, string | null> {
    const style: Record<string, string | null> = {};

    Object.entries(this.$route.query).forEach(([name, value]) => {
      if (cssVariablePropertyNames.includes(name)) {
        style[`--${name}`] = value;
      }
      if (stylePropertyNames.includes(name)) {
        style[name] = value;
      }
    });

    return style;
  }

  private tagRenderMap!: Record<string, (h: CreateElement) => VNode | VNode[]>;

  private created(): void {
    console.info(this.query);

    this.tagRenderMap = {
      card: h => (
        <vd-card
          style={this.query.cardStyle}
          raise={
            (typeof this.query.raise === 'string' && parseInt(this.query.raise, 10)) ||
            true
          }
        >
          {this.query.header && (
            <vd-card-header style={this.query.headerStyle}>
              {this.query.header}
            </vd-card-header>
          )}

          {this.query.image && (
            <img style={this.query.imageStyle} src={this.query.image} alt="卡片图片" />
          )}

          <vd-card-content style={this.query.contentStyle}>
            {this.query.title && (
              <vd-card-title style={this.query.titleStyle}>
                {this.query.title}
              </vd-card-title>
            )}

            {this.query.summary && (
              <vd-card-summary style={this.query.summaryStyle}>
                {this.query.summary}
              </vd-card-summary>
            )}

            {this.query.content && <div domPropsInnerHTML={this.query.content} />}
          </vd-card-content>
        </vd-card>
      ),
    };
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-machine-learn" style={this.style}>
        <div staticClass="c-machine-learn_container">
          {this.tagRenderMap[this.tag] && this.tagRenderMap[this.tag](h)}
        </div>
      </div>
    );
  }
}
