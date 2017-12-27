## Collapse 折叠面板

<example-board :component="CollapseBasic" :source="CollapseBasicSource"></example-board>

## 所有属性

> `*`表示默认值。

### vd-collapse

| Property  | Description        | Type      | Available Value   |
| :-------- | :----------------- | :-------- | :---------------- |
| accordion | 是否使用手风琴模式 | `boolean` | **true\***, false |

### vd-collapse-item

| Property | Description      | Type      | Available Value    |
| :------- | :--------------- | :-------- | :----------------- |
| expand   | 默认展开当前面板 | `boolean` | **false\***, false |
| head     | 面板标题         | `string`  |                    |
| content  | 面板内容         | `string`  |                    |

**为多个面板设置`expand`属性时，只有一个面板生效，但是不确保是第一个设置的面板, 详情参考[Vue.js - vm.$children](https://cn.vuejs.org/v2/api/#vm-children)**

<script>
  import CollapseBasic from 'docs/examples/navigation/collapse/CollapseBasic'
  import CollapseBasicSource from 'docs/examples/navigation/collapse/CollapseBasic.txt'
  export default {
    data() {
      return {
        CollapseBasic,
        CollapseBasicSource
      }
    }
  }
</script>
