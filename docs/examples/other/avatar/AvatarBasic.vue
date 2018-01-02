<template>
  <vd-flexbox>
    <vd-avatar :src ="src" label="Tony" description="人物介绍"></vd-avatar>
    <vd-avatar :src ="src" label="Tony" description="人物介绍"></vd-avatar>
    <vd-avatar :src ="src" label="Tony" description="人物介绍"></vd-avatar>
    <vd-avatar :src ="src" label="Tony" description="人物介绍"></vd-avatar>
  </vd-flexbox>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class VdAvatarBasic extends Vue {
  src = 'http://imgs7.iaweg.com/pic/HTTP2ltZzAwMS5nbG9iYWxidXkuY2MvMjAxNjAxLzAxLzA5MDcwODcxMTAuanBn.jpg';
}
</script>
