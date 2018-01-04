<template>
  <div>
    <vd-made-tabs v-model="activeTab">
      <vd-made-tabs-item label="Tab A"
                         name="aaa">
        <div class="tabs-content">
          Content of Tab A.
        </div>
      </vd-made-tabs-item>
      <vd-made-tabs-item label="Tab B"
                         name="bbb">
        <div class="tabs-content">
          Content of Tab B.
        </div>
      </vd-made-tabs-item>
      <vd-made-tabs-item label="Tab C"
                         name="ccc">
        <div class="tabs-content">
          Content of Tab C.
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
  display: inline-block;
  height: 100%;
  background-color: gray;
}
</style>
