<template>
  <div class="vd-definition_item">
    <span class="vd-definition_label">{{label}}</span>
    <span class="vd-definition_content">
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
