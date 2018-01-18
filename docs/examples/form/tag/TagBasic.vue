<template>
  <vd-flexbox gutter="auto">
    <vd-flexbox flex="100">

      <vd-tag-wrapper>
        <vd-tag :skin="skin"
                size="small">标签一</vd-tag>
        <vd-tag :skin="skin"
                size="medium">标签二</vd-tag>
        <vd-tag :skin="skin"
                size="large">标签三</vd-tag>
      </vd-tag-wrapper>

    </vd-flexbox>
    <vd-flexbox flex="100">

      <vd-radio-group radio-type="button"
                      v-model="skin">
        <vd-radio value="fill">fill</vd-radio>
        <vd-radio value="flat">flat</vd-radio>
        <vd-radio value="plain">plain</vd-radio>
        <vd-radio value="silk">silk</vd-radio>
      </vd-radio-group>

    </vd-flexbox>
  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ControlSkin } from 'void-ui';

@Component
export default class TagBasic extends Vue {
  skin: ControlSkin = 'silk';
}
</script>
