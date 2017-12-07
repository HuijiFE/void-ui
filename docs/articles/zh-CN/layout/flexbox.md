# Flexbox 弹性盒子布局

响应式弹性盒子布局。通过定义每一栏的百分比进行界面布局。

```html
  <vd-flexbox></vd-flexbox>
```

## 基础用法

当不设置 `flex` 属性的值时，元素会平均分配父容器宽度。相当于 `flex: 1 1 0%;`

`flex="auto"` flexbox 会根据自身的宽度与高度来确定尺寸，但是会自行伸长以吸收父容器中额外的
自由空间，也会缩短至自身最小尺寸以适应父容器。

`flex="initial"` flexbox 会根据自身宽高设置尺寸。它会缩短自身以适应父容器，但不会伸长并吸
收父容器中的额外自由空间来适应容器。

`flex="none"` flexbox 会根据自身宽高来设置尺寸。它是完全非弹性的：既不会缩短，也不会伸长来
适应父容器。

<example-board :component="FlexboxPreset" :source="FlexboxPresetSource"></example-board>

`flex` 属性使用具体的值，设置一个 flexbox 占其父 flexbox 的宽度百分比。

<example-board :component="FlexboxBasic" :source="FlexboxBasicSource"></example-board>

## 对齐

`justify`属性值设置其内容的水平对齐方式。

<example-board :component="FlexboxJustify" :source="FlexboxJustifySource"></example-board>

`align`属性值设置其内容的垂直对齐方式。

<example-board :component="FlexboxAlign" :source="FlexboxAlignSource"></example-board>

## 响应式

<example-board :component="FlexboxResponsive" :source="FlexboxResponsiveSource"></example-board>

---

## 所有属性

> `*`表示默认值。

| Property      | Type            | Available Value                                                      |
| :------------ | :-------------- | :------------------------------------------------------------------- |
| flex          | `string|number` | **auto\***, initial<template v-for="i in 20">, {{i \* 5}}</template> |
| flex-xsmall   | `string|number` |                                                                      |
| flex-small    | `string|number` |                                                                      |
| flex-medium   | `string|number` |                                                                      |
| flex-large    | `string|number` |                                                                      |
| flex-xlarge   | `string|number` |                                                                      |
| gutter        | `string`        | auto, xsmall, small, medium, large, xlarge                           |
| justify       | `string`        | **start\***, end, center, between, around                            |
| align         | `string`        | **start\***, end, center, stretch, baseline                          |
| hidden        | `bolean`        |                                                                      |
| hidden-xsmall | `bolean`        |                                                                      |
| hidden-small  | `bolean`        |                                                                      |
| hidden-medium | `bolean`        |                                                                      |
| hidden-large  | `bolean`        |                                                                      |
| hidden-xlarge | `bolean`        |                                                                      |

<script>
import FlexboxBasic from 'docs/examples/layout/FlexboxBasic';
import FlexboxBasicSource from 'docs/examples/layout/FlexboxBasic.txt';
import FlexboxPreset from 'docs/examples/layout/FlexboxPreset';
import FlexboxPresetSource from 'docs/examples/layout/FlexboxPreset.txt';
import FlexboxJustify from 'docs/examples/layout/FlexboxJustify';
import FlexboxJustifySource from 'docs/examples/layout/FlexboxJustify.txt';
import FlexboxAlign from 'docs/examples/layout/FlexboxAlign';
import FlexboxAlignSource from 'docs/examples/layout/FlexboxAlign.txt';
import FlexboxResponsive from 'docs/examples/layout/FlexboxResponsive';
import FlexboxResponsiveSource from 'docs/examples/layout/FlexboxResponsive.txt';

export default {
  data() {
    return {
      FlexboxBasic,
      FlexboxBasicSource,
      FlexboxPreset,
      FlexboxPresetSource,
      FlexboxJustify,
      FlexboxJustifySource,
      FlexboxAlign,
      FlexboxAlignSource,
      FlexboxResponsive,
      FlexboxResponsiveSource,
    }
  }
}
</script>
