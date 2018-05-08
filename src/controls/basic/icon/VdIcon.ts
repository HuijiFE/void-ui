import { FunctionalComponentOptions, CreateElement, RenderContext, VNode } from 'vue';

export interface FontAwesomeIconProps {
  icon: string | string[];
  border: boolean;
  fixedWidth: boolean;
  flip: string;
  mask: string | string[];
  listItem: boolean;
  pull: string;
  pulse: boolean;
  rotation: number;
  size: string;
  spin: boolean;
  transform: string | object;
  // tslint:disable-next-line:no-reserved-keywords
  symbol: boolean | string;
}

export interface VdIconProps {
  icon: string;
  fa: string | string[] | FontAwesomeIconProps;
}

/**
 * Control Icon
 */
// tslint:disable:no-null-keyword
// tslint:disable-next-line:variable-name
const VdIcon: FunctionalComponentOptions<VdIconProps> = {
  name: 'VdIcon',
  functional: true,

  props: {
    icon: {
      type: [String],
    },
    fa: {
      type: [String, Array, Object],
    },
  },

  render(h: CreateElement, context: RenderContext<VdIconProps>): VNode {
    const { icon, fa } = context.props;

    return icon
      ? h('i')
      : fa
        ? h('font-awesome-icon', {
            class: context.data.class,
            props:
              typeof fa === 'object' && !Array.isArray(fa)
                ? fa
                : {
                    icon: fa,
                  },
          })
        : h('i');
  },
};

export default VdIcon;
