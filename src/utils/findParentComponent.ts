import Vue from 'vue';

export default function findParentComponent<TParent extends Vue>(
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
