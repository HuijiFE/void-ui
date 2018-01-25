<template>
  <div class="definition-item">
    <span class="definition-label">{{label}}</span>
    <span v-if="$slots.default"
          class="definition-content">
      <slot></slot>
    </span>
    <span v-else
          class="definition-content"
          v-html="content"></span>
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
  @Prop({ type: String })
  label: string;

  @Prop({ type: String })
  content: string;
}
</script>
