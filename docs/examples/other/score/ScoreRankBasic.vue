<template>
  <div>
    <vd-score-rank v-for="(item,index) in src.length"
                   :key="item"
                   :value="max + max / 10 - (index + 1) * max / 10"
                   :max="max"
                   :src="src[index]">
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
export default class ScoreRankBasic extends Vue {
  max = 10;
  src = [
    'http://cdn.steamstatic.com.8686c.com/steam/apps/578080/capsule_sm_120.jpg?t=1516298199',
    'http://cdn.steamstatic.com.8686c.com/steam/apps/477160/capsule_sm_120.jpg?t=1514896999',
    'http://cdn.steamstatic.com.8686c.com/steam/apps/271590/capsule_sm_120.jpg?t=1516043170',
    'http://cdn.steamstatic.com.8686c.com/steam/apps/577800/capsule_sm_120.jpg?t=1507660027',
    'http://cdn.steamstatic.com.8686c.com/steam/apps/646570/capsule_sm_120.jpg?t=1516317943',
    'http://cdn.steamstatic.com.8686c.com/steam/apps/744840/capsule_sm_120.jpg?t=1515444837',
    'http://cdn.steamstatic.com.8686c.com/steam/apps/376210/capsule_sm_120.jpg?t=1516565495',
    'http://cdn.steamstatic.com.8686c.com/steam/apps/447040/capsule_sm_120.jpg?t=1510566541',
    'http://cdn.steamstatic.com.8686c.com/steam/apps/617870/capsule_sm_120.jpg?t=1516638179',
    'http://cdn.steamstatic.com.8686c.com/steam/apps/359550/capsule_sm_120.jpg?t=1515516507',
    'http://cdn.steamstatic.com.8686c.com/steam/apps/678950/capsule_sm_120.jpg?t=1516297486',
  ];
}
</script>
