<template>
  <div>
    <vd-tabs skin="silk"
             :bordered="false"
             :raised="true">
      <vd-tabs-item label="tab-a">
        <div class="tabs-content">
          content
        </div>
      </vd-tabs-item>
      <vd-tabs-item label="tab-b">
        <div class="tabs-content">
          content
        </div>
      </vd-tabs-item>
      <vd-tabs-item label="tab-c">
        <div class="tabs-content">
          content
        </div>
      </vd-tabs-item>
      <vd-tabs-item label="tab-d">
        <div class="tabs-content">
          content
        </div>
      </vd-tabs-item>
      <vd-tabs-item label="tab-e">
        <div class="tabs-content">
          content
        </div>
      </vd-tabs-item>
    </vd-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TabsBasci extends Vue {}
</script>
