<template>
  <div class="vd-collapse">
    <template v-for="item in source"
              :key="item.title">
      <div class="vd-collapse-item">
        <slot name="title">
          <div class="item-title">
            {{title}}
          </div>
        </slot>
        <span class="underline"></span>
        <slot name="body">
          <div class="item-body">{{body}}</div>
        </slot>
      </div>
    </template>
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
export default class VdCollapse extends Vue {}
</script>


