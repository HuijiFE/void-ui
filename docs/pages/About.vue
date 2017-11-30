<template>
  <div class="about">

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
export default class About extends Vue {
  @Prop() language: string;
}
</script>
