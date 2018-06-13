import {
  Vue,
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
import { VdControl } from '@void/controls/base/VdControl';

export interface GalleryItem {
  format: 'image' | 'video';
  thumb: string;
  source: string;
  alt?: string;
}

/**
 * Control Gallery
 */
@Component
export class VdGallery extends VdControl {
  public get classes(): ClassName {
    return ['vd-gallery', `vda-raise_${this.raise}`];
  }

  @Prop({ type: Array, required: true })
  public readonly itemsSource!: GalleryItem[];

  @Watch('itemsSource')
  private onItemsSourceChange(value: GalleryItem[]): void {
    this.selectedItem = value[0];
  }

  // tslint:disable-next-line:no-any no-null-keyword
  public selectedItem: GalleryItem = null as any;

  public select(item: GalleryItem): (event: MouseEvent) => void {
    return (event: MouseEvent) => (this.selectedItem = item);
  }

  private beforeMount(): void {
    this.selectedItem = this.itemsSource[0];
  }

  private render(h: CreateElement): VNode {
    return (
      <div class={this.classes}>
        <div class="vd-gallery_body">
          <div class="vd-gallery_selected-container">
            <img
              class="vd-gallery_selected"
              src={this.selectedItem ? this.selectedItem.source : ''}
              alt={
                this.selectedItem ? this.selectedItem.alt || this.selectedItem.format : ''
              }
            />
          </div>
        </div>
        <div class="vd-gallery_footer">
          <div class="vd-gallery_item-wrapper">
            {this.itemsSource.map(item => (
              <button
                class={['vd-gallery_item', { 'is-selected': item === this.selectedItem }]}
                onClick={this.select(item)}
              >
                <span class="vd-gallery_item-inner">
                  <span class="vd-gallery_item-thumbnail-container">
                    <img
                      class="vd-gallery_item-thumbnail"
                      src={item.thumb}
                      alt={item.alt || item.format}
                    />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
