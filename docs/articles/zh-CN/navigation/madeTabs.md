## MadeTabs 定制 tabs

基本使用

默认激活第一个标签页， 你也可以通过 value 属性来绑定激活的标签页
<example-board :component="madeTabsBasic" :source="madeTabsBasicSource"></example-board>

可通过 tabPositon 来设置 tabhead 的位置
<example-board :component="madeTabsPosition" :source="madeTabsPositionSource"></example-board>

可自定义头部标签
<example-board :component="madeTabsSlot" :source="madeTabsSlotSource"></example-board>

## 所有属性

> `*`表示默认值。

### vd-made-tabs

| Property          | Description               | Type      | Available Value                  |
| :---------------- | :------------------------ | :-------- | :------------------------------- |
| value             | 绑定值，绑定选项卡的 name | `string`  | **第一个选项卡的 name\***, false |
| tab-head-position | tabhead 的位置            | `string`  | **top\***, left, right, bottom   |
| show-tip-bar      | 是否显示指示条            | `boolean` | **true\***, false                |

### vd-made-tabs-item

| Property | Description | Type     | Available Value |
| :------- | :---------- | :------- | :-------------- |
| label    | 选项卡标题  | `string` |                 |
| name     | 选项卡标识  | `string` |                 |

<script>

import madeTabsBasic from 'docs/examples/navigation/madeTabs/madeTabsBasic'
import madeTabsBasicSource from 'docs/examples/navigation/madeTabs/madeTabsBasic.txt'
import madeTabsPosition from 'docs/examples/navigation/madeTabs/madeTabsPosition'
import madeTabsPositionSource from 'docs/examples/navigation/madeTabs/madeTabsPosition.txt'
import madeTabsSlot from 'docs/examples/navigation/madeTabs/madeTabsSlot'
import madeTabsSlotSource from 'docs/examples/navigation/madeTabs/madeTabsSlot.txt'

export default {
    data() {
      return {
        madeTabsBasic,
        madeTabsBasicSource,
        madeTabsPosition,
        madeTabsPositionSource,
        madeTabsSlot,
        madeTabsSlotSource
      }
    }
  }
</script>
