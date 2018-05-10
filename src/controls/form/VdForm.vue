<template>
  <form class="vd-form">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { VdControl } from '@void/controls/base/VdControl';

/**
 * Control Form
 */
@Component
export default class VdForm extends VdControl {}
</script>