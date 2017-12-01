# Flexbox 弹性盒子布局

响应式弹性盒子布局。通过定义每一栏的百分比（5% 跨度）进行界面布局。

## 基础用法

### flex 属性

flex 属性定义一个 flexbox 占其父 flexbox 的宽度比例。

<example-board :component="FlexboxBasic" :source="FlexboxBasicSource"></example-board>

### flex="auto"

<example-board :component="FlexboxAuto" :source="FlexboxBasicSource"></example-board>

<script>
import FlexboxBasic from 'docs/examples/layout/FlexboxBasic';
import FlexboxBasicSource from 'docs/examples/layout/FlexboxBasic.txt';
import FlexboxAuto from 'docs/examples/layout/FlexboxAuto';

export default {
  data() {
    return {
      FlexboxBasic,
      FlexboxBasicSource,
      FlexboxAuto,
    }
  }
}
</script>
