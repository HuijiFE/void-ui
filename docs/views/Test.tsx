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
import { BREAK_POINT_KEYS, MediaAlias, MediaScreen } from '@void/ui/lib/void-ui';

/**
 * View: Test
 */
@Component
export default class ViewTest extends Vue {
  private windowWidth: number = 0;

  private onResize(event?: Event): void {
    this.windowWidth = document.documentElement.clientWidth;
  }

  private mounted(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
    Object.entries(this.$vd_media.getMediaQueryLists()).forEach(([alias, mql]) => {
      console.warn(alias, mql.media);
    });
  }

  @Watch('$vd_media.screen', { deep: true })
  private onScreenChange(screen: MediaScreen): void {
    console.info(
      '$vd_media.screen changed.',
      Object.entries(screen)
        .filter(([alias, value]) => value)
        .map(([alias, value]) => alias)
        .join(', '),
    );
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="view-test" style={{ padding: '32px' }}>
        <vd-flexbox gap>
          <vd-flexbox flex="0 1 100%">
            Screen Width: {this.windowWidth}
            px
          </vd-flexbox>

          {BREAK_POINT_KEYS.map((key, index) => {
            const lt: boolean = this.$vd_media.screen[
              `lt${key.charAt(0).toUpperCase()}${key.substring(1)}` as MediaAlias
            ];
            const only: boolean = this.$vd_media.screen[key];
            const gt: boolean = this.$vd_media.screen[
              `gt${key.charAt(0).toUpperCase()}${key.substring(1)}` as MediaAlias
            ];

            return (
              <vd-flexbox flex="0 1 100%" gap>
                {index > 0 ? (
                  <vd-flexbox
                    justify="center"
                    flex="0 1 100%"
                    style={{
                      maxWidth: `${20 * index}%`,
                    }}
                  >
                    <div
                      staticClass="view-test_debug"
                      class={{ 'is-active': lt }}
                    >{`lt-${key}`}</div>
                  </vd-flexbox>
                ) : (
                  ''
                )}
                <vd-flexbox
                  justify="center"
                  flex="0 1 100%"
                  style={{
                    maxWidth: '20%',
                  }}
                >
                  <div staticClass="view-test_debug" class={{ 'is-active': only }}>
                    {key}
                  </div>
                </vd-flexbox>
                {index < BREAK_POINT_KEYS.length - 1 ? (
                  <vd-flexbox
                    justify="center"
                    flex="0 1 100%"
                    style={{
                      maxWidth: `${20 * (BREAK_POINT_KEYS.length - 1 - index)}%`,
                    }}
                  >
                    <div
                      staticClass="view-test_debug"
                      class={{ 'is-active': gt }}
                    >{`gt-${key}`}</div>
                  </vd-flexbox>
                ) : (
                  ''
                )}
              </vd-flexbox>
            );
          })}
        </vd-flexbox>
      </div>
    );
  }
}
