<template>
  <table class="vd-data-table"
         :class="classes">
    <!-- table-head -->
    <thead class="table-head">
      <tr class="head-tr">
        <th class="head-item cell head-index"
            v-if="showIndex">#</th>
        <th class="head-item cell"
            :class="handleHeadClass(hItem)"
            v-for="hItem in cloneHeadData"
            :key="hItem.key"
            @click="headItemClick(hItem)">
          <slot :name="`head-column-${hItem.key}`"
                :headItem="hItem"
                :headCell="hItem.content">
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
    <!-- table-body -->
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
          <slot :name="`body-column-${hItem.key}`"
                v-if="!hasSameSlot(row.vd_index, hItem.key)"
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
          <slot :name="`body-${row.vd_index}-${hItem.key}`"
                :rowItem="row"
                :headItem="hItem"
                :cellItem="row[hItem.key]">
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
  SorterFunction,
} from './VdDataTable';

@Component
export default class VdDataTable extends VdStylableControl {
  // todo Check that the value of headData exactly matches the value of bodyData
  @Prop({ default: () => [], type: Array })
  headData: TableHeaderItem[];

  @Prop({ default: () => [], type: Array })
  bodyData: TableRow[];

  @Prop({ default: true, type: Boolean })
  striped: boolean;

  @Prop({ default: true, type: Boolean })
  defaultSortable: boolean;

  @Prop({ default: false, type: Boolean })
  showIndex: boolean;

  @Prop({ default: 'right', type: String })
  defaultAlign: TextAlign;

  @Prop({ default: false, type: Boolean })
  imgNoPaddingLeft: boolean;

  cloneBodyData = this.makeBodyData<TableRow>(this.bodyData);
  cloneHeadData = this.makeHeadData<TableHeaderItem>(this.headData);
  // todo Associate SortName and sortFunctionMap
  sortFunctionMap: SorterFunction[] = [
    this.getOriginSortData,
    this.getAscSortData,
    this.getDescSortData,
  ];
  mergeSortMap: SorterFunction[] = [];
  currentSortItem = {};

  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`];
  }

  // make head data
  makeHeadData<T extends TableHeaderItem>(data: T[]): T[] {
    return data.map((el: T) => {
      el.vd_selfSortStatus = 0;
      return el;
    });
  }

  // make body data
  makeBodyData<T extends TableRow>(data: T[]): T[] {
    return data.map((el: T, index: number) => {
      el.vd_index = index;
      return el;
    });
  }

  // default sort
  sort(a: TableRow, b: TableRow, key: string): number {
    if (isNaN(Number(a[key])) || isNaN(Number(b[key]))) {
      let aValue = a[key] as string;
      let bValue = b[key] as string;
      return (
        aValue.localeCompare(bValue) || (a.vd_index as number) - (b.vd_index as number)
      );
    } else {
      return (
        (a[key] as number) - (b[key] as number) ||
        (a.vd_index as number) - (b.vd_index as number)
      );
    }
  }

  // original order
  getOriginSortData<T extends TableRow>(a: T, b: T): number {
    return (a.vd_index as number) - (b.vd_index as number);
  }

  // asc
  getAscSortData<T extends TableRow>(a: T, b: T, key: string): number {
    return this.sort(a, b, key);
  }

  // desc
  getDescSortData<T extends TableRow>(a: T, b: T, key: string): number {
    return this.sort(b, a, key);
  }

  headItemClick(item: TableHeaderItem): void {
    if (!this.shouldSort(item)) {
      return;
    }
    this.currentSortItem = item;

    let status = item.vd_selfSortStatus;
    item.vd_selfSortStatus = status === 2 ? 0 : status + 1;

    if (item.sorter && Array.isArray(item.sorter)) {
      let userSortMap = item.sorter;
      let defaultSortMap = this.sortFunctionMap;

      this.mergeSortMap = this.mergeSortFunc(defaultSortMap, userSortMap);
    } else {
      this.mergeSortMap = this.sortFunctionMap;
    }

    this.doSort(item.key, item.vd_selfSortStatus);
    this.$emit('table-sort', item.key, SortEventName[item.vd_selfSortStatus]);
  }

  doSort(key: string, status: number) {
    this.cloneBodyData.sort((a: TableRow, b: TableRow) =>
      this.mergeSortMap[status](a, b, key),
    );
  }

  // should sort
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

  mergeSortFunc<T extends SorterFunction>(defaultMap: T[], userMap: T[]): T[] {
    return defaultMap.map(
      (func, index) => (typeof userMap[index] === 'function' ? userMap[index] : func),
    );
  }

  hasSameSlot(index: number, key: string): boolean {
    return this.$scopedSlots.hasOwnProperty(`body-${index}-${key}`);
  }

  @Watch('currentSortItem')
  handleSortItemChange(newVal: TableHeaderItem, oldVal: TableHeaderItem) {
    if (newVal.key !== oldVal.key) {
      oldVal.vd_selfSortStatus = 0;
    }
  }
}
</script>
