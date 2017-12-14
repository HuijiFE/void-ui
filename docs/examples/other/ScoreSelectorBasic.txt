<template>
  <div>
    <vd-score-selector :size="size">
    </vd-score-selector>
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
export default class ScoreSelectorBasic extends Vue {
  size = 'large';
}
</script>
