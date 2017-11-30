<template>
  <div class="home-page">
    <h1>Void-UI</h1>
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
export default class HomePage extends Vue {
  @Prop() language: string;
}
</script>
