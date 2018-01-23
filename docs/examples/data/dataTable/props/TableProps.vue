<template>
  <vd-data-table :body-data="scoreData"
                 :head-data="HeadData">
    <div class="self-control"
         slot="body-row-name"
         slot-scope="{bodyItem, bodyCell}">
      <img :src="doNotStarveImgSrc">
      <span>{{bodyCell}}</span>
    </div>
  </vd-data-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
export default class VdTableProps extends Vue {
  scoreData = this.getScoreData();

  doNotStarveImgSrc = 'http://www.duotegame.com/picfile/glt/2015/12/21/89-83-99-32-60.jpg';

  get HeadData() {
    return Object.keys(this.scoreData[0]).map(k => {
      return {
        // 表头显示的值
        content: k.toUpperCase(),
        // 对应的字段名
        key: k,
        align: (_ => {
          if (k === 'name') {
            return 'left';
          }
        })(),
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
