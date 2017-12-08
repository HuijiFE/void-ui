<template>
  <div>
    <vd-score v-for="item in 10"
              :key="item"
              :value="(max+max/10)-item*max/10"
              :max="max">
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
  max = 100;
}
</script>
