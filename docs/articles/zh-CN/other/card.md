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

自定义 slot 内容
<example-board :component="CardSlot" :source="CardSlotSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property    | Description                | Type     | Available Value   |
| :---------- | :------------------------- | :------- | :---------------- |
| direction   | 卡片排列方式               | `string` | **row\***, column |
| head        | 卡片标题                   | `string` |                   |
| content     | 卡片内容                   | `string` |                   |
| image-title | 鼠标放到图片上时显示的文字 | `string` |                   |
| image-alt   | 图片加载不出来时显示的文字 | `string` |                   |
| description | 卡片其他信息               | `string` |                   |

<script >

import CardBasic from 'docs/examples/other/card/CardBasic'
import CardBasicSource from 'docs/examples/other/card/CardBasic.txt'
import CardColumn from 'docs/examples/other/card/CardColumn'
import CardColumnSource from 'docs/examples/other/card/CardColumn.txt'
import CardSlot from 'docs/examples/other/card/CardSlot'
import CardSlotSource from 'docs/examples/other/card/CardSlot.txt'
export default {
  data() {
    return {
      CardBasic,
      CardBasicSource,
      CardColumn,
      CardColumnSource,
      CardSlot,
      CardSlotSource
    }
  }
}
</script>
