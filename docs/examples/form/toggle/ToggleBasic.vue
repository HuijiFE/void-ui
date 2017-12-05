<template>
  <VdToggle v-model="toggle"></VdToggle>
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
export default class ToggleBasic extends Vue {
  toggle = true;
}
</script>
