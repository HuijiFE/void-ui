import Vue from 'vue';
export function findParentComponent<T extends Vue>(
  context: Vue,
  componentName: string | string[],
): T | undefined {
  let componentNames: string[] = [];
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else if (Array.isArray(componentName)) {
    componentNames = componentName;
  }

  let parent = context.$parent;
  while (parent) {
    if (!componentNames.includes(parent.$options.name as string)) {
      parent = parent.$parent;
    } else {
      return parent as T;
    }
  }
}
