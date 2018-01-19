<template>
  <div class="vd-data-table" :class="classes">
  <!-- 表格头部 -->
    <div class="table-head">
      <div class="head-item" v-for="(hItem, index) in cloneHeadData" :key="index">
        <slot :name="`head-row-${hItem.key}`" :headItem="hItem">
            <span class="item-text" @click="getOriginSortData">{{hItem.content}}</span>
        </slot>
        <div class="arrow-control">
          <i @click.self="sort('asc', hItem.key)" class="fa fa-sort-asc" aria-hidden="true"></i>
          <i @click.self="sort('desc',hItem.key)" class="fa fa-sort-desc" aria-hidden="true"></i>
        </div>
      </div>
    </div>

    <!-- 表格主体 -->
    <div class="table-body" :class="{striped: striped}">
      <div class="body-item" v-for="(column, index) in cloneBodyData" :key="index">
        <div class="item-content cell" v-for="(hItem, index) in headData" :key="index">
          <slot :name="`body-row-${hItem.key}`" :bodyItem="column" :bodyCell="column[hItem.key]">
            <div v-if="hItem.formatter && typeof hItem.formatter === 'function'">
              {{hItem.formatter(column[hItem.key])}}
            </div>
            <div v-else >{{column[hItem.key]}}</div>
          </slot>
        </div>
      </div>
    </div>
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
import { VdStylableControl } from 'src/controls/base/VdControl';

let sortMap = new Map();
sortMap.set('asc', (a: number, b: number) => a < b);
sortMap.set('desc', (a: number, b: number) => b < a);

// interface Dict {
//   [key: string]: (a: number, b: number) => boolean;
// }
// let map: Dict = {
//   asc: (a: number, b: number) => a < b,
//   desc: (a: number, b: number) => b < a,
// };
// let test = map['rule'];

// interface TableRow {
//   [column: string]: string | number | boolean;
// }

// let aRow: TableRow = {
//   zhihu: 1,
//   douban: 2,
//   jianshu: false,
// };

@Component
export default class VdDataTable extends VdStylableControl {
  @Prop({ default: () => [], type: Array })
  headData: object[];

  // todo 检查headData的值和bodyData的值是否完全匹配

  @Prop({ default: () => [], type: Array })
  bodyData: object[];

  @Prop({ default: true, type: Boolean })
  striped: boolean;

  // 不改动原始值
  cloneBodyData = this.makeBodyData(this.bodyData);
  cloneHeadData = this.copyData(this.headData);

  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`];
  }

  copyData(data: object[]) {
    return JSON.parse(JSON.stringify(data));
  }

  makeBodyData(data: object[]) {
    return data.map((el: any, index: number) => {
      el.vd_index = index;
      return el;
    });
  }

  // 排序
  sort(rule: string, key: string) {
    this.cloneBodyData.sort((a: any, b: any) => {
      // todo 判断排序值的类型
      return a[key] === b[key] ? 0 : sortMap.get(rule)(a[key], b[key]) ? -1 : 1;
    });
  }

  getOriginSortData() {
    this.cloneBodyData.sort((a: any, b: any) => {
      return a.vd_index - b.vd_index;
    });
  }
}

// todo 把绑定的key值在梳理一下
</script>
