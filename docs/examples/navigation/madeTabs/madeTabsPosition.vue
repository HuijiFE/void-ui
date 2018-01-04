<template>
  <div>
    <vd-flexbox flex="100"
                gutter="xsmall">
      <vd-radio v-model="position"
                value="top">top</vd-radio>
      <vd-radio v-model="position"
                value="bottom">bottom</vd-radio>
      <vd-radio v-model="position"
                value="left">left</vd-radio>
      <vd-radio v-model="position"
                value="right">right</vd-radio>
    </vd-flexbox>
    <vd-made-tabs v-model="activeTab"
                  :tabHeadPosition="position">
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
  position = 'left';
}
</script>
