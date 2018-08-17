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

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="view-test">
        <div>{this.windowWidth}</div>
        <hr />
        <div>ltXs: N/A</div>
        <div>xs: {this.$vd_media.xs.toString()}</div>
        <div>gtXs: {this.$vd_media.gtXs.toString()}</div>
        <br />
        <div>ltSm: {this.$vd_media.ltSm.toString()}</div>
        <div>sm: {this.$vd_media.sm.toString()}</div>
        <div>gtSm: {this.$vd_media.gtSm.toString()}</div>
        <br />
        <div>ltMd: {this.$vd_media.ltMd.toString()}</div>
        <div>md: {this.$vd_media.md.toString()}</div>
        <div>gtMd: {this.$vd_media.gtMd.toString()}</div>
        <br />
        <div>ltLg: {this.$vd_media.ltLg.toString()}</div>
        <div>lg: {this.$vd_media.lg.toString()}</div>
        <div>gtLg: {this.$vd_media.gtLg.toString()}</div>
        <br />
        <div>ltXl: {this.$vd_media.ltXl.toString()}</div>
        <div>xl: {this.$vd_media.xl.toString()}</div>
        <div>gtXl: N/A</div>
        <hr />
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
          <div>
            <hr />
            <vd-button>test</vd-button>
            <vd-theme theme="lite">
              <vd-button>test</vd-button>
            </vd-theme>
            <vd-theme theme="dark">
              <vd-button>test</vd-button>
            </vd-theme>
            <vd-theme theme="lite">
              <vd-button>test</vd-button>
            </vd-theme>
            <vd-theme theme="dark">
              <vd-button>test</vd-button>
            </vd-theme>
          </div>
        ))}
      </div>
    );
  }
}
