# Toggle 开关

在两种状态间切换的开关。

```html
<vd-toggle value-on="valueOn"
           value-off="value-off"
           v-model="model"
           content-on="contentOn"
           content-off="contentOff"></vd-toggle>
```

## 基本用法

### 绑定

<example-board :component="ToggleBasic" :source="ToggleBasicSource"></example-board>

### 禁用状态

<example-board :component="ToggleDisabled" :source="ToggleDisabledSource"></example-board>

### 形状

<example-board :component="ToggleShape" :source="ToggleShapeSource"></example-board>

## API

| Property    | Type                        | Available values | Default value | Description |
| :---------- | :-------------------------- | :--------------- | :------------ | ----------- |
| valueOff    | `boolean | string | number` |                  | `false`       |             |
| valueOn     | `boolean | string | number` |                  | `true`        |             |
| valueSource | `boolean | string | number` |                  |               |             |
| contentOff  | `string`                    |                  |               |             |
| contentOn   | `string`                    |                  |               |             |

<script>
import ToggleBasic from 'docs/examples/form/toggle/ToggleBasic';
import ToggleBasicSource from 'docs/examples/form/toggle/ToggleBasic.txt';
import ToggleDisabled from 'docs/examples/form/toggle/ToggleDisabled';
import ToggleDisabledSource from 'docs/examples/form/toggle/ToggleDisabled.txt';
import ToggleShape from 'docs/examples/form/toggle/ToggleShape';
import ToggleShapeSource from 'docs/examples/form/toggle/ToggleShape.txt';

export default {
  data() {
    return {
      ToggleBasic,
      ToggleBasicSource,
      ToggleDisabled,
      ToggleDisabledSource,
      ToggleShape,
      ToggleShapeSource,
    }
  }
}
</script>
