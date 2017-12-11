<template>
  <span class="color-cube">
    <div class="cube"
         :style="{backgroundColor: color}"></div>
    <div class="content">{{color}}</div>
  </span>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';

@Component
export default class ColorCube extends Vue {
  @Prop() color: string;
}
</script>
