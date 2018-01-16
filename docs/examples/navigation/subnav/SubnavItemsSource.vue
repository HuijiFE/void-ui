<template>
  <vd-flexbox gutter="auto">
    <vd-flexbox flex="100">
      <vd-subnav v-model="selectedItem"
                 :items-source="items"></vd-subnav>
    </vd-flexbox>
    <vd-flexbox flex="100" justify="center">
      已选择：{{selectedItem}}
    </vd-flexbox>
  </vd-flexbox>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SubnavItem } from 'void-ui';

@Component
export default class SubnavBasic extends Vue {
  selectedItem = 'two';

  items: SubnavItem[] = [
    {
      content: '标题一',
      value: 'one',
    },
    {
      content: '标题二',
      value: 'two',
    },
    {
      content: '标题三',
      value: 'three',
    },
    {
      content: '标题四',
      value: 'four',
    },
    {
      content: '标题五',
      value: 'five',
    },
  ];
}
</script>
