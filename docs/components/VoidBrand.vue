<template>
  <svg version="1.1"
       id="void-brand"
       class="void-brand"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink"
       x="0px"
       y="0px"
       viewBox="0 0 1024 1024"
       enable-background="new 0 0 1024 1024"
       xml:space="preserve">
    <g>
      <polygon class="void-brand_left"
               :class="colorLeft"
               points="77.8,110.5 279.8,569.9 411,278.1 575.8,278.1 652.1,110.5 	" />
      <polygon class="void-brand_right"
               :class="colorRight"
               points="324.1,662.5 435.3,914.1 589.5,914.1 947,110.5 733.5,110.5 508.7,615.1 425.9,431.3 	" />
    </g>
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Emit, Inject, Model, Prop, Provide, Watch } from 'vue-property-decorator';

@Component
export default class VoidBrand extends Vue {
  @Prop({ type: String, default: 'lite' })
  private colorLeft: string;

  @Prop({ type: String, default: 'dark' })
  private colorRight: string;
}
</script>

<style lang="scss">
.void-brand {
  width: auto;
  height: 80%;

  & &_left,
  & &_right {
    &.lite {
      fill: var(--vd-theme-lite-bg-normal);
    }
    &.dark {
      fill: var(--vd-theme-dark-bg-normal);
    }
    &.primary {
      fill: var(--vd-tone-primary-standard);
    }
  }
}
</style>
