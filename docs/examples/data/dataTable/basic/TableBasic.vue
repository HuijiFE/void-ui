<template>
  <div>
    <vd-data-table :body-data="scoreData"
                   :head-data="HeadData">
    </vd-data-table>
  </div>
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

@Component
export default class VdDataTableBasic extends Vue {
  scoreData = this.getScoreData();

  get HeadData() {
    return Object.keys(this.scoreData[0]).map(k => {
      return {
        // 表头显示的值
        content: k.toUpperCase(),
        // 对应的字段名
        key: k,
        /**
         * 格式化表格数据
         * @augments cell 单元格数据
         */
        formatter(cell: any) {
          return cell;
        },
        sortable: false,
      };
    });
  }

  getScoreData() {
    let names = '红橙黄绿青蓝紫黑白灰';
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
      };
    });
    return tableData;
  }
}
</script>
