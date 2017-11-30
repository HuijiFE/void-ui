<template>
  <div class="change-log">
    <h1>Change Log</h1>
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
export default class ChangeLog extends Vue {
  @Prop() language: string;
}
</script>
