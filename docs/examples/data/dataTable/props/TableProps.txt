<template>
  <vd-data-table :body-data="scoreData"
                 :head-data="HeadData"
                 img-no-padding-left
                 @table-sort="tableSort">
    <div class="self-control"
         slot="body-column-name"
         slot-scope="{rowItem, cellItem, headItem}">
      <img :src="rowItem.imgSrc">
      <span>{{cellItem}}</span>
    </div>
  </vd-data-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TableRow, TableHeaderItem, TableCell, VdAlert } from 'void-ui';

let imgs: string[] = [
  'http://cdn.steamstatic.com.8686c.com/steam/apps/578080/capsule_sm_120.jpg?t=1516298199',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/477160/capsule_sm_120.jpg?t=1514896999',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/271590/capsule_sm_120.jpg?t=1516043170',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/646570/capsule_sm_120.jpg?t=1516317943',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/577800/capsule_sm_120.jpg?t=1507660027',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/744840/capsule_sm_120.jpg?t=1515444837',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/376210/capsule_sm_120.jpg?t=1516565495',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/678950/capsule_sm_120.jpg?t=1516297486',
];
export default class VdTableProps extends Vue {
  scoreData: TableRow[] = this.getScoreData();

  get HeadData() {
    if (this.scoreData && this.scoreData.length) {
      return Object.keys(this.scoreData[0])
        .filter(el => el !== 'imgSrc')
        .map(k => {
          return {
            // 表头显示的值
            content: k.toUpperCase(),
            // 对应的字段名
            key: k,
            align: (() => {
              if (k === 'name') {
                return 'left';
              }
            })(),
          } as TableHeaderItem;
        });
    }
  }

  getScoreData() {
    let names = '赵钱孙李周吴郑王';
    let randomScore = () => Math.ceil(Math.random() * 100000);

    let tableData = names.split('').map((v, index) => {
      return {
        name: `大${v}`,
        zhihu: randomScore(),
        douban: randomScore(),
        wangyi: randomScore(),
        imgSrc: imgs[index],
      };
    });
    return tableData as TableRow[];
  }

  tableSort() {
    let alert = new VdAlert();
    console.log('aa');
    // alert.show({
    //   preset: 'warning',
    //   label: '排序事件！',
    // });
  }
}
</script>
<style lang="scss" scoped>
.self-control {
  height: 100%;
  display: flex;
  align-items: center;

  img {
    display: block;
    margin-right: 0.1rem;
    height: 100%;
    width: 1.4rem;
  }
}
</style>
