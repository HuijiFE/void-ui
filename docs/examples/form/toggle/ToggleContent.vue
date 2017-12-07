<template>
  <div>
    <vd-toggle v-model="isOn"
               content-on="on"
               content-off="off">
    </vd-toggle>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ToggleTips extends Vue {
  isOn = false;
}
</script>
