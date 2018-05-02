// tslint:disable:no-import-side-effect
// tslint:disable:variable-name
// tslint:disable:no-any
// tslint:disable:no-unsafe-any
// tslint:disable:no-reserved-keywords
import 'normalize.css';
import '@void/VoidUI.scss';

import { PluginFunction, PluginObject } from 'vue';

export * from '@void/controls';
import * as controls from '@void/controls';
import { inherits } from 'util';

export interface VoidUIPluginOption {
  locale?: string;
  theme?: controls.Theme;
}

export interface VoidUIPlugin extends PluginObject<VoidUIPluginOption> {
  readonly version?: string;
  installed: boolean;
}

/**
 * Void-UI
 */
const VoidUI: VoidUIPlugin = {
  version: process.env.VOID_UI_VERSION,
  installed: false,
  install: (Vue, options = {}) => {
    if (VoidUI.installed) {
      return;
    }
    VoidUI.installed = true;

    const { locale = 'zh-CN', theme = controls.Theme.lite } = options;

    controls.VoidHub.$void.theme = theme;

    Object.defineProperty(Vue.prototype, '$void', {
      get(): controls.VoidHub {
        return controls.VoidHub.$void;
      },
    });

    Object.entries(controls).forEach(([name, ctrl]) => Vue.component(name, ctrl));
    // console.log(VoidUI.version);
  },
  controls,
};

if (window !== undefined) {
  (<any>window).Vue = VoidUI;
  if ((<any>window).Vue) {
    VoidUI.install((<any>window).Vue);
  }
}

export default VoidUI;
