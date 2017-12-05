# Toggle 开关

两个互斥状态的选择器

```html
<VdToggle v-model="toggle"></VdToggle>
```

## 基本用法

为开关绑定一个 value 值

<example-board :component="ToggleBasic" :source="ToggleBasicSource"></example-board>

### 可选形状

`shape`属性 选择一个开关的形状

<example-board :component="ToggleShape" :source="ToggleShapeSource"></example-board>

### 禁用状态

`disabled` 禁用一个开关

<example-board :component="ToggleDisabled" :source="ToggleDisabledSource"></example-board>

### 自定义文字提示

文字提示可以选择在按钮左边或右边。打开文字提示需要设置`contentStatus`属性为`true`

<example-board :component="ToggleTips" :source="ToggleTipsSource"></example-board>

## 所有属性

> `*`表示默认值

| Property      | Intruction       | Type                    | Available Value  |
| :------------ | :--------------- | :---------------------- | :--------------- |
| value         | 开关状态         | `boolean|string|number` | **false**        |
| trueValue     | 开关打开时绑定值 | `boolean|string|number` | **true**，---    |
| trueValue     | 开关关闭时绑定值 | `boolean|string|number` | **true**，---    |
| disabled      | 是否禁用         | `boolean`               | **false**        |
| shape         | 形状             | `string`                | **circle**, rect |
| name          | name 属性        | `string`                | ---              |
| contentStatus | 是否打开文字提示 | `boolean`               | **false**        |
| genre         | 皮肤色           | `string`                | **lite**, dark   |
| position      | 文字提示的位置   | `string`                | **left**, right  |

<script>
import ToggleBasic from 'docs/examples/form/toggle/ToggleBasic';
import ToggleBasicSource from 'docs/examples/form/toggle/ToggleBasic.txt';
import ToggleShape from 'docs/examples/form/toggle/ToggleShape';
import ToggleShapeSource from 'docs/examples/form/toggle/ToggleShape.txt';
import ToggleDisabled from 'docs/examples/form/toggle/ToggleDisabled';
import ToggleDisabledSource from 'docs/examples/form/toggle/ToggleDisabled.txt';
import ToggleTips from 'docs/examples/form/toggle/ToggleTips';
import ToggleTipsSource from 'docs/examples/form/toggle/ToggleTips.txt';

export default {
  data() {
    return {
      ToggleBasic,
      ToggleBasicSource,
      ToggleShape,
      ToggleShapeSource,
      ToggleDisabled,
      ToggleDisabledSource,
      ToggleTips,
      ToggleTipsSource
    }
  }
}
</script>
