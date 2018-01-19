<template>
  <div class="vd-data-table">
  <!-- 表格头部 -->
    <div class="table-head">
    <slot v-for="(hItem, index) in cloneHeadData" name="item-head" :headItem="hItem">
      <div class="cell head-item">
        <span @click="getOriginSortData">{{hItem.text}}</span>
        <div class="arrow-control">
          <span @click="sort('asc', hItem.value)"><i class="fa fa-caret-up" aria-hidden="true"></i></span>
          <span @click="sort('desc',hItem.value)"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
        </div>
      </div>
    </slot>
    </div>

    <!-- 表格主体 -->
<div class="table-body">
    <div class="body-item" v-for="(column, index) in cloneBodyData" :key="index">
  <slot v-for="(hItem, index) in headData" name="item-body" :bodyItem="column" >
    <div class="cell body-item">{{column[hItem.value]}}</div>
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

let copy = (obj: any) => {
  return obj.map(<T extends any>(el: T, index: number) => {
    el.vd_index = index;
    return el;
  });
};

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

  // 这么 clone 行吗？ 应该用get属性比较好
  cloneBodyData = copy(this.bodyData);
  cloneHeadData = copy(this.headData);

  // 排序
  sort(rule: string, value: string) {
    this.cloneBodyData.sort(<T extends any>(a: T, b: T) => {
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
