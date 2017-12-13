## progressBar 进度条

progressBar 进度条 用于展示操作进度

### 基本使用

```html
 <vd-process-bar value="50"></vd-process-bar>
```

<example-board :component="ProcessBarBasic" :source="ProcessBarBasicSource"></example-board>

### 动态展示

`value`的范围为 0 - 100

<example-board :component="ProcessBarDynamic" :source="ProcessBarDynamicSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property | Description        | Type      | Available Value    |
| :------- | :----------------- | :-------- | :----------------- |
| value    | 进度条百分比       | `number`  | 0 - 100            |
| failure  | 进度是否中断       | `boolean` | true, **false\***  |
| ShowText | 是否显示百分比提示 | `boolean` | **true\*** , false |

<script>

 import ProcessBarBasic from 'docs/examples/other/processBar/basic/ProcessBarBasic';
 import ProcessBarBasicSource from 'docs/examples/other/processBar/basic/ProcessBarBasic.txt';
 import ProcessBarDynamic from 'docs/examples/other/processBar/dynamic/ProcessBarDynamic';
 import ProcessBarDynamicSource from 'docs/examples/other/processBar/dynamic/ProcessBarDynamic.txt';

 export default {
   data () {
     return {
       ProcessBarBasic,
       ProcessBarBasicSource,
       ProcessBarDynamic,
       ProcessBarDynamicSource
   }
 }
 }
 </script>
