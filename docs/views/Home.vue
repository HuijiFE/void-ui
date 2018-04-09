<template>
  <div class="home">
    <vd-swimlane oddeven></vd-swimlane>
    <vd-swimlane oddeven></vd-swimlane>
    <vd-swimlane oddeven></vd-swimlane>
    <vd-swimlane oddeven></vd-swimlane>
    <vd-swimlane oddeven></vd-swimlane>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Inject, Model, Provide, Watch } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>