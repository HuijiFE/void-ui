## Avatar 头像

基本用法

```html
  <vd-avatar></vd-avatar>
```

<example-board :component="AvatarBasic" :source="AvatarBasicSource"></example-board>

## 所有属性

> `*`表示默认值。

VdDataCard

| Property    | Description | Type     | Available Value |
| :---------- | :---------- | :------- | :-------------- |
| src         | 头像路径    | `string` |                 |
| label       | 人物名字    | `string` |                 |
| description | 人物介绍    | `string` |                 |

<script>
import AvatarBasic from 'docs/examples/other/avatar/AvatarBasic'
import AvatarBasicSource from 'docs/examples/other/avatar/AvatarBasic.txt'

export default {
  data(){
    return {
      AvatarBasic,
      AvatarBasicSource
    }
  }
}

</script>
