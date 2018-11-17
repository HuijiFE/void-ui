import Vue, { CreateElement, VNode, VNodeChildren } from 'vue';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import {
  ClassName,
  Theme,
  Tone,
  Size,
  ThemeComponent,
  LinkLikeComponent,
} from '../../base';

/**
 * Component: Pagination
 */
@Component
export class VdPagination extends Vue implements ThemeComponent, LinkLikeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || (this.$vd_theme && this.$vd_theme.theme) || 'lite';
  }

  @Prop({ type: String, default: 'small' })
  public readonly size!: Size;

  public get classes(): ClassName {
    return [
      `vdp-theme_${this.themeValue}`,
      `vdp-size_${this.size}`,
      {
        'is-disabled': this.disabled,
      },
    ];
  }

  /**
   * The tag for items
   */
  @Prop({ type: String, default: 'button' })
  public readonly tag!: string;
  @Prop({ type: Boolean, default: false })
  public readonly routerLink!: boolean;

  @Prop(Function)
  public readonly resolve?: (page: number) => string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop(String)
  public readonly previousLabel?: string;
  @Prop(String)
  public readonly nextLabel?: string;

  @Prop({ type: Number, required: true })
  public readonly span!: number;

  @Prop({ type: Number, required: true })
  public readonly total!: number;

  @Prop({ type: Number, default: 9 })
  public readonly limit!: number;

  @Model('change', { type: Number, required: true })
  public readonly page!: number;

  private onChange(page: number): (event: MouseEvent) => void {
    return e => this.$emit('change', page);
  }

  // tslint:disable:max-func-body-length cyclomatic-complexity
  private render(h: CreateElement): VNode {
    const span = Math.floor(this.span);
    const total = Math.ceil(this.total);
    const page = Math.floor(this.page);
    const halfLimit = Math.floor(this.limit / 2);
    const limit = halfLimit + 1;

    const first = 1;
    const last = Math.ceil(total / span);

    let start = page - halfLimit;
    let end = page + halfLimit;

    if (start < first) {
      const offset = first - start;
      start += offset;
      end += offset;
    }
    if (end > last) {
      const offset = last - end;
      start += offset;
      end += offset;
    }
    start = start < first ? first : start;
    end = end > last ? last : end;

    const serials: number[] = [];
    for (let current = start; current <= end; current++) {
      serials.push(current);
    }
    serials[0] = first;
    serials[serials.length - 1] = last;

    return (
      <nav staticClass="vd-pagination" class={this.classes}>
        <ul staticClass="vd-pagination_wrapper">
          <li staticClass="vd-pagination_item-container">
            {h(
              this.routerLink ? 'router-link' : this.tag,
              {
                staticClass: 'vd-pagination_item',
                attrs: {
                  disabled: this.page === first || this.disabled,
                  'aria-label': this.$slots.previous
                    ? undefined
                    : this.previousLabel || first,
                  href:
                    !this.routerLink && this.resolve ? this.resolve(first) : undefined,
                },
                props: {
                  tag: this.tag,
                  disabled: (this.routerLink && this.page === last) || this.disabled,
                  to: this.routerLink && this.resolve ? this.resolve(first) : undefined,
                },
                nativeOn: {
                  click: this.onChange(first),
                },
              },
              this.$slots.previous ||
                this.previousLabel || [
                  <span aria-hidden="true">&laquo;</span>,
                  <span class="sr-only">{first}</span>,
                ],
            )}
          </li>
          {serials.map(current => {
            const ariaLabel =
              (current === start + 1 && current > first + 1) ||
              (current === end - 1 && current < last - 1)
                ? current.toString()
                : undefined;

            return (
              <li key={current} staticClass="vd-pagination_item-container">
                {h(
                  this.routerLink ? 'router-link' : this.tag,
                  {
                    staticClass: 'vd-pagination_item',
                    class: {
                      'is-active': current === page,
                    },
                    attrs: {
                      disabled: current === page || this.disabled,
                      'aria-label': ariaLabel,
                      href:
                        !this.routerLink && this.resolve
                          ? this.resolve(current)
                          : undefined,
                    },
                    props: {
                      tag: this.tag,
                      disabled: (this.routerLink && this.page === last) || this.disabled,
                      to:
                        this.routerLink && this.resolve
                          ? this.resolve(current)
                          : undefined,
                    },
                    nativeOn: {
                      click: this.onChange(current),
                    },
                  },
                  ariaLabel
                    ? [
                        <span aria-hidden="true">...</span>,
                        <span staticClass="sr-only">{ariaLabel}</span>,
                      ]
                    : current.toString(),
                )}
              </li>
            );
          })}
          <li staticClass="vd-pagination_item-container">
            {h(
              this.routerLink ? 'router-link' : this.tag,
              {
                staticClass: 'vd-pagination_item',
                attrs: {
                  disabled: this.page === last || this.disabled,
                  'aria-label': this.$slots.next ? undefined : this.nextLabel || last,
                  href: !this.routerLink && this.resolve ? this.resolve(last) : undefined,
                },
                props: {
                  tag: this.tag,
                  disabled: (this.routerLink && this.page === last) || this.disabled,
                  to: this.routerLink && this.resolve ? this.resolve(last) : undefined,
                },
                nativeOn: {
                  click: this.onChange(last),
                },
              },
              this.$slots.next ||
                this.nextLabel || [
                  <span aria-hidden="true">&raquo;</span>,
                  <span class="sr-only">{last}</span>,
                ],
            )}
          </li>
        </ul>
      </nav>
    );
  }
}
