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
import VoidUI, {
  Theme,
  Tone,
  Skin,
  Shape,
  Size,
  THEME_KEYS,
  TONE_KEYS,
  SKIN_KEYS,
  SHAPE_KEYS,
  SIZE_KEYS,
} from '@void/ui/lib/void-ui';

/**
 * Component: Example
 */
@Component
export class Example extends Vue {
  public theme: Theme = 'lite';
  public tone: Tone = 'primary';
  public skin: Skin = 'fill';
  public shape: Shape = 'rect';
  public size: Size = 'medium';
  public disabled: boolean = false;

  // tslint:disable-next-line:max-func-body-length
  private render(h: CreateElement): VNode {
    return (
      <vd-flexbox staticClass="doc-example" class={`vda-theme_${this.theme}`} gap>
        <vd-flexbox flex="0 1 100%">
          <vd-flexbox gap>
            <vd-flexbox justify="center">
              <vd-button
                theme={this.theme}
                tone={this.tone}
                skin={this.skin}
                shape={this.shape}
                size={this.size}
                disabled={this.disabled}
              >
                {this.shape === 'circle' || this.shape === 'square' ? 'B' : 'Button'}
              </vd-button>
            </vd-flexbox>
            <vd-flexbox justify="center">
              <vd-button
                theme={this.theme}
                tone={this.tone}
                skin={this.skin}
                shape={this.shape}
                size={this.size}
                disabled={this.disabled}
              >
                {this.shape === 'circle' || this.shape === 'square' ? '按' : '按钮'}
              </vd-button>
            </vd-flexbox>
          </vd-flexbox>
        </vd-flexbox>
        <vd-flexbox flex="0 1 100%">
          <vd-flexbox direction="column" gap>
            {THEME_KEYS.map(value => (
              <vd-flexbox>
                <label>
                  <input
                    type="radio"
                    name="theme"
                    value={value}
                    checked={this.theme === value}
                    onChange={() => (this.theme = value)}
                    role="radio"
                    aria-checked={this.theme === value}
                  />
                  {value}
                </label>
              </vd-flexbox>
            ))}
          </vd-flexbox>
          <vd-flexbox direction="column" gap>
            {TONE_KEYS.map(value => (
              <vd-flexbox>
                <label>
                  <input
                    type="radio"
                    name="tone"
                    value={value}
                    checked={this.tone === value}
                    onChange={() => (this.tone = value)}
                    role="radio"
                    aria-checked={this.tone === value}
                  />
                  {value}
                </label>
              </vd-flexbox>
            ))}
          </vd-flexbox>
          <vd-flexbox direction="column" gap>
            {SKIN_KEYS.map(value => (
              <vd-flexbox>
                <label>
                  <input
                    type="radio"
                    name="skin"
                    value={value}
                    checked={this.skin === value}
                    onChange={() => (this.skin = value)}
                    role="radio"
                    aria-checked={this.skin === value}
                  />
                  {value}
                </label>
              </vd-flexbox>
            ))}
          </vd-flexbox>
          <vd-flexbox direction="column" gap>
            {SHAPE_KEYS.map(value => (
              <vd-flexbox>
                <label>
                  <input
                    type="radio"
                    name="shape"
                    value={value}
                    checked={this.shape === value}
                    onChange={() => (this.shape = value)}
                    role="radio"
                    aria-checked={this.shape === value}
                  />
                  {value}
                </label>
              </vd-flexbox>
            ))}
          </vd-flexbox>
          <vd-flexbox direction="column" gap>
            {SIZE_KEYS.map(value => (
              <vd-flexbox>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value={value}
                    checked={this.size === value}
                    onChange={() => (this.size = value)}
                    role="radio"
                    aria-checked={this.size === value}
                  />
                  {value}
                </label>
              </vd-flexbox>
            ))}
          </vd-flexbox>
          <vd-flexbox direction="column" gap>
            <vd-flexbox>
              <label>
                <input
                  type="radio"
                  name="disabled"
                  value={true}
                  checked={this.disabled}
                  onChange={() => (this.disabled = true)}
                  role="radio"
                  aria-checked={this.disabled}
                />
                disabled
              </label>
            </vd-flexbox>
            <vd-flexbox>
              <label>
                <input
                  type="radio"
                  name="disabled"
                  value={false}
                  checked={!this.disabled}
                  onChange={() => (this.disabled = false)}
                  role="radio"
                  aria-checked={!this.disabled}
                />
                un-disabled
              </label>
            </vd-flexbox>
          </vd-flexbox>
        </vd-flexbox>
      </vd-flexbox>
    );
  }
}
