<template>
  <div class="controls">
    <vd-swimlane>
      <vd-clamp>
        <vd-flexbox gutter="xlarge">
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
            <vd-button-wrapper>
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

          <vd-flexbox flex="100">
            {{radioValue}}
          </vd-flexbox>

          <vd-flexbox flex="100">
            <vd-radio value="a"
                      label="Option A"
                      v-model="radioValue"></vd-radio>
            <vd-radio value="b"
                      label="Option B"
                      v-model="radioValue"></vd-radio>
            <vd-radio value="c"
                      label="Option C"
                      v-model="radioValue"></vd-radio>
          </vd-flexbox>

          <vd-flexbox flex="100">
            <vd-radio-group :mode="groupMode"
                            v-model="radioValue"
                            :items-source="radios"></vd-radio-group>
          </vd-flexbox>

          <vd-flexbox flex="100">
            {{checkboxValue}}
          </vd-flexbox>

          <vd-flexbox flex="100">
            <vd-checkbox value="a"
                         label="Option A"
                         v-model="checkboxValue"></vd-checkbox>
            <vd-checkbox value="b"
                         label="Option B"
                         v-model="checkboxValue"></vd-checkbox>
            <vd-checkbox value="c"
                         label="Option C"
                         v-model="checkboxValue"></vd-checkbox>
          </vd-flexbox>

          <vd-flexbox flex="100">
            <vd-checkbox-group :mode="groupMode"
                               v-model="checkboxValue"
                               :items-source="checkboxs"></vd-checkbox-group>
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
import { Tone, Skin, Shape, Size, Radio, Checkbox } from '@void/VoidUI';

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

  public groupMode: 'widget' | 'button' = 'widget';

  public radioValue: string | number = 'a';

  public radios: Radio[] = [
    {
      value: 'a',
      label: 'Option A',
    },
    {
      value: 'b',
      label: 'Option B',
    },
    {
      value: 'c',
      label: 'Option C',
    },
  ];

  public checkboxs: Checkbox[] = [
    {
      value: 'a',
      label: 'Option A',
    },
    {
      value: 'b',
      label: 'Option B',
    },
    {
      value: 'c',
      label: 'Option C',
    },
  ];

  public checkboxValue: (string | number)[] = [];

  // tslint:disable
  private onClick(...args: any[]) {
    args.forEach(a => console.log(a.constructor.name, a));
  }
}
</script>