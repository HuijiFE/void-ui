import { ControlTone } from '../base/VdControl';
export interface Params {
  label?: string;
  preset: ControlTone;
  description: string;
  autoClose: boolean;
}
