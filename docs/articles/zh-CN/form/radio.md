# Radio 单选框

```html
<example-board :component="RadioBasic" :source="RadioBasicSource"></example-board>
```

## 基本用法

### 绑定

<example-board :component="RadioBasic" :source="RadioBasicSource"></example-board>

### 禁用状态

<example-board :component="RadioDisabled" :source="RadioDisabledSource"></example-board>

## API

| Property    | Type              | Available Value | Description |
| :---------- | :---------------- | :-------------- | :---------- |
| value       | `string | number` |                 |             |
| valueSource | `string | number` |                 |             |
| label       | `string`          |                 |             |

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
