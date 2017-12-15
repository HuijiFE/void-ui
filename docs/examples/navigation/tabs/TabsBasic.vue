<template>
  <div>
    <vd-tabs>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TabsBasci extends Vue {}
</script>
