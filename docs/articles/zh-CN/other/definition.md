## Defintion list 定义表

基本用法

```html
<vd-definition label="文字">自定义内容</vd-definition>
```

<example-board :component="DefinitionBasic" :source="DefinitionBasicSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property | Description | Type     | Available Value |
| :------- | :---------- | :------- | :-------------- |
| label    | 标题        | `string` | 自定义文字      |

<script>

import DefinitionBasic from 'docs/examples/other/defintion/DefinitionBasic';
import DefinitionBasicSource from 'docs/examples/other/defintion/DefinitionBasic.txt';

export default {
  data(){
    return {
      DefinitionBasic,
     DefinitionBasicSource
    }
  }
}
</script>
