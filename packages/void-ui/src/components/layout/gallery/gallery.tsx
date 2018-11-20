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
  @Prop(String)
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme || 'lite';
  }

  public get classes(): ClassName {
    return [`vdp-theme_${this.themeValue}`];
  }

  @Prop({ type: String, required: true })
  public readonly label?: string;

  @Prop(Number)
  public readonly ratio!: number;

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
    this.thumbnailOffset.transform = `translateX(${-100 * thumbnailIndex}%)`;
  }

  private onSelect(index: number): (event: MouseEvent) => void {
    return e => (this.selectedIndex = index);
  }
  private onSelectPreview(event: MouseEvent): void {
    this.selectedIndex--;
  }
  private onSelectNext(event: MouseEvent): void {
    this.selectedIndex++;
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-gallery" class={this.classes}>
        <ul staticClass="vd-gallery_preview-wrapper" role="presentation">
          {this.itemsSource.map((item, index) => (
            <li
              staticClass="vd-gallery_preview-item"
              class={{ 'is-selected': index === this.index }}
              style={this.offset}
              role="presentation"
            >
              <section staticClass="vd-gallery_placement">
                <div staticClass="vd-gallery_container">
                  <img
                    staticClass="vd-gallery_image"
                    src={item.preview || item.fullscreen || item.origin}
                    alt={item.label || `${this.label} ${index + 1}`}
                  />
                </div>
              </section>
            </li>
          ))}
        </ul>
        <div staticClass="vd-gallery_thumbnail-slide">
          <button
            staticClass="vd-gallery_thumbnail-slide-button"
            onClick={this.onSelectPreview}
          >
            &lsaquo;
          </button>
          <ul staticClass="vd-gallery_thumbnail-wrapper" role="presentation">
            {this.itemsSource.map((item, index) => (
              <li
                staticClass="vd-gallery_thumbnail-item"
                class={{ 'is-selected': index === this.index }}
                style={this.thumbnailOffset}
                role="presentation"
              >
                <section staticClass="vd-gallery_placement">
                  <a
                    staticClass="vd-gallery_container"
                    onClick={this.onSelect(index)}
                    role="button"
                    aria-label={item.label || `${this.label} ${index + 1}`}
                  >
                    <img
                      staticClass="vd-gallery_image"
                      src={
                        item.thumbnail || item.preview || item.fullscreen || item.origin
                      }
                      alt={item.label || `${this.label} ${index + 1}`}
                    />
                  </a>
                </section>
              </li>
            ))}
          </ul>
          <button
            staticClass="vd-gallery_thumbnail-slide-button"
            onClick={this.onSelectNext}
          >
            &rsaquo;
          </button>
        </div>
      </div>
    );
  }
}
