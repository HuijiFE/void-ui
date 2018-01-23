<template>
  <vd-data-table :body-data="scoreData"
                 :head-data="HeadData"
                 :default-sortable="false"
                 default-align="center">
  </vd-data-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TableRow, TableHeaderItem, TableCell } from 'void-ui';

@Component
export default class VdDataTableBasic extends Vue {
  scoreData: TableRow[] = this.getScoreData();

  get HeadData(): TableRow[] {
    return Object.keys(this.scoreData[0]).map(k => {
      return {
        content: k.toUpperCase(),
        key: k,
        align: (() => {
          if (k === 'chinese') {
            return 'left';
          }
        })(),
        sortable: (() => {
          if (k === 'math') {
            return true;
          }
        })(),
      } as TableHeaderItem;
    });
  }

  getScoreData() {
    let names = '红橙黄绿青';
    let randomScore = () => Math.ceil(Math.random() * (100 - 60) + 60);

    let tableData = names.split('').map(v => {
      return {
        name: `小${v}`,
        math: randomScore(),
        english: randomScore(),
        chiniese: randomScore(),
        physical: randomScore(),
        biological: randomScore(),
        Chemistry: randomScore(),
      } as TableRow;
    });
    return tableData;
  }
}
</script>
