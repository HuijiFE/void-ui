<template>
  <div class="vd-data-table"
       :class="classes">
    <!-- 表格头部 -->
    <div class="table-head">
      <div class="head-item"
           v-for="(hItem, index) in cloneHeadData"
           :key="index"
           @click="headItemClick(hItem)">
        <slot :name="`head-row-${hItem.key}`"
              :headItem="hItem">
          <span class="item-text">{{hItem.content}}</span>
        </slot>
        <div v-if="sortable && hItem.sortable"
             class="arrow-control">
          <i class="fa fa-sort-asc"
             :class="{active: hItem.vd_selfSortStatus === 1}"
             aria-hidden="true"></i>
          <i class="fa fa-sort-desc"
             :class="{active: hItem.vd_selfSortStatus === 2}"
             aria-hidden="true"></i>
        </div>
      </div>
    </div>

    <!-- 表格主体 -->
    <div class="table-body"
         :class="{striped: striped}">
      <div class="body-item"
           v-for="(row, index) in cloneBodyData"
           :key="index">
        <div class="item-content cell"
             v-for="(hItem, index) in headData"
             :key="index">
          <slot :name="useCellSlot ? `body-${row.vd_index}-${hItem.key}` : `body-row-${hItem.key}`"
                :bodyItem="row"
                :bodyCell="row[hItem.key]">
            <div v-if="hItem.formatter && typeof hItem.formatter === 'function'">
              {{hItem.formatter(row[hItem.key])}}
            </div>
            <div v-else>{{row[hItem.key]}}</div>
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
  // todo 检查headData的值和bodyData的值是否完全匹配
  @Prop({ default: () => [], type: Array })
  headData: object[];

  @Prop({ default: () => [], type: Array })
  bodyData: object[];

  @Prop({ default: true, type: Boolean })
  striped: boolean;

  @Prop({ default: false, type: Boolean })
  useCellSlot: boolean;

  @Prop({ default: true, type: Boolean })
  sortable: boolean;

  // 不改动原始值
  cloneBodyData = this.makeBodyData(this.bodyData);
  cloneHeadData = this.makeHeadData(this.headData);
  sortFunctionMap = [this.getOriginSortData, this.getAscSortData, this.getDescSortData];

  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`];
  }

  // 制作头部数据
  makeHeadData(data: object[]) {
    return data.map((el: any) => {
      el.vd_selfSortStatus = 0;
      el.sortable = el.sortable === false ? false : true;
      return el;
    });
  }

  // 他有时候会把Vd_index也循环出来，禁止枚举之后看看效果
  makeBodyData(data: object[]) {
    return data.map((el: any, index: number) => {
      // 禁止枚举
      return Object.defineProperty(el, 'vd_index', {
        value: index,
      });
    });
  }

  // 排序
  sort(rule: string, key: string): void {
    this.cloneBodyData = this.cloneBodyData.sort((a: any, b: any) => {
      // todo 判断排序值的类型
      return a[key] === b[key] ? 0 : sortMap.get(rule)(a[key], b[key]) ? -1 : 1;
    });
  }

  // 原始顺序
  getOriginSortData(): void {
    this.cloneBodyData.sort((a: any, b: any) => a.vd_index - b.vd_index);
  }
  // 升序
  getAscSortData(key: any): void {
    this.sort('asc', key);
  }
  // 降序
  getDescSortData(key: any): void {
    this.sort('desc', key);
  }

  headItemClick(item: any): void {
    if (!this.sortable || !item.sortable) return;
    let status = item.vd_selfSortStatus;
    item.vd_selfSortStatus = status === 2 ? 0 : status + 1;
    this.sortFunctionMap[item.vd_selfSortStatus](item.key);
  }
}

// todo 把绑定的key值在梳理一下
</script>
