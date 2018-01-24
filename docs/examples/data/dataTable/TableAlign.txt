<template>
  <vd-data-table :body-data="scoreData"
                 :head-data="HeadData">
  </vd-data-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TableRow, TableHeaderItem, TableCell } from 'void-ui';

@Component
export default class TableAlign extends Vue {
  scoreData: TableRow[] = this.getScoreData();

  get HeadData() {
    return Object.keys(this.scoreData[0]).map(k => {
      return {
        content: k.toUpperCase(),
        key: k,
        align: (() => {
          switch (k) {
            case 'name':
              return 'left';
            case 'english':
              return 'right';
            default:
              return 'center';
          }
        })(),
        sortable: (() => (k === 'math' || k === 'english' ? true : false))(),
        sort: (() => {
          if (k === 'math') {
            return [
              function normal(a: TableRow, b: TableRow, key: string) {
                return (a[key] as number) - (b.math as number);
              },
              false,
              function desc(a: TableRow, b: TableRow, key: string) {
                return (a.math as number) * 2 - (b.math as number);
              },
            ];
          }
        })(),
      } as TableHeaderItem;
    });
  }

  getScoreData() {
    let names = '红橙黄绿';
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
