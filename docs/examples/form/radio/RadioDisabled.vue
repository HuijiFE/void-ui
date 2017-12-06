<template>
   <div>
    <!-- <DemoBoard v-for="board in 1"
               :key="board"
               :genre="board%2===1?'lite':'dark'"> -->
      <p @click="disabled=!disabled" class="disableButton">禁用</p>
      <VdRadio v-for="item in 1"
               :key="item"
               :genre="item%2===1?'lite':'dark'"
               v-model="radioModelBasic"
               :disabled="disabled"
               :tag="item">选项{{item}}

      </VdRadio>
    <!-- </DemoBoard> -->
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
export default class RadioBasic extends Vue {
  @Provide() radioModelBasic = 3;
  @Provide() disabled=true;
}
</script>
<style>
.disableButton{
  cursor:pointer;
}
</style>
