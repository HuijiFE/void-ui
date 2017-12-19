import Vue from 'vue';
import { VdHub, VdControl, VdStylableControl } from 'src/controls/base/VdControl';

describe('VdControl.ts', () => {
  it('VdHub, verify prop theme', () => {
    const vm = new VdHub();
    expect(vm.theme).toEqual('lite');
  });

  const vm = new VdControl();
  it('VdControl, verify get prop componentName', () => {
    expect(vm.componentName).toEqual('VdControl');
  });
  it('VdControl, verify static get prop $void', () => {
    expect(vm.$void.theme).toEqual('lite');
    vm.$void.theme = 'dark';
    expect(vm.$void.theme).toEqual('dark');
  });
});
