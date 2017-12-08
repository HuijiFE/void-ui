import Vue from 'vue';
import VdButton from 'src/controls/button/VdButton.vue';

describe('VdButton.vue', () => {
  it('create', () => {
    const Constructor = Vue.extend(VdButton);
    const vm = new Constructor().$mount();
    expect(vm.$el.classList.contains('vd-button')).toEqual(true);
  });
});
