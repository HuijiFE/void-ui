<template>
  <div>
    <vd-data-card icon="home"
                  tone="success">
      <vd-data-card-item label="拥有者"
                         data="1,384,707"
                         data-sup="+35,045">
      </vd-data-card-item>
    </vd-data-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VdDaraCardBasic extends Vue {}
</script>

