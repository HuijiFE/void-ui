<template>
  <vd-data-table use-cell-slot
                 show-index
                 :body-data="scoreData"
                 :head-data="HeadData">
    <div class="highlight"
         slot="body-2-zhihu"
         slot-scope="{bodyItem, bodyCell}">高亮 {{bodyCell}}</div>
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
export default class VdTableCellProps extends Vue {
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
    let randomScore = () => Math.ceil(Math.random() * 100000);

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
<style lang="scss" scoped>
.highlight {
  color: red;
}
</style>
