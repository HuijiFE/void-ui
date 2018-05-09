import { PluginFunction, PluginObject } from 'vue';

export interface VoidUIPluginOption {
  locale?: string;
  theme?: controls.Theme;
}

export interface VoidUIPlugin extends PluginObject<VoidUIPluginOption> {
  readonly version?: string;
  installed: boolean;
  controls: typeof controls;
}

const VoidUI: VoidUIPlugin;

export default VoidUI;
