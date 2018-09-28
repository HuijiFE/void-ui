import { VNode } from 'vue';

/**
 * Get the first VNode that has tag.
 */
export function getFirstTagChild(children: VNode[]): VNode | undefined {
  return children && children.find(c => !!c && !!c.tag);
}

/**
 * Get the first VNode that with component.
 */
export function getFirstComponentChild(children: VNode[]): VNode | undefined {
  return children && children.find(c => !!c && !!c.componentOptions);
}
