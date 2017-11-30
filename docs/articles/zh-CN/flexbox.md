# Flexbox 弹性盒子布局

响应式弹性盒子布局。通过定义每一栏的百分比（5% 跨度）进行界面布局。

## 基础布局

flex 属性定义一个 flexbox 占其父 flexbox 的宽度比例。

<example-board :component="examples.FlexboxBasic">{{examples.FlexboxBasicSource}}</example-board>

<script>
import FlexboxBasic from 'docs/examples/FlexboxBasic';
import FlexboxBasicSource from 'docs/examples/FlexboxBasic.txt';

export default {
  data() {
    return {
      examples: {
        FlexboxBasic,
        FlexboxBasicSource,
      }
    }
  }
}
</script>
