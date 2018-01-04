## navTabs 导航标签

<example-board :component="navTabsBasic" :source="navTabsBasicSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property       | Description    | Type     | Available Value            |
| :------------- | :------------- | :------- | :------------------------- |
| mode           | 模式           | `string` | **horizontal\***, vertical |
| default-active | 默认激活的菜单 | `string` |                            |
| default-active | 默认激活的菜单 | `string` |                            |

## 事件

| 事件名称  | 说明           | 回调参数         |
| :-------- | :------------- | :--------------- |
| on-select | 选择菜单时触发 | 激活菜单的 index |

<script>
  import navTabsBasic from 'docs/examples/navigation/navTabs/navTabsBasic'
  import navTabsBasicSource from 'docs/examples/navigation/navTabs/navTabsBasic.txt'

  export default {
    data() {
      return {
        navTabsBasic,
        navTabsBasicSource
      }
    }
  }
</script>
