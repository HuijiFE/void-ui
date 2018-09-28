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
 * Component: Example
 */
@Component
export default class Example extends Vue {
  private itemsSource: { src: string; alt: string }[] = [
    {
      src: 'https://cdn.steamstatic.com.8686c.com/steam/apps/838350/header.jpg',
      alt: '太吾绘卷',
    },
    {
      src: 'https://cdn.steamstatic.com.8686c.com/steam/apps/578080/header.jpg',
      alt: '绝地求生：大逃杀',
    },
    {
      src: 'https://cdn.steamstatic.com.8686c.com/steam/apps/601150/header.jpg',
      alt: 'Devil May Cry 5',
    },
    {
      src: 'https://cdn.steamstatic.com.8686c.com/steam/apps/841370/header.jpg',
      alt: 'NBA 2K19',
    },
    {
      src: 'https://cdn.steamstatic.com.8686c.com/steam/apps/524220/header.jpg',
      alt: '尼尔：机械纪元',
    },
  ];

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="e-uniform-scale-basic">
        <vd-flexbox gap>
          <vd-flexbox flex={100} gap>
            {this.itemsSource.map(item => (
              <vd-flexbox>
                <vd-uniform-scale>
                  <img
                    staticClass="e-uniform-scale-basic_cover"
                    src={item.src}
                    alt={item.alt}
                  />
                </vd-uniform-scale>
              </vd-flexbox>
            ))}
          </vd-flexbox>

          <vd-flexbox flex={100} gap>
            {this.itemsSource.map(item => (
              <vd-flexbox>
                <vd-uniform-scale ratio={215 / 460}>
                  <img
                    staticClass="e-uniform-scale-basic_cover"
                    src={item.src}
                    alt={item.alt}
                  />
                </vd-uniform-scale>
              </vd-flexbox>
            ))}
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
