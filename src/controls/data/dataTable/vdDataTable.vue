<template>
  <div class="vd-data-table" :class="classes">
  <!-- 表格头部 -->
    <div class="table-head">
    <slot v-for="(hItem, index) in cloneHeadData" name="item-head" :headItem="hItem">
      <div class="head-item">
        <span class="item-text" @click="getOriginSortData">{{hItem.text}}</span>
        <div class="arrow-control">
          <i @click="sort('asc', hItem.value)" class="fa fa-sort-asc" aria-hidden="true"></i>
          <i @click="sort('desc',hItem.value)" class="fa fa-sort-desc" aria-hidden="true"></i>
        </div>
      </div>
    </slot>
    </div>

    <!-- 表格主体 -->
<div class="table-body" :class="{striped: striped}">
    <div class="body-item" v-for="(column, index) in cloneBodyData" :key="index">
  <slot v-for="(hItem, index) in headData" name="item-body" :bodyItem="column" >
    <div class="cell item-content">{{column[hItem.value]}}</div>
  </slot>
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

@Component
export default class VdDataTable extends VdStylableControl {
  @Prop({ default: () => [], type: Array })
  headData: object[];
  // 这里需要不需要验证headData 和bodyData的关系呢？
  @Prop({ default: () => [], type: Array })
  bodyData: object[];

  @Prop({ default: true, type: Boolean })
  striped: boolean;

  get cloneBodyData() {
    return this.copy(this.bodyData);
  }
  get clondHeadData() {
    return this.copy(this.headData);
  }
  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`];
  }

  copy(data: object[]) {
    return data.map(<T extends any>(el: T, index: number) => {
      el.vd_index = index;
      return el;
    });
  }
  // 排序
  sort(rule: string, value: string) {
    this.cloneBodyData.sort((a: any, b: any) => {
      return a[value] === b[value] ? 0 : sortMap.get(rule)(a[value], b[value]) ? -1 : 1;
    });
  }

  getOriginSortData() {
    this.cloneBodyData.sort((a: any, b: any) => {
      return a.vd_index - b.vd_index;
    });
  }
}
</script>
