<template>
  <div class="demo">
    <vd-score v-for="value in 10"
              :key="value"
              :value="value"></vd-score>
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
export default class DemoScore extends Vue {}
</script>

