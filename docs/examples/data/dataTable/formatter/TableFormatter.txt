<template>
  <vd-data-table :body-data="scoreData"
                 :head-data="HeadData">
    <div slot="body-row-zhihu"
         slot-scope="{bodyItem, bodyCell, headItem}"> {{bodyCell | minute2hour}}</div>
    <div slot="body-row-wangyi"
         slot-scope="{bodyItem, bodyCell, headItem}"> {{bodyCell | toCurrency('￥')}}</div>
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
export default class VdTableFormatter extends Vue {
  scoreData = this.getScoreData();

  get HeadData() {
    return Object.keys(this.scoreData[0]).map(k => {
      return {
        // 表头显示的值
        content: k.toUpperCase(),
        // 对应的字段名
        key: k,
        formatter(cell: any, bodyItem: any, headItem: any) {
          if (k === 'douban') {
            return `${cell}€`;
          } else {
            return cell;
          }
        },
      };
    });
  }

  getScoreData() {
    let names = '赵钱孙李';
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
