import Vue, { ComponentOptions } from 'vue';
import { VdForm } from '@void/ui/lib/components/form/form/form';

/**
 * Form base
 */

// tslint:disable:no-invalid-this no-any

export interface FormComponent {
  form?: VdForm;
  id?: string;
  name?: string;
  label?: string;
  model: any;
  value: any;
}

export const mixinFormComponent: ComponentOptions<Vue> = {
  beforeCreate(): void {
    let parent: Vue | undefined = this.$options.parent;
    while (parent) {
      if (parent instanceof VdForm) {
        (this as Vue & FormComponent).form = parent;
        break;
      }
      parent = parent.$options.parent;
    }
  },
};
