<template>
  <vd-data-table :body-data="scoreData"
                 :head-data="HeadData">
    <div slot="body-column-zhihu"
         slot-scope="{rowItem, cellItem, headItem}"> {{cellItem | minute2hour}}</div>
    <div slot="body-column-wangyi"
         slot-scope="{rowItem, cellItem, headItem}"> {{cellItem | toCurrency('￥')}}</div>
  </vd-data-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TableRow, TableHeaderItem, TableCell } from 'void-ui';
export default class VdTableFormatter extends Vue {
  scoreData: TableRow[] = this.getScoreData();

  get HeadData(): TableHeaderItem[] {
    return Object.keys(this.scoreData[0]).map(k => {
      return {
        content: k.toUpperCase(),
        key: k,
        formatter: (() => {
          if (k === 'douban') {
            return (cell: TableCell, row: TableRow, head: TableHeaderItem) => `${cell}€`;
          }
        })(),
      } as TableHeaderItem;
    });
  }

  getScoreData() {
    let names = '赵钱孙李';
    let randomScore = () => Math.ceil(Math.random() * 1000000);

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
