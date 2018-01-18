# Loading 加载

在组件中使用

<example-board :component="LoadingBasic" :source="LoadingBasicSource"></example-board>

在 html 中使用

<example-board :component="LoadingHtml" :source="LoadingHtmlSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property | Type     | Available Value        |
| :------- | :------- | :--------------------- |
| size     | `string` | `small, medium, large` |

<script>
import LoadingBasic from 'docs/examples/other/loading/LoadingBasic';
import LoadingBasicSource from 'docs/examples/other/loading/LoadingBasic.txt';
import LoadingHtml from 'docs/examples/other/loading/LoadingHtml';
import LoadingHtmlSource from 'docs/examples/other/loading/LoadingHtml.txt';

export default {
  data() {
    return {
      LoadingBasic,
      LoadingBasicSource,
      LoadingHtml,
      LoadingHtmlSource,
    }
  }
}
</script>
