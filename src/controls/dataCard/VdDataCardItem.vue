<template>
  <div class="vd-data-card-item">
    <div class="item-label">{{label}}</div>
    <div class="item-data">
      <slot name="item-data">
        <div class="data-main">
          {{data}}
        </div>
        <div class="data-sup">
          <slot name="data-sup">{{dataSup}}</slot>
        </div>
      </slot>
    </div>
    <slot></slot>
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
export default class VdDataCardItem extends Vue {
  @Prop({ type: String })
  label: string;

  @Prop({ type: String })
  data: string | number;

  @Prop({ type: String })
  dataSup: string;
}
</script>
