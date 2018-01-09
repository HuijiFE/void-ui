# Radio 单选框

从绑定到同一变量的一组选项中选择单个选项。

```html
<vd-radio value="value"
          v-model="model"
          content="content"></vd-radio>
```

## 基本用法

### 绑定

<example-board :component="RadioBasic" :source="RadioBasicSource"></example-board>

### 禁用状态

<example-board :component="RadioDisabled" :source="RadioDisabledSource"></example-board>

### 单选框组

再 radio 上直接绑定`value`, 在`vd-radio-group`中绑定`v-model`即可实现单选框组的绑定

<example-board :component="RadioGroup" :source="RadioGroupSource"></example-board>

## API

| Property | Description | Type     | Available Value |
| :------- | :---------- | :------- | :-------------- |
| value    | 绑定值      | `string` |                 |
| content  | 显示的值    | `string` |                 |
| content  | 显示的值    | `string` |                 |

### radioGroup

| Property   | Description  | Type     | Available Value     |
| :--------- | :----------- | :------- | :------------------ |
| radio-type | radio 的样式 | `string` | **radio\***, button |
| value      | 绑定值       | `string` |                     |

<script>
import RadioBasic from 'docs/examples/form/radio/RadioBasic';
import RadioBasicSource from 'docs/examples/form/radio/RadioBasic.txt';
import RadioDisabled from 'docs/examples/form/radio/RadioDisabled';
import RadioDisabledSource from 'docs/examples/form/radio/RadioDisabled.txt';
import RadioGroup from 'docs/examples/form/radio/RadioGroup';
import RadioGroupSource from 'docs/examples/form/radio/RadioGroup.txt';

export default {
  data() {
    return {
      RadioBasic,
      RadioBasicSource,
      RadioDisabled,
      RadioDisabledSource,
      RadioGroup,
      RadioGroupSource
    }
  }
}
</script>
