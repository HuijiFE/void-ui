<template>
  <div>
    <vd-data-table :body-data="scoreData"
                   :head-data="HeadData">
    </vd-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TableRow, TableHeaderItem, TableCell } from 'void-ui';

@Component
export default class VdDataTableAlign extends Vue {
  scoreData: TableRow[] = this.getScoreData();

  get HeadData() {
    return Object.keys(this.scoreData[0]).map(k => {
      return {
        content: k.toUpperCase(),
        key: k,
        formatter(cell: any) {
          return cell;
        },
        sortable: (() => (k === 'math' ? true : false))(),
        align: (() => {
          if (k === 'name') {
            return 'left';
          } else if (k === 'english') {
            return 'center';
          }
          return 'right';
        })(),
        sort: (() => {
          if (k === 'math') {
            return [
              false,
              function a(a: TableRow, b: TableRow, key: string) {
                return (a[key] as number) - (b.math as number);
              },
              function c(a: TableRow, b: TableRow, key: string) {
                return (a.math as number) * 2 - (b.math as number);
              },
            ];
          }
          return;
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
