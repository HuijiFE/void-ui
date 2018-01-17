# Content Table 内容目录

<example-board :component="ContentTableBasic" :source="ContentTableBasicSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property | Description | Type    | Available Value |
| :------- | :---------- | :------ | :-------------- |
| data     | 目录列表    | `Array` |                 |

<script>
  import ContentTableBasic from 'docs/examples/navigation/contentTable/ContentTableBasic'
  import ContentTableBasicSource from 'docs/examples/navigation/contentTable/ContentTableBasic.txt'

  export default {
    data() {
      return {
        ContentTableBasic,
        ContentTableBasicSource
      }
    }
  }
</script>
