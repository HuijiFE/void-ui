<template>
  <div class="controls">
    <vd-flexbox gutter="auto"
                align="stretch">
      <vd-flexbox style="height: 256px">
      </vd-flexbox>
      <vd-flexbox justify="center"
                  align="center">
        <vd-button :tone="tone"
                   :skin="skin"
                   :shape="shape"
                   :size="size"
                   :fa="['fab', 'github']">按钮</vd-button>
        <vd-button tone="primary"
                   :skin="skin"
                   :shape="shape"
                   :size="size"
                   :fa="['fab', 'firefox']">按钮</vd-button>
        <vd-button tone="secondary"
                   :skin="skin"
                   :shape="shape"
                   :size="size"
                   :fa="['fab', 'chrome']">按钮</vd-button>
        <vd-button tone="success"
                   :skin="skin"
                   :shape="shape"
                   :size="size"
                   :fa="['fab', 'safari']">按钮</vd-button>
        <vd-button tone="warning"
                   :skin="skin"
                   :shape="shape"
                   :size="size"
                   :fa="['fab', 'opera']">按钮</vd-button>
        <vd-button tone="danger"
                   :skin="skin"
                   :shape="shape"
                   :size="size"
                   :fa="['fab', 'internet-explorer']">按钮</vd-button>
        <vd-button :tone="tone"
                   :skin="skin"
                   :shape="shape"
                   :size="size"
                   :fa="['fab', 'edge']">按钮</vd-button>
        <vd-button :tone="tone"
                   :skin="skin"
                   :shape="shape"
                   :size="size"
                   :fa="['fas', 'ban']"
                   disabled>按钮</vd-button>
      </vd-flexbox>
      <vd-flexbox></vd-flexbox>
    </vd-flexbox>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Emit,
  Inject,
  Model,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { Tone, Skin, Shape, Size } from '@void/VoidUI';

/**
 * Controls subfield
 */
@Component
export default class Controls extends Vue {
  public tone: Tone = Tone.primary;
  public skin: Skin = Skin.plain;
  public shape: Shape = Shape.pill;
  public size: Size = Size.medium;
}
</script>