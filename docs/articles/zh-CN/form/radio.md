# Radio 单选框

## 基本用法

```html
<example-board :component="RadioBasic" :source="RadioBasicSource"></example-board>
```

为单选框绑定一个 checked 值
<example-board :component="RadioBasic" :source="RadioBasicSource"></example-board>

为单选框绑定一个 disabled 值
<example-board :component="RadioDisabled" :source="RadioDisabledSource"></example-board>

<script>

import RadioBasic from 'docs/examples/form/radio/radioBasic';
import RadioBasicSource from 'docs/examples/form/radio/RadioBasic.txt';
import RadioDisabled from 'docs/examples/form/radio/radioDisabled';
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
