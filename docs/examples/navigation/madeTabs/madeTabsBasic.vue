<template>
  <div>
    <vd-made-tabs>
      <vd-made-tabs-item label="Tab A">
        <div class="tabs-content">
          Content of Tab A.
        </div>
      </vd-made-tabs-item>
      <vd-made-tabs-item label="Tab B">
        <span slot="label">这是一个slot</span>
        <div class="tabs-content">
          Content of Tab B.
        </div>
      </vd-made-tabs-item>
    </vd-made-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MadeTabsBasic extends Vue {}
</script>
