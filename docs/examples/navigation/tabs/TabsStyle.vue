<template>
  <vd-flexbox gutter="small">
    <vd-flexbox flex="100">
      <vd-tabs :skin="skin"
               :bordered="bordered"
               :raised="raised">
        <vd-tabs-item label="Tab A">
          <div class="tabs-content">
            Content of Tab A.
          </div>
        </vd-tabs-item>
        <vd-tabs-item label="Tab B">
          <div class="tabs-content">
            Content of Tab B.
          </div>
        </vd-tabs-item>
        <vd-tabs-item label="Tab C">
          <div class="tabs-content">
            Content of Tab C.
          </div>
        </vd-tabs-item>
        <vd-tabs-item label="Tab D">
          <div class="tabs-content">
            Content of Tab D.
          </div>
        </vd-tabs-item>
        <vd-tabs-item label="Tab E">
          <div class="tabs-content">
            Content of Tab E.
          </div>
        </vd-tabs-item>
      </vd-tabs>
    </vd-flexbox>
    <vd-flexbox flex="100"
                gutter="xsmall">
      <vd-radio v-model="skin"
                tag="silk">silk</vd-radio>
      <vd-radio v-model="skin"
                tag="silk">plain</vd-radio>
      <vd-radio v-model="skin"
                tag="silk">fill</vd-radio>
    </vd-flexbox>
  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TabsStyle extends Vue {
  skin = 'silk';
  bordered = true;
  raised = false;
}
</script>
