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

## API

| Property    | Type              | Available values | Default value | Description |
| :---------- | :---------------- | :--------------- | :------------ | ----------- |
| value       | `string | number` |                  |               |             |
| valueSource | `string | number` |                  |               |             |
| content     | `string`          |                  |               |             |

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
