<template>
  <vd-data-table show-index
                 :body-data="scoreData"
                 :head-data="HeadData">
    <div class="highlight-blue"
         slot="body-column-douban"
         slot-scope="{rowItem, cellItem, headItem}">高亮 {{cellItem}}</div>
    <div class="highlight"
         slot="body-2-douban"
         slot-scope="{rowItem, cellItem, headItem}">高亮 {{cellItem}}</div>
    <div class="highlight"
         slot="body-1-zhihu"
         slot-scope="{rowItem, cellItem, headItem}">高亮 {{cellItem}}</div>
  </vd-data-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TableRow, TableHeaderItem, TableCell } from 'void-ui';

@Component
export default class TableCellProps extends Vue {
  scoreData: TableRow[] = this.getScoreData();

  get HeadData(): TableHeaderItem[] {
    return Object.keys(this.scoreData[0]).map(k => {
      return {
        content: k.toUpperCase(),
        key: k,
      } as TableHeaderItem;
    });
  }

  getScoreData() {
    let names = '赵钱孙李周';
    let randomScore = () => Math.ceil(Math.random() * 100000);

    let tableData = names.split('').map(v => {
      return {
        name: `大${v}`,
        zhihu: randomScore(),
        douban: randomScore(),
        wangyi: randomScore(),
      } as TableRow;
    });
    return tableData;
  }
}
</script>
<style lang="scss" scoped>
.highlight-blue {
  color: blue;
}

.highlight {
  color: red;
}
</style>
