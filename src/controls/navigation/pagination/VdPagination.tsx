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
import { integerValidator } from '@void/utils/validators';

/**
 * Control Pagination
 */
// tslint:disable:no-any
@Component
export class VdPagination extends VdControl {
  public get classes(): ClassName {
    return [
      'vd-pagination',
      `vdp-theme_${this.$theme}`,
      `vdp-skin_${this.skin}`,
      `vdp-size_${this.size}`,
      {
        [`vda-raise_${this.raise}`]: this.raise,
        'is-bordered': this.bordered,
      },
    ];
  }

  @Prop({ type: Number, default: 1, validator: integerValidator })
  public readonly start!: number;

  @Prop({ type: Number, required: true, validator: integerValidator })
  public readonly end!: number;

  @Prop({ type: Number, default: 3, validator: integerValidator })
  public readonly step!: number;

  @Model('change', { required: true, validator: integerValidator })
  public readonly selectedIndex!: number;

  public get section(): number[] {
    let start: number = this.start;
    let end: number = this.end;

    if (end - start === 9) {
      if (this.selectedIndex <= 5) {
        end = 7;
      } else {
        start = 4;
      }
    } else if (end - start > 9) {
      const showFirst: boolean = this.selectedIndex - this.start > 4;
      const showLast: boolean = this.end - this.selectedIndex > 4;
      if (showFirst && showLast) {
        start = this.selectedIndex - 2;
        end = this.selectedIndex + 2;
      } else if (!showFirst && showLast) {
        end = start + 6;
      } else if (showFirst && !showLast) {
        start = end - 6;
      }
    }

    const result: number[] = [];
    for (let index: number = start; index <= end; index++) {
      result.push(index);
    }

    return result;
  }

  public get shouldShowFirst(): boolean {
    return (
      (this.end - this.start === 9 && this.selectedIndex >= 6) ||
      (this.end - this.start > 9 && this.selectedIndex - this.start > 4)
    );
  }

  public get shouldShowLast(): boolean {
    return (
      (this.end - this.start === 9 && this.selectedIndex <= 5) ||
      (this.end - this.start > 9 && this.end - this.selectedIndex > 4)
    );
  }

  public select(index: number): void {
    const correctedIndex: number =
      index < this.start ? this.start : index > this.end ? this.end : index;
    if (correctedIndex !== this.selectedIndex) {
      this.$emit('change', correctedIndex);
    }
  }

  private onItemClick(index: number): () => void {
    return () => this.select(index);
  }

  public selectFirst(): void {
    this.select(this.start);
  }

  public selectLast(): void {
    this.select(this.end);
  }

  public selectPrevious(): void {
    this.select(this.selectedIndex - 1);
  }

  public selectPreviousMore(): void {
    this.select(this.selectedIndex - this.step);
  }

  public selectNext(): void {
    this.select(this.selectedIndex + 1);
  }

  public selectNextMore(): void {
    this.select(this.selectedIndex + this.step);
  }

  private render(h: CreateElement): VNode {
    return (
      <nav class={this.classes}>
        <button
          class="vd-pagination_item vd-pagination_indicator-previous"
          onClick={this.selectPrevious}
        >
          &laquo;
        </button>
        {this.shouldShowFirst && [
          <button class="vd-pagination_item" onClick={this.selectFirst}>
            {this.start}
          </button>,
          <button
            class="vd-pagination_item vd-pagination_ellipsis"
            onClick={this.selectPreviousMore}
          >
            ...
          </button>,
        ]}
        {this.section.map(index => (
          <button
            class={[
              'vd-pagination_item',
              {
                'is-selected': this.selectedIndex === index,
              },
            ]}
            onClick={this.onItemClick(index)}
          >
            {index}
          </button>
        ))}
        {this.shouldShowLast && [
          <button
            class="vd-pagination_item vd-pagination_ellipsis"
            onClick={this.selectNextMore}
          >
            ...
          </button>,
          <button class="vd-pagination_item" onClick={this.selectLast}>
            {this.end}
          </button>,
        ]}
        <button
          class="vd-pagination_item vd-pagination_indicator-next"
          onClick={this.selectNext}
        >
          &raquo;
        </button>
      </nav>
    );
  }
}
