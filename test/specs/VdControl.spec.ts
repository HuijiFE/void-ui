import Vue from 'vue';
import { VdHub, VdControl, VdStylableControl } from 'src/controls/base/VdControl';

describe('VdControl.ts', () => {
  it('VdHub, verify prop genre', () => {
    const vm = new VdHub();
    expect(vm.genre).toEqual('lite');
  });

  const vm = new VdControl();
  it('VdControl, verify get prop componentName', () => {
    expect(vm.componentName).toEqual('VdControl');
  });
  it('VdControl, verify static get prop $void', () => {
    expect(vm.$void.genre).toEqual('lite');
    vm.$void.genre = 'dark';
    expect(vm.$void.genre).toEqual('dark');
  });
});
