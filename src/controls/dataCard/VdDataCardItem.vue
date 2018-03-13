<template>
  <div class="vd-data-card_item">
    <div class="vd-data-card_item-label">{{label}}</div>
    <div class="vd-data-card_item-data">
      <slot name="item-data">
        <div class="vd-data-card_item-main">
          {{data}}
        </div>
        <div class="vd-data-card_item-data-sup">
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
  @Prop() label: string;
  @Prop() data: string | number;
  @Prop() dataSup: string;
}
</script>
