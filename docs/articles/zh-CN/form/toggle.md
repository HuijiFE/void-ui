# Toggle 开关

两个互斥状态的选择器

```html
<vd-toggle v-model="isOn"></vd-toggle>
```

## 基本用法

使用 `v-model` 绑定 `value` 属性，`value-on` 和 `value-off` 属性设置开和关状态对应的值。

<example-board :component="ToggleBasic" :source="ToggleBasicSource"></example-board>

### 可选形状

`shape` 属性设置开关的形状

<example-board :component="ToggleShape" :source="ToggleShapeSource"></example-board>

### 自定义文字提示

`content-on` `content-of` 属性设置开启和关闭状态的显示文字。

<example-board :component="ToggleContent" :source="ToggleContentSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property    | Description              | Type                        | Available Value    |
| :---------- | :----------------------- | :-------------------------- | :----------------- |
| value       | 开关状态                 | `boolean | string | number` |                    |
| value-on    | 开关打开时对应的值       | `boolean | string | number` | **true\***         |
| value-off   | 开关关闭时对应的值       | `boolean | string | number` | **false\***        |
| disabled    | 是否禁用                 | `boolean`                   | **false\***        |
| shape       | 形状                     | `string`                    | **rect\***, circle |
| genre       | 风格                     | `string`                    | **lite\***, dark   |
| content-on  | 开关打开时对应显示的文字 | `string`                    |                    |
| content-off | 开关关闭时对应显示的文字 | `string`                    |                    |

<script>
import ToggleBasic from 'docs/examples/form/toggle/ToggleBasic';
import ToggleBasicSource from 'docs/examples/form/toggle/ToggleBasic.txt';
import ToggleShape from 'docs/examples/form/toggle/ToggleShape';
import ToggleShapeSource from 'docs/examples/form/toggle/ToggleShape.txt';
import ToggleContent from 'docs/examples/form/toggle/ToggleContent';
import ToggleContentSource from 'docs/examples/form/toggle/ToggleContent.txt';

export default {
  data() {
    return {
      ToggleBasic,
      ToggleBasicSource,
      ToggleShape,
      ToggleShapeSource,
      ToggleContent,
      ToggleContentSource
    }
  }
}
</script>
