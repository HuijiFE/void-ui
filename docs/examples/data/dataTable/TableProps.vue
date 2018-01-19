<template>
  <vd-data-table :body-data="scoreData" :head-data="HeadData">
  <div slot="body-row-name" slot-scope="{bodyItem, bodyCell}">自定义 {{bodyCell}}</div>
</vd-data-table>
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
export default class VdTableProps extends Vue {
  scoreData = this.getScoreData();

  get HeadData() {
    return Object.keys(this.scoreData[0]).map(k => {
      return {
        // 表头显示的值
        content: k.toUpperCase(),
        // 对应的字段名
        key: k,
      };
    });
  }

  getScoreData() {
    let names = '赵钱孙李周吴郑王';
    let randomScore = () => Math.ceil(Math.random() * 1000000);

    let tableData = names.split('').map(v => {
      return {
        name: `大${v}`,
        zhihu: randomScore(),
        douban: randomScore(),
        wangyi: randomScore(),
      };
    });
    return tableData;
  }
}
</script>
