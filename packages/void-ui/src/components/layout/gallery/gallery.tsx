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
import { Style, ClassName, Theme, ThemeComponent } from '../../base';
import { mobius } from '../../../utils/math/index';
import { BodyDestroyer } from '../../../plugins/body-render/body-render';

let $$Vue: typeof Vue | undefined;

declare module 'vue/types/vue' {
  interface Vue {
    $vd_gallery(items: ReadonlyArray<GalleryItem>, selectedIndex: number): void;
  }
}

export interface GalleryItem {
  format?: 'image' | 'video' | 'audio';
  origin: string;
  fullscreen?: string;
  preview?: string;
  thumbnail?: string;
  label?: string;
}

/**
 * Component: Gallery
 */
@Component
export class VdGallery extends Vue implements ThemeComponent {
  // tslint:disable-next-line:function-name
  public static install($Vue: typeof Vue): void {
    if ($$Vue && $$Vue === $Vue) {
      return;
    }
    $$Vue = $Vue;

    // tslint:disable-next-line:no-unsafe-any
    Object.defineProperty($Vue.prototype, '$vd_gallery', {
      writable: false,
      value: function(
        this: Vue,
        items: ReadonlyArray<GalleryItem>,
        selectedIndex: number,
      ): void {
        VdGallery.create(this, items, selectedIndex);
      },
    });
  }

  private static create(
    parent: Vue,
    items: ReadonlyArray<GalleryItem>,
    selectedIndex: number,
  ): void {
    const gallery = new VdGallery({
      parent,
      propsData: {
        itemsSource: items,
      },
    });

    gallery.selectedIndex = selectedIndex;
    gallery.switchFullscreen();
    gallery.$once('close', () => gallery.$destroy());
  }

  @Prop(String)
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme || 'lite';
  }

  public get classes(): ClassName {
    return [`vdp-theme_${this.themeValue}`];
  }

  @Prop(String)
  public readonly label?: string;

  @Prop({ type: Array, required: true })
  public readonly itemsSource!: GalleryItem[];

  private offset: Style = { transform: null };
  private thumbnailOffset: Style = { transform: null };

  private index: number = 0;
  public get selectedIndex(): number {
    return this.index;
  }
  public set selectedIndex(value: number) {
    const index = mobius(value, this.itemsSource.length);

    this.index = index;

    this.offset.transform = `translateX(${-100 * index}%)`;

    const thumbnailIndex =
      this.itemsSource.length <= 6
        ? 0
        : this.itemsSource.length - 6 < index
        ? this.itemsSource.length - 6
        : index > 0
        ? index - 1
        : index;
    this.thumbnailOffset.transform = `translateX(${(-100 * thumbnailIndex) / 6}%)`;

    this.$emit('change', index);
  }

  private destroyBodyHandler?: BodyDestroyer;
  public switchFullscreen(): void {
    if (this.destroyBodyHandler) {
      this.destroyBodyHandler();
      this.destroyBodyHandler = undefined;
      this.$emit('close');
    } else {
      this.destroyBodyHandler = this.$vd_bodyRender(this.renderFullscreen);
      this.$emit('open');
    }
  }

  private onSelect(index: number): (event: MouseEvent) => void {
    return e => (this.selectedIndex = index);
  }
  private onSelectPrev(event: MouseEvent): void {
    this.selectedIndex--;
  }
  private onSelectNext(event: MouseEvent): void {
    this.selectedIndex++;
  }

  private beforeDestroy(): void {
    if (this.destroyBodyHandler) {
      this.destroyBodyHandler();
    }
  }

  private renderFullscreen(h: CreateElement): VNode {
    return (
      <div staticClass="vd-gallery is-fullscreen">
        <div staticClass="vd-gallery_fullscreen">
          <div staticClass="vd-gallery_container">
            <ul staticClass="vd-gallery_wrapper" style={this.offset} role="presentation">
              {this.itemsSource.map((item, index) => (
                <li
                  staticClass="vd-gallery_fullscreen-item"
                  class={{ 'is-selected': index === this.index }}
                  role="presentation"
                >
                  <button staticClass="vd-gallery_item-container">
                    <img
                      staticClass="vd-gallery_image"
                      src={item.preview || item.fullscreen || item.origin}
                      alt={item.label || `${this.label} ${index + 1}`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div staticClass="vd-gallery_indicator-wrapper">
          <ul
            staticClass="vd-gallery_wrapper"
            style={this.thumbnailOffset}
            role="presentation"
          >
            {this.itemsSource.map((item, index) => (
              <li
                staticClass="vd-gallery_thumbnail-item"
                class={{ 'is-selected': index === this.index }}
                role="presentation"
              >
                <button
                  staticClass="vd-gallery_item-container"
                  onClick={this.onSelect(index)}
                >
                  <section staticClass="vd-gallery_placement">
                    <div staticClass="vd-gallery_container">
                      <img
                        staticClass="vd-gallery_image"
                        src={
                          item.thumbnail || item.preview || item.fullscreen || item.origin
                        }
                        alt={item.label || `${this.label || 'thumbnail'} ${index + 1}`}
                      />
                    </div>
                  </section>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button staticClass="vd-gallery_close-button" onClick={this.switchFullscreen}>
          ×
        </button>
      </div>
    );
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-gallery" class={this.classes}>
        <div staticClass="vd-gallery_placement">
          <div staticClass="vd-gallery_container">
            <ul staticClass="vd-gallery_wrapper" style={this.offset} role="presentation">
              {this.itemsSource.map((item, index) => (
                <li
                  staticClass="vd-gallery_preview-item"
                  class={{ 'is-selected': index === this.index }}
                  role="presentation"
                >
                  <button
                    staticClass="vd-gallery_item-container"
                    onClick={this.switchFullscreen}
                  >
                    <img
                      staticClass="vd-gallery_image"
                      src={item.preview || item.fullscreen || item.origin}
                      alt={item.label || `${this.label} ${index + 1}`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div staticClass="vd-gallery_indicator-wrapper">
          <ul
            staticClass="vd-gallery_wrapper"
            style={this.thumbnailOffset}
            role="presentation"
          >
            {this.itemsSource.map((item, index) => (
              <li
                staticClass="vd-gallery_thumbnail-item"
                class={{ 'is-selected': index === this.index }}
                role="presentation"
              >
                <button
                  staticClass="vd-gallery_item-container"
                  onClick={this.onSelect(index)}
                >
                  <section staticClass="vd-gallery_placement">
                    <div staticClass="vd-gallery_container">
                      <img
                        staticClass="vd-gallery_image"
                        src={
                          item.thumbnail || item.preview || item.fullscreen || item.origin
                        }
                        alt={item.label || `${this.label || 'thumbnail'} ${index + 1}`}
                      />
                    </div>
                  </section>
                </button>
              </li>
            ))}
          </ul>
          <button
            staticClass="vd-gallery_switch-button is-left"
            onClick={this.onSelectPrev}
          >
            &lsaquo;
          </button>
          <button
            staticClass="vd-gallery_switch-button is-right"
            onClick={this.onSelectNext}
          >
            &rsaquo;
          </button>
        </div>
      </div>
    );
  }
}
