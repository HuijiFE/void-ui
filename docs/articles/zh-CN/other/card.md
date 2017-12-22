## card 卡片

基本用法

```html
  <vd-card>
  </vd-card>
```

例子

<example-board :component="CardBasic" :source="CardBasicSource"></example-board>

竖向排列
<example-board :component="CardColumn" :source="CardColumnSource"></example-board>

<script >

import CardBasic from 'docs/examples/other/card/CardBasic'
import CardBasicSource from 'docs/examples/other/card/CardBasic.txt'
import CardColumn from 'docs/examples/other/card/CardColumn'
import CardColumnSource from 'docs/examples/other/card/CardColumn.txt'
export default {
  data() {
    return {
      CardBasic,
      CardBasicSource,
      CardColumn,
      CardColumnSource
    }
  }
}
</script>
