## Dialog 信息框

`普通弹窗标题`
<example-board :component="DialogCustom" :source="DialogCustomSource"></example-board>

`带图标的弹窗提示标题`
<example-board :component="DialogBasic" :source="DialogBasicSource"></example-board>

`带输入框的弹窗标题`
<example-board :component="DialogInputBasic" :source="DialogInputBasicSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property           | Type   | Available Value                      |
| :----------------- | :----- | :----------------------------------- |
| preset             | string | **success,primary,warning,error**    |
| label              | string | **成功，标准，警告，错误**，可自定义 |
| description        | string | **自定义**                           |
| contentLabel       | string | **自定义**                           |
| contentDescription | string | **自定义**                           |

<script>

import DialogCustom from 'docs/examples/other/dialog/dialogCustom'
import DialogCustomSource from 'docs/examples/other/dialog/dialogCustom.txt'
import DialogBasic from 'docs/examples/other/dialog/dialogBasic'
import DialogBasicSource from 'docs/examples/other/dialog/dialogBasic.txt'
import DialogInputBasic from 'docs/examples/other/dialog/dialogInputBasic'
import DialogInputBasicSource from 'docs/examples/other/dialog/dialogInputBasic.txt'

export default {
  data(){
    return{
      DialogCustom,
      DialogCustomSource,
      DialogBasic,
      DialogBasicSource,
      DialogInputBasic,
      DialogInputBasicSource
    }
  }
}
</script>
