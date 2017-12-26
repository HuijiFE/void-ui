<template>
  <div class="vd-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from 'vue-property-decorator';
import anime from 'animejs';
import VdCollapseItem from './VdCollapseItem.vue';

@Component
export default class VdCollapse extends Vue {
  selectedItem: VdCollapseItem;

  mounted() {
    this.initState();
    this.$on('item-click', this.handleItemClick);
  }

  initState() {
    let selectedItem: VdCollapseItem | null = null;

    this.$children.forEach(i => {
      let item = i as VdCollapseItem;

      if (item.expand) {
        selectedItem = item;
      }
    });
    if (!selectedItem) {
      selectedItem = this.$children[0] as VdCollapseItem;
    }
    this.selectedItem = selectedItem;
  }

  handleItemClick(newItem: VdCollapseItem) {
    const itembody = newItem.$el.querySelector('.item-body') as HTMLElement;
    if (this.selectedItem === newItem) {
      // 如果是点击的同一个组件

      // anime({
      //   targets: itembody,
      //   height: newItem.status === 'show' ? itembody.offsetHeight : 0,
      //   duration: 500,
      //   begin: () => {
      //     newItem.status = newItem.status === 'show' ? 'hidden' : 'show';
      //   },
      // });
      newItem.status = newItem.status === 'show' ? 'hidden' : 'show';
    } else {
      this.selectedItem.status = 'hidden';
      newItem.status = 'show';
      // 如果是点击的其他的组件
    }
    this.selectedItem = newItem;
  }
}
</script>


