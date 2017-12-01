# Flexbox 弹性盒子布局

响应式弹性盒子布局。通过定义每一栏的百分比进行界面布局。

```html
  <vd-flexbox></vd-flexbox>
```

## 基础用法

`flex`属性值设置一个 flexbox 占其父 flexbox 的宽度百分比。

<example-board :component="FlexboxBasic" :source="FlexboxBasicSource"></example-board>

`flex="auto"`（默认值）flexbox 会平均分配父 flexbox 的剩余宽度

<example-board :component="FlexboxAuto" :source="FlexboxAutoSource"></example-board>

`flex="initial"` flexbox 的宽度由其内容所撑起。

<example-board :component="FlexboxInitial" :source="FlexboxInitialSource"></example-board>

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
import FlexboxAuto from 'docs/examples/layout/FlexboxAuto';
import FlexboxAutoSource from 'docs/examples/layout/FlexboxAuto.txt';
import FlexboxInitial from 'docs/examples/layout/FlexboxInitial';
import FlexboxInitialSource from 'docs/examples/layout/FlexboxInitial.txt';
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
      FlexboxAuto,
      FlexboxAutoSource,
      FlexboxInitial,
      FlexboxInitialSource,
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
