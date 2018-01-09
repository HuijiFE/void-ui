<template>
  <div>
    <vd-score-square v-for="item in (max >= 10 ? 11 : max)"
                  :key="item"
                  :value="max + max /10-item * max / 10"
                  :max="max">

    </vd-score-square>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class ScoreSquareBasic extends Vue {
  max = 10;
}
</script>
