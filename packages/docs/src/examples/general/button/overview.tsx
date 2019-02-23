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
import { TONE_KEYS, SKIN_KEYS, SHAPE_KEYS, SIZE_KEYS } from 'void-ui';

/**
 * Component: Example
 */
@Component
export default class Example extends Vue {
  private show: boolean = false;

  private isGroup: boolean = true;
  private gap: boolean = false;

  private render(h: CreateElement): VNode {
    return (
      <div class="e-button-overview">
        {this.show ? (
          <vd-flexbox direction="column" align="stretch" gap>
            <vd-flexbox gap>
              <vd-flexbox flex="none">
                <vd-switch
                  v-model={this.isGroup}
                  true-label="group on"
                  false-label="group off"
                />
              </vd-flexbox>

              <vd-flexbox flex="none">
                <vd-switch v-model={this.gap} true-label="gap on" false-label="gap off" />
              </vd-flexbox>
            </vd-flexbox>
            {SIZE_KEYS.map(size =>
              TONE_KEYS.map(tone =>
                SHAPE_KEYS.map(shape => (
                  <vd-flexbox direction="column" align="stretch" gap>
                    <vd-flexbox>
                      <div>{`size="${size}" tone="${tone}" shape="${shape}"`}</div>
                    </vd-flexbox>
                    <vd-flexbox gap>
                      {SKIN_KEYS.map(skin =>
                        this.isGroup ? (
                          <vd-flexbox flex={100}>
                            <vd-button-group
                              tone={tone}
                              skin={skin}
                              shape={shape}
                              size={size}
                              gap={this.gap}
                            >
                              {shape === 'square' || shape === 'circle'
                                ? [
                                    <vd-button>1</vd-button>,
                                    <vd-button>2</vd-button>,
                                    <vd-button>3</vd-button>,
                                    <vd-button>4</vd-button>,
                                    <vd-button disabled>X</vd-button>,
                                  ]
                                : [
                                    <vd-button>button</vd-button>,
                                    <vd-button>button 1</vd-button>,
                                    <vd-button>button 2</vd-button>,
                                    <vd-button>group item</vd-button>,
                                    <vd-button disabled>disabled</vd-button>,
                                  ]}
                            </vd-button-group>
                          </vd-flexbox>
                        ) : (
                          <vd-flexbox flex="none">
                            <vd-button tone={tone} skin={skin} shape={shape} size={size}>
                              {shape === 'square' || shape === 'circle'
                                ? skin.substring(0, 1)
                                : skin}
                            </vd-button>
                          </vd-flexbox>
                        ),
                      )}
                    </vd-flexbox>
                  </vd-flexbox>
                )),
              ),
            )}
          </vd-flexbox>
        ) : (
          <vd-flexbox justify="center">
            <vd-button onClick={() => (this.show = true)}>show</vd-button>
          </vd-flexbox>
        )}
      </div>
    );
  }
}
