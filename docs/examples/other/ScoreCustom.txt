<template>
  <div>
    <vd-score :value="5.3"
              :max="max">
    </vd-score>
    <vd-score :value="2.65"
              :max="5">
    </vd-score>
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
export default class ScoreBasic extends Vue {
  max = 10;
}
</script>
