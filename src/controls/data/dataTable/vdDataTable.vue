<template>
  <div class="vd-data-table">
  <!-- 表格头部 -->
    <div class="table-head">
    <slot v-for="(hItem, index) in headData" name="item-head" :headItem="hItem">
      <div class="cell header-item">{{hItem.text}}</div>
    </slot>
    </div>

    <!-- 表格主体 -->
<div class="table-body">
    <div class="body-item" v-for="(column, index) in bodyData" :key="index">
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

@Component
export default class VdDataTable extends Vue {
  @Prop({ default: () => [], type: Array })
  headData: object[];
  // 这里需要不需要验证headData 和bodyData的关系呢？
  @Prop({ default: () => [], type: Array })
  bodyData: object[];

  mounted() {}
}
</script>
