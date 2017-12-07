<template>
  <div class="test">
    <span>{{data}}</span>
    <input type="checkbox"
           :true-value="'on'"
           :false-value="'off'"
           v-model="data" />
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
export default class Test extends Vue {
  data: string = 'on';
}
</script>
