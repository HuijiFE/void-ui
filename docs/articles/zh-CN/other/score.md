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
<vd-score-bar :value="10"></vd-score-bar>
```

绑定一个 max 值
<example-board :component="ScoreBarBasic" :source="ScoreBarBasicSource"></example-board>

随意展示不同的 max 值
<example-board :component="ScoreBarCustom" :source="ScoreBarCustomSource"></example-board>

# Score-Rank 评分榜

## 基本用法

```html
<vd-score-rank :value="20"></vd-score-rank>
```

绑定一个 max 值

<example-board :component="ScoreRankBasic" :source="ScoreRankBasicSource"></example-board>

随意展示不同的 max 值

<example-board :component="ScoreRankCustom" :source="ScoreRankCustomSource"></example-board>

# Score-Selector 选择器

## 基本用法

```html
<vd-score-selector size='large'></vd-score-selector>
```

<example-board :component="ScoreSelectorBasic" :source="ScoreSelectorBasicSource"></example-board>

# Score-Square

## 基本用法

```html
<vd-score-square></vd-score-square>
```

<example-board :component="ScoreSquareBasic" :source="ScoreSquareBasicSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property | Type   | Available Value        |
| :------- | :----- | :--------------------- |
| max      | number | **10,100**             |
| src      | string | --                     |
| size     | string | **small,medium,large** |

<script>

import ScoreBasic from 'docs/examples/other/score/ScoreBasic';
import ScoreBasicSource from 'docs/examples/other/score/ScoreBasic.txt';

import ScorePercent from 'docs/examples/other/score/ScorePercent';
import ScorePercentSource from 'docs/examples/other/score/ScorePercent.txt';

import ScoreCustom from 'docs/examples/other/score/ScoreCustom';
import ScoreCustomSource from 'docs/examples/other/score/ScoreCustom.txt';

import ScoreBarBasic from 'docs/examples/other/score/ScoreBarBasic';
import ScoreBarBasicSource from 'docs/examples/other/score/ScoreBarBasic.txt';

import ScoreBarCustom from 'docs/examples/other/score/ScoreBarCustom';
import ScoreBarCustomSource from 'docs/examples/other/score/ScoreBarCustom.txt';

import ScoreRankBasic from 'docs/examples/other/score/ScoreRankBasic.vue';
import ScoreRankBasicSource from 'docs/examples/other/score/ScoreRankBasic.txt';

import ScoreRankCustom from 'docs/examples/other/score/ScoreRankCustom.vue';
import ScoreRankCustomSource from 'docs/examples/other/score/ScoreRankCustom.txt';

import ScoreSelectorBasic from 'docs/examples/other/score/ScoreSelectorBasic.vue';
import ScoreSelectorBasicSource from 'docs/examples/other/score/ScoreSelectorBasic.txt';

import ScoreSquareBasic from 'docs/examples/other/score/ScoreSquareBasic.vue';
import ScoreSquareBasicSource from 'docs/examples/other/score/ScoreSquareBasic.txt';

export default {
  data() {
    return {
      ScoreBasic,
      ScoreBasicSource,
      ScorePercent,
      ScorePercentSource,
      ScoreCustom,
      ScoreCustomSource,
      ScoreBarCustom,
      ScoreBarCustomSource,
      ScoreBarBasic,
      ScoreBarBasicSource,
      ScoreRankBasic,
      ScoreRankBasicSource,
      ScoreRankCustom,
      ScoreRankCustomSource,
      ScoreSelectorBasic,
      ScoreSelectorBasicSource,
      ScoreSquareBasic,
      ScoreSquareBasicSource
    }
  }
}
</script>
