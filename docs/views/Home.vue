<template>
  <div class="home">
    <vd-swimlane oddeven>
      <vd-clamp :class="`vda-raise-0`">
        <h1>test</h1>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </vd-clamp>
    </vd-swimlane>
    <vd-swimlane oddeven
                 v-for="i in 9"
                 :key="i">
      <vd-clamp :class="`vda-raise-${i}`">
        <h1>test</h1>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </vd-clamp>
    </vd-swimlane>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Inject, Model, Provide, Watch } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
