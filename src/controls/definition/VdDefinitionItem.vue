<template>
  <div class="definition-item">
    <span class="definition-label">{{label}}</span>
    <span class="definition-content">
      <slot></slot>
    </span>
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
export default class VdDefinitionItem extends Vue {
  @Prop() label: string;
}
</script>
