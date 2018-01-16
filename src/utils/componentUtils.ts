import Vue from 'vue';

/**
 * Find the parent component by parent type
 * @param context the child instance component that need to find parent
 * @param tParent the type of parent component (constructor function)
 */
export function findParentComponent<TParent extends Vue>(
  context: Vue,
  tParent: new () => TParent,
): TParent | undefined {
  let parent = context.$parent;
  while (parent) {
    if (parent instanceof tParent) {
      return parent;
    } else {
      parent = parent.$parent;
    }
  }
}
