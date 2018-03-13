<template>
  <vd-flexbox>
    <vd-avatar :src="src"
               size="small"></vd-avatar>
    <vd-avatar :src="src"
               size="medium"></vd-avatar>
    <vd-avatar :src="src"
               size="large"></vd-avatar>
  </vd-flexbox>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class VdAvatarBasic extends Vue {
  src = 'http://www.qqzhi.com/uploadpic/2014-08-31/072639668.jpg';
}
</script>
