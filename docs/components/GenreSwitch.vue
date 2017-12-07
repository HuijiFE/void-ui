<template>
  <button class="nav-item genre-switch"
          @click="onClick">
    Switch Genre
  </button>
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
import { VdStylableControl } from 'void-ui';

@Component
export default class GenreSwitch extends VdStylableControl {
  onClick() {
    if (this.$void.genre === 'lite') {
      this.$void.genre = 'dark';
    } else {
      this.$void.genre = 'lite';
    }
  }
}
</script>
