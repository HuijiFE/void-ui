<template>
  <div>
    <VdScore v-for="item in 10"
             :key="item"
             :value="11-item">
    </VdScore>
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
@Component
export default class ScoreBasic extends Vue {}
</script>
