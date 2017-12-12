# Score 分数

## 基本用法

```html
<vd-score :value="5.6"></vd-score>
```

`十分制`绑定一个 max 值
<example-board :component="ScoreBasic" :source="ScoreBasicSource"></example-board>

`百分制`绑定一个 max 值

<example-board :component="ScorePercent" :source="ScorePercentSource"></example-board>

随意展示不同的 max 值
<example-board :component="ScoreCustom" :source="ScoreCustomSource"></example-board>

# Score-bar 评分横条

## 基本用法

```html
<vd-score-rank :value="20"></vd-score-rank>
```

绑定一个 max 值
<example-board :component="ScoreBarBasic" :source="ScoreBarBasicSource"></example-board>

随意展示不同的 max 值
<example-board :component="ScoreBarCustom" :source="ScoreBarCustomSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property | Type   | Available Value |
| :------- | :----- | :-------------- |
| max      | number | **10,100**      |

<script>

import ScoreBasic from 'docs/examples/other/ScoreBasic';
import ScoreBasicSource from 'docs/examples/other/ScoreBasic.txt';

import ScorePercent from 'docs/examples/other/ScorePercent';
import ScorePercentSource from 'docs/examples/other/ScorePercent.txt';

import ScoreCustom from 'docs/examples/other/ScoreCustom';
import ScoreCustomSource from 'docs/examples/other/ScoreCustom.txt';

import ScoreBarBasic from 'docs/examples/other/ScoreBarBasic';
import ScoreBarBasicSource from 'docs/examples/other/ScoreBarBasic.txt';

import ScoreBarCustom from 'docs/examples/other/ScoreBarCustom';
import ScoreBarCustomSource from 'docs/examples/other/ScoreBarCustom.txt';

export default {
  data() {
    return {
      ScoreBasic,
      ScoreBasicSource,
      ScorePercent,
      ScorePercentSource,
      ScoreCustom,
      ScoreCustomSource,
      ScoreBarBasic,
      ScoreBarBasicSource,
      ScoreBarCustom,
      ScoreBarCustomSource,
    }
  }
}
</script>
