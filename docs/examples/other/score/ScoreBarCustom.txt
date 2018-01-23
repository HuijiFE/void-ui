<template>
  <div>
    <vd-score-bar :value="5.3"
                  :max="max">
    </vd-score-bar>
    <vd-score-bar :value="2.65"
                  :max="5">
    </vd-score-bar>
    <vd-score-bar :value="10"
                  :max="100">
    </vd-score-bar>
    <vd-score-bar :value="20.00"
                  :max="200">
    </vd-score-bar>
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
export default class ScoreBarCustom extends Vue {
  max = 10;
}
</script>
