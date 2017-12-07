# Radio 单选框

## 基本用法

```html
<example-board :component="RadioBasic" :source="RadioBasicSource"></example-board>
```

为单选框绑定一个 checked 值
<example-board :component="RadioBasic" :source="RadioBasicSource"></example-board>

## 禁用状态

`disabled`禁用一个单选框
<example-board :component="RadioDisabled" :source="RadioDisabledSource"></example-board>

## 所有属性

| Property      | Intruction   | Type      | Available Value     |
| :------------ | :----------- | :-------- | :------------------ |
| checked       | 单选框的状态 | `boolean` | **true**，**false** |
| trueChecked   | 已点击       | `boolean` | **true**，---       |
| falseChecked  | 未点击       | `boolean` | **false**，---      |
| disabled      | 是否禁用     | `boolean` | **true**，**false** |
| trueDisabled  | 禁用         | `boolean` | **true**，---       |
| falseDisabled | 不禁用       | `boolean` | **false**，---      |
| genre         | 肤色         | `string`  | **lite**，**dark**  |

<script>
import RadioBasic from 'docs/examples/form/radio/RadioBasic';
import RadioBasicSource from 'docs/examples/form/radio/RadioBasic.txt';
import RadioDisabled from 'docs/examples/form/radio/RadioDisabled';
import RadioDisabledSource from 'docs/examples/form/radio/RadioDisabled.txt';

export default {
  data() {
    return {
      RadioBasic,
      RadioBasicSource,
      RadioDisabled,
      RadioDisabledSource,
    }
  }
}
</script>
