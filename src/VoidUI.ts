// tslint:disable-next-line:no-import-side-effect
// import '@void/void.scss';

import { PluginFunction, PluginObject } from 'vue';

export * from '@void/controls';
import * as controls from '@void/controls';
import { inherits } from 'util';

export interface VoidPluginOption {
  locale?: string;
}

export interface VoidUIPlugin extends PluginObject<VoidPluginOption> {
  readonly version?: string;
  installed: boolean;
}

/**
 * Void-UI
 */
// tslint:disable:variable-name
const VoidUI: VoidUIPlugin = {
  version: process.env.VOID_VERSION,
  installed: false,
  install: (Vue, options = {}) => {
    if (VoidUI.installed) {
      return;
    }
    VoidUI.installed = true;

    Object.entries(controls).forEach(([name, ctrl]) => Vue.component(name, ctrl));
  },
  controls,
};

// tslint:disable:no-any
if (window !== undefined && (<any>window).Vue) {
  VoidUI.install((<any>window).Vue);
}

export default VoidUI;
