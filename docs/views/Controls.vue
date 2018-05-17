<template>
  <div class="controls">
    <vd-swimlane>
      <vd-clamp>
        <vd-flexbox gutter="auto">
          <vd-flexbox flex="100">{{index}}</vd-flexbox>
          <vd-flexbox flex="100">
            <vd-pagination :skin="skin"
                           :size="size"
                           raise="1"
                           :end="100"
                           v-model="index"></vd-pagination>
          </vd-flexbox>
          <vd-flexbox flex="100">
            <vd-button-group>
              <vd-button :tone="tone"
                         :skin="skin"
                         :shape="shape"
                         :size="size">按钮</vd-button>
              <vd-button :tone="tone"
                         :skin="skin"
                         :shape="shape"
                         :size="size">按钮</vd-button>
              <vd-button :tone="tone"
                         :skin="skin"
                         :shape="shape"
                         :size="size">按钮</vd-button>
              <vd-button :tone="tone"
                         :skin="skin"
                         :shape="shape"
                         :size="size">按钮</vd-button>
            </vd-button-group>
          </vd-flexbox>
          <vd-flexbox flex="100">
            <vd-button-wrapper style="height: 1024px">
              <vd-button :tone="tone"
                         :skin="skin"
                         :shape="shape"
                         :size="size">按钮</vd-button>
              <vd-button :tone="tone"
                         :skin="skin"
                         :shape="shape"
                         :size="size">按钮</vd-button>
              <vd-button :tone="tone"
                         :skin="skin"
                         :shape="shape"
                         :size="size">按钮</vd-button>
              <vd-button :tone="tone"
                         :skin="skin"
                         :shape="shape"
                         :size="size">按钮</vd-button>
            </vd-button-wrapper>
          </vd-flexbox>
        </vd-flexbox>
      </vd-clamp>
    </vd-swimlane>
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

  public index: number = 1;

  // tslint:disable
  private onClick(...args: any[]) {
    args.forEach(a => console.log(a.constructor.name, a));
  }
}
</script>