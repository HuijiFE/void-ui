# Score 分数

## 基本用法

```html
<example-board :component="ScoreBasic" :source="ScoreBasicSource"></example-board>
```

`十分制`绑定一个 value 值
<example-board :component="ScoreBasic" :source="ScoreBasicSource"></example-board>

`百分制`绑定一个 value 值和 percent 值

<example-board :component="ScorePercent" :source="ScorePercentSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property | Type   | Available Value |
| :------- | :----- | :-------------- |
| value    | number | **1,2...10**    |
| percent  | number | **10,20...100** |

<script>
import ScoreBasic from 'docs/examples/other/ScoreBasic';
import ScoreBasicSource from 'docs/examples/other/ScoreBasic.txt';
import ScorePercent from 'docs/examples/other/ScorePercent';
import ScorePercentSource from 'docs/examples/other/ScorePercent.txt';
export default {
  data() {
    return {
      ScoreBasic,
      ScoreBasicSource,
      ScorePercent,
      ScorePercentSource
    }
  }
}
</script>
