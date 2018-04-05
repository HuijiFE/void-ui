// tslint:disable-next-line:no-import-side-effect
import '@void/void.scss';

import { PluginFunction, PluginObject } from 'vue';

export * from '@void/controls';
import * as controls from '@void/controls';

export interface VoidPluginOption {
  locale?: string;
}

/**
 * Void-UI
 */
// tslint:disable:variable-name
const VoidUI: PluginObject<VoidPluginOption> = {
  version: process.env.VOID_VERSION,
  install: (Vue, options = {}) => {
    Object.entries(controls).forEach(([name, ctrl]) => Vue.component(name, ctrl));
  },
  controls,
};

export default VoidUI;
