## 链接

基本用法

```html
<vd-link></vd-link>
```

例子

<example-board :component="LinkBasic" :source="LinkBasicSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property | Description        | Type    |
| :------- | :----------------- | :------ |
| linkList | 所有外链组成的数组 | `Array` |

> linkList 中的必填属性

| Property | Description    | Type     |
| :------- | :------------- | :------- |
| label    | 链接的文字提示 | `string` |
| href     | 连接的地址     | `string` |
| icon     | 链接的图标     | `string` |

<script>
  import LinkBasic from 'docs/examples/other/link/LinkBasic'
  import LinkBasicSource from 'docs/examples/other/link/LinkBasic.txt'

  export default {
    data () {
      return {
        LinkBasic,
        LinkBasicSource
      }
    }
  }
</script>
