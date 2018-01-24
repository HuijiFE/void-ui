<template>
  <table class="vd-data-table"
         :class="classes">
    <!-- 表格头部 -->
    <thead class="table-head">
      <tr>
        <th class="head-item cell head-index"
            v-if="showIndex">#</th>
        <th class="head-item cell"
            :class="handleHeadClass(hItem)"
            v-for="hItem in cloneHeadData"
            :key="hItem.key"
            @click="headItemClick(hItem)">
          <slot :name="`head-column-${hItem.key}`"
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
            :class="handleAlignClass(hItem)"
            v-for="hItem in headData"
            :key="hItem.key">
          <slot :name="useCellSlot ? `body-${row.vd_index}-${hItem.key}` : `body-column-${hItem.key}`"
                :rowItem="row"
                :headItem="hItem"
                :cellItem="row[hItem.key]">
            <div v-if="hItem.formatter && typeof hItem.formatter === 'function'"
                 class="item-content">
              {{hItem.formatter(row[hItem.key], row, hItem)}}
            </div>
            <div v-else
                 class="item-content">{{row[hItem.key]}}</div>
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
import {
  TableCell,
  TextAlign,
  TableRow,
  TableHeaderItem,
  SortEventName,
} from './VdDataTable';

@Component
export default class VdDataTable extends VdStylableControl {
  // todo 检查headData的值和bodyData的值是否完全匹配
  @Prop({ default: () => [], type: Array })
  headData: TableHeaderItem[];

  @Prop({ default: () => [], type: Array })
  bodyData: TableRow[];

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

  @Prop({ default: false, type: Boolean })
  imgNoPaddingLeft: boolean;

  // 不改动原始值
  cloneBodyData = this.makeBodyData<TableRow>(this.bodyData);
  cloneHeadData = this.makeHeadData<TableHeaderItem>(this.headData);
  // todo 把SortName 和 sortFunctionMap 关联起来，目前做的还不行
  sortFunctionMap = [this.getOriginSortData, this.getAscSortData, this.getDescSortData];
  mergeSortMap: Function[] = [];
  currentSortItem = {};

  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`];
  }

  // 制作头部数据
  makeHeadData<T extends TableHeaderItem>(data: T[]): T[] {
    return data.map((el: T) => {
      el.vd_selfSortStatus = 0;
      return el;
    });
  }

  // 制作主体数据
  makeBodyData<T extends TableRow>(data: T[]): T[] {
    return data.map((el: T, index: number) => {
      el.vd_index = index;
      return el;
    });
  }

  // 默认排序
  sort(a: TableRow, b: TableRow, key: string): number {
    if (isNaN(Number(a[key])) || isNaN(Number(b[key]))) {
      let aValue = a[key] as string;
      let bValue = b[key] as string;
      return (
        aValue.localeCompare(bValue, 'zh-Hans-CN', { sensitivity: 'accent' }) ||
        (a.vd_index as number) - (b.vd_index as number)
      );
    } else {
      return (
        (a[key] as number) - (b[key] as number) ||
        (a.vd_index as number) - (b.vd_index as number)
      );
    }
  }

  // 原始顺序
  getOriginSortData<T extends TableRow>(a: T, b: T): number {
    return (a.vd_index as number) - (b.vd_index as number);
  }

  // 升序
  getAscSortData<T extends TableRow>(a: T, b: T, key: string): number {
    return this.sort(a, b, key);
  }

  // 降序
  getDescSortData<T extends TableRow>(a: T, b: T, key: string): number {
    return this.sort(b, a, key);
  }

  headItemClick(item: TableHeaderItem): void {
    if (!this.shouldSort(item)) return;
    this.currentSortItem = item;

    let status = item.vd_selfSortStatus;
    item.vd_selfSortStatus = status === 2 ? 0 : status + 1;

    if (item.sort && Array.isArray(item.sort)) {
      let userSortMap = item.sort;
      let defaultSortMap = this.sortFunctionMap;

      this.mergeSortMap = this.mergeSortFunc<Function>(defaultSortMap, userSortMap);
    } else {
      this.mergeSortMap = this.sortFunctionMap;
    }

    this.doSort(item.key, item.vd_selfSortStatus);
    this.$emit('table-sort', item.key, SortEventName[item.vd_selfSortStatus]);
  }

  doSort(key: string, status: number) {
    this.cloneBodyData.sort((a: any, b: any) => this.mergeSortMap[status](a, b, key));
  }

  // 是否应该展示排序
  shouldSort(item: TableHeaderItem): boolean {
    return this.defaultSortable
      ? item.sortable === false ? false : true
      : item.sortable === true ? true : false;
  }

  handleHeadClass(Item: TableHeaderItem) {
    return [this.handleAlignClass(Item), { cursor: this.shouldSort(Item) }];
  }

  handleAlignClass(hItem: TableHeaderItem): string {
    let align = hItem.align;
    return align && typeof align === 'string'
      ? `align-${align}`
      : `align-${this.defaultAlign}`;
  }

  mergeSortFunc<T>(defaultMap: T[], userMap: T[]): T[] {
    return defaultMap.map(
      (func, index) => (typeof userMap[index] === 'function' ? userMap[index] : func),
    );
  }

  @Watch('currentSortItem')
  handleSortItemChange(newVal: TableHeaderItem, oldVal: TableHeaderItem) {
    if (newVal.key !== oldVal.key) {
      oldVal.vd_selfSortStatus = 0;
    }
  }
}
</script>
