<template>
  <table class="vd-data-table"
         :class="classes">
    <!-- 表格头部 -->
    <thead class="table-head">
      <tr>
        <th class="head-item cell head-index"
            v-if="showIndex">#</th>
        <th class="head-item cell"
            :class="handleClass(hItem.align)"
            v-for="hItem in cloneHeadData"
            :key="hItem.key"
            @click="headItemClick(hItem)">
          <slot :name="`head-row-${hItem.key}`"
                :headItem="hItem">
            <div class="item-text">{{hItem.content}}</div>
          </slot>

          <div v-if="shouldSort(hItem)"
               class="arrow-control">
            <i class="fa fa-sort-asc"
               :class="{active: hItem.vd_selfSortStatus === 1}"
               aria-hidden="true"></i>
            <i class="fa fa-sort-desc"
               :class="{active: hItem.vd_selfSortStatus === 2}"
               aria-hidden="true"></i>
          </div>
        </th>
      </tr>
    </thead>
    <!-- 表格主体 -->
    <tbody class="table-body"
           :class="{striped: striped}">
      <tr class="body-tr"
          :class="imgNoPaddingLeft && !showIndex ? 'img-no-padding-left' : ''"
          v-for="(row, index) in cloneBodyData"
          :key="row.vd_index">
        <td class="td-item cell body-index"
            v-if="showIndex">{{index}}</td>
        <td class="td-item cell"
            :class="handleClass(hItem.align)"
            v-for="hItem in headData"
            :key="hItem.key">
          <slot :name="useCellSlot ? `body-${row.vd_index}-${hItem.key}` : `body-row-${hItem.key}`"
                :bodyItem="row"
                :headItem="hItem"
                :bodyCell="row[hItem.key]">
            <div v-if="hItem.formatter && typeof hItem.formatter === 'function'"
                 class="item-content cell">
              {{hItem.formatter(row[hItem.key], row, hItem)}}
            </div>
            <div v-else
                 class="item-content cell">{{row[hItem.key]}}</div>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
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

// interface TableRow {
//   [column: string]: string | number | boolean;
// }

// let aRow: TableRow = {
//   zhihu: 1,
//   douban: 2,
//   jianshu: false,
// };

export type TextAlign = 'left' | 'center' | 'rigght';

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
  defaultSortable: boolean;

  @Prop({ default: false, type: Boolean })
  showIndex: boolean;

  @Prop({ default: 'right', type: String })
  defaultAlign: TextAlign;

  @Prop({ default: true, type: Boolean })
  imgNoPaddingLeft: boolean;

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
      return el;
    });
  }

  // 制作主体数据
  makeBodyData(data: object[]) {
    return data.map((el: any, index: number) => {
      // 禁止枚举
      return Object.defineProperty(el, 'vd_index', {
        value: index,
      });
    });
  }

  // 排序
  sort(a: any, b: any, key: string): void | number {
    let aValue = a[key];
    let bValue = b[key];
    if (isNaN(Number(aValue)) || isNaN(Number(bValue))) {
      return (
        aValue.localeCompare(bValue, 'zh-Hans-CN', { sensitivity: 'accent' }) ||
        a.vd_index - b.vd_index
      );
    } else {
      return aValue - bValue || a.vd_index - b.vd_index;
    }
  }

  // 原始顺序
  getOriginSortData(): void {
    this.cloneHeadData.forEach((el: any) => (el.vd_selfSortStatus = 0));
    this.cloneBodyData.sort((a: any, b: any) => a.vd_index - b.vd_index);
  }
  // 升序
  getAscSortData(key: any): void {
    let vd_this = this;
    this.cloneBodyData.sort((a: any, b: any) => this.sort.call(vd_this, a, b, key));
  }
  // 降序
  getDescSortData(key: any): void {
    let vd_this = this;
    this.cloneBodyData.sort((a: any, b: any) => this.sort.call(vd_this, b, a, key));
  }

  headItemClick(item: any): void {
    if (!this.shouldSort(item)) return;
    let status = item.vd_selfSortStatus;
    item.vd_selfSortStatus = status === 2 ? 0 : status + 1;
    this.sortFunctionMap[item.vd_selfSortStatus](item.key);
  }

  // 是否应该展示排序
  shouldSort(item: any): boolean {
    return this.defaultSortable
      ? item.sortable === false ? false : true
      : item.sortable === true ? true : false;
  }

  handleClass(align: TextAlign): string[] {
    return [
      align && typeof align === 'string'
        ? `align-${align}`
        : `align-${this.defaultAlign}`,
    ];
  }
}
</script>
