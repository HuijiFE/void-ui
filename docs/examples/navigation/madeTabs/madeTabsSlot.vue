<template>
  <div>
    <vd-made-tabs v-model="activeTab"
                  tabHeadPosition="left">
      <vd-made-tabs-item label="Tab A"
                         name="aaa">
        <span class="slot"
              slot="label">系列热销</span>
        <div class="tabs-content">
          系列热销商品
        </div>
      </vd-made-tabs-item>
      <vd-made-tabs-item label="Tab B"
                         name="bbb">
        <span class="slot"
              slot="label">折扣推荐</span>
        <div class="tabs-content">
          折扣推荐商品.
        </div>
      </vd-made-tabs-item>
      <vd-made-tabs-item label="Tab C"
                         name="ccc">
        <span class="slot"
              slot="label">随便什么</span>
        <div class="tabs-content">
          随便什么商品.
        </div>
      </vd-made-tabs-item>
    </vd-made-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MadeTabsBasic extends Vue {
  activeTab = 'aaa';
}
</script>
<style scoped>
.slot {
  display: block;
  font-size: 0.24rem;
  width: 1.62rem;
  height: 0.64rem;
  line-height: 0.64rem;
  padding-left: 0.16rem;
}
</style>
