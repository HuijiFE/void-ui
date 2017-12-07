<template>
  <div>
    <!-- <DemoBoard v-for="board in 1"
               :key="board"
               :genre="board%2===1?'lite':'dark'"> -->
    <vd-radio v-for="item in 1"
              :key="item"
              :genre="item%2===1?'lite':'dark'"
              v-model="radioModelBasic"
              :disabled="disabled"
              :tag="item">选项{{item}}
    </vd-radio>
    <vd-button @click="disabled = !disabled">禁用</vd-button>
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
  radioModelBasic = 3;
  disabled = true;
}
</script>
