## 数据卡片

基本用法
<example-board :component="VdDataCardBasic"  :source="VdDataCardBasicSource"></example-board>

使用 slot 插槽插入任意内容
<example-board :component="DataCardSlot"  :source="DataCardSlotSource"></example-board>

## 所有属性

> `*`表示默认值。

VdDataCard

| Property | Description | Type     | Available Value |
| :------- | :---------- | :------- | :-------------- |
| icon     | 图标        | `string` |                 |
| tone     | 图标颜色    | `string` |                 |
| slot     | 插槽，      | `string` |                 |

VdDataCardItem

| Property                | Description                 | Type     | Available Value |
| :---------------------- | :-------------------------- | :------- | :-------------- |
| label                   | 描述                        | `string` |                 |
| data                    | 数据                        | `string` |                 |
| data-sup                | 补充数据数据                | `string` |                 |
| slot （name=data-sup）  | 具名插槽， 插入补充数据数据 | `string` |                 |
| slot                    | 插槽， 插入补充内容         | `string` |                 |
| slot （name=item-data） | 具名插槽， 插入自定义组件   | `string` |                 |

<script>
  import VdDataCardBasic from 'docs/examples/other/dataCard/DataCardBasic'
  import VdDataCardBasicSource from 'docs/examples/other/dataCard/DataCardBasic.txt'
  import DataCardSlot from 'docs/examples/other/dataCard/DataCardSlot'
  import DataCardSlotSource from 'docs/examples/other/dataCard/DataCardSlot.txt'

  export default {
    data() {
      return {
        VdDataCardBasic,
        VdDataCardBasicSource,
        DataCardSlot,
        DataCardSlotSource
      }
    }
  }
</script>
