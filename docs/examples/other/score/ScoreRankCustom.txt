<template>
  <div>
    <vd-score-rank :value="10"
                   :max="100">
    </vd-score-rank>
    <vd-score-rank :value="20"
                   :max="200">
    </vd-score-rank>
    <vd-score-rank :value="5.3"
                   :max="10">
    </vd-score-rank>
    <vd-score-rank :value="2.65"
                   :max="5">
    </vd-score-rank>
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
export default class ScoreRankBasic extends Vue {}
