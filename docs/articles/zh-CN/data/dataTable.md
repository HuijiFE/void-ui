## table 表格

```html
<vd-data-table></vd-data-table>
```

### 基本用法

<example-board :component="TableBasic" :source="TableBasicSource"></example-board>

### 自定义指定列内容

使用具名 slot 可以自定义某一列的内容， `slot`的`name`值与该列表头的`head 值相同`

eg: `body-row-${该单元格对应列的表头的key}`

<example-board :component="TableProps" :source="TablePropsSource"></example-board>

### 自定义单元格内容

添加 `use-cell-slot` 属性位`true` 可自定义某一单元格的样式， 使用具名 slot

`slot` 的 `name` 值为 `body-${rowIndex}-${headKey}`

<example-board :component="TableCellProps" :source="TableCellPropsSource"></example-board>

### 设置格式化后的内容

可以在 headdata 中使用自定义`formatter`函数

也可以使用`slot`配合`void-ui`的内置的 filter 来格式化输出内容

<example-board :component="TableFormatter" :source="TableFormatterSource"></example-board>

### 自定义对齐方式

默认对齐方式为向右对齐，索引对齐方式为居中对齐， 可以向 headdata 里面传递 align 属性来指定当前列的对齐方式

也可以传递`default-align`prop 来修改默认对齐方式

<example-board :component="TableAlign" :source="TableAlignSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property            | Description                                                  | Type      | Available Value           |
| :------------------ | :----------------------------------------------------------- | :-------- | :------------------------ |
| head-data           | 表头数据                                                     | `Array`   | []                        |
| body-data           | 表格主体数据                                                 | `Array`   | []                        |
| striped             | 是否展示相间条纹                                             | `Boolean` | **true\***, false         |
| use-cell-slot       | 是否使用单元格 slot                                          | `Boolean` | **false\***, true         |
| default-sortable    | 默认每列是否可排序                                           | `Boolean` | **true\***, false         |
| default-align       | 默认每列对齐方式                                             | `String`  | **right\***, center, left |
| show-index          | 是否展示索引                                                 | `Boolean` | **false\***, true         |
| img-no-padding-left | 当第一列需要展示图片时,<br>是否去掉 padding-left（项目需要） | `Boolean` | **false\***, true         |

> 排序时会尝试转换为数字进行排序， 如果不能转换（例如汉字）则按照汉字拼音的顺序进行排序

### slot 插槽

| Name                                                             | Description                                                | Type                   | parameter                                                                              |
| :--------------------------------------------------------------- | :--------------------------------------------------------- | :--------------------- | :------------------------------------------------------------------------------------- |
| body-row-${head-data 中的 key 值}                                | 自定义该列内容                                             | scope-slot、named-slot | bodyItem(该行的数据), bodyCell(当前单元格的数据)，<br>headItem(当前单元格对应表头数据) |
| body-${该单元格的行的初始索引}<br>-${该单元格对应列的表头的 key} | 自定义该单元格内容，<br>需设置 `use-cell-slot`属性为`true` | scope-slot、named-slot | bodyItem(该行的数据), bodyCell(当前单元格的数据)，<br>headItem(当前单元格对应表头数据) |

### headData 属性

> `*`表示必填属性。

| Property      | Description            | Type              | Available Value     | parameter                                                             |
| :------------ | :--------------------- | :---------------- | :------------------ | :-------------------------------------------------------------------- |
| **content\*** | 当前表头显示内容       | `string`          | -                   |                                                                       |
| **key\***     | 对应 bodyData 中的键值 | `string`          | -                   |                                                                       |
| formatter     | 自定义格式化该列内容   | `Function`        | -                   | cell(当前单元格原始值)，当前行的所有值，<br>当前 headData 的值        |
| sort          | 自定义排序方式         | `Array<Function>` | -                   | 第一第二个参数为 sort 方法的两个默认参数 a，b，key(当前排序的 key 值) |
| sortable      | 自定义该列是否可排序   | `Boolean`         | -                   | -                                                                     |
| align         | 自定义该列对齐方式     | `String`          | right, left, center | -                                                                     |

> sort 方法接受一个数组， 数组成员是自定义排序函数， 执行顺序按照默认 asc、desc、normal 执行当使用 slot 时，也可以使用`void-ui`内置的一些过滤器过滤

<script>
import TableBasic from 'docs/examples/data/dataTable/basic/TableBasic';
import TableBasicSource from 'docs/examples/data/dataTable/basic/TableBasic.txt';
import TableProps from 'docs/examples/data/dataTable/props/TableProps';
import TablePropsSource from 'docs/examples/data/dataTable/props/TableProps.txt';
import TableCellProps from 'docs/examples/data/dataTable/cellProps/TableCellProps';
import TableCellPropsSource from 'docs/examples/data/dataTable/cellProps/TableCellProps.txt';
import TableFormatter from 'docs/examples/data/dataTable/formatter/TableFormatter';
import TableFormatterSource from 'docs/examples/data/dataTable/formatter/TableFormatter.txt';
import TableAlign from 'docs/examples/data/dataTable/align/TableAlign';
import TableAlignSource from 'docs/examples/data/dataTable/align/TableAlign.txt';


export default {
  data() {
    return {
      TableBasic,
      TableBasicSource,
      TableProps,
      TablePropsSource,
      TableCellProps,
      TableCellPropsSource,
      TableFormatter,
      TableFormatterSource,
      TableAlign,
      TableAlignSource
    }
  }
}
</script>
