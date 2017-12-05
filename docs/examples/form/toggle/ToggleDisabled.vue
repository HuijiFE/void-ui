<template>
  <div>
    <div class="tempButton"
         @click="disabled=!disabled">禁用</div>
    <VdToggle v-model="toggle"
              :disabled="disabled"></VdToggle>
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
export default class ToggleBasic extends Vue {
  toggle = true;
  disabled = true;
}
</script>
<style lang="scss">
.tempButton {
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
}
</style>
