import Vue, { ComponentOptions } from 'vue';
import { VdForm } from './form/form';

/**
 * Form base
 */

// tslint:disable:no-invalid-this no-any

export interface FormComponent {
  readonly form?: VdForm;
  readonly model: any;
}

export const mixinFormComponent: ComponentOptions<Vue> = {
  beforeCreate(): void {
    let parent: Vue | undefined = this.$options.parent;
    while (parent) {
      if (parent instanceof VdForm) {
        (this as any).form = parent;
        break;
      }
      parent = parent.$options.parent;
    }
  },
};
