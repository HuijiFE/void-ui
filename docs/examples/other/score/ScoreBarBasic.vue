<template>
  <div>
    <vd-score-bar v-for="item in (max >= 10 ? 11 : max)"
                  :key="item"
                  :value="max + max /10-item * max / 10"
                  :max="max">
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

export default class ScoreBarBasic extends Vue {
  max = 10;
}
</script>
