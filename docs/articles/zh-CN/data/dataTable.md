## table 表格

```html
<vd-data-table></vd-data-table>
```

### 基本用法

<example-board :component="TableBasic" :source="TableBasicSource"></example-board>

### 自定义指定列内容

使用具名 slot 可以自定义某一列的内容， `slot`的`name`值与该列表头的`head 值相同`

eg: `body-row-${headkey}`

<example-board :component="TableProps" :source="TablePropsSource"></example-board>

### 自定义单元格内容

`slot` 的 `name` 值为 `body-${rowIndex}-${headKey}`

<example-board :component="TableCellProps" :source="TableCellPropsSource"></example-board>

### 设置格式化后的内容

可以在 headdata 中使用自定义`formatter`函数

也可以使用`slot`配合`void-ui`的内置的 filter 来格式化输出内容

<example-board :component="TableFormatter" :source="TableFormatterSource"></example-board>

### 自定义对齐方式与排序方法

默认对齐方式为向右对齐，索引对齐方式为居中对齐， 可以向 headdata 里面传递 align 属性来指定当前列的对齐方式

也可以传递`default-align`prop 来修改所有列默认对齐方式

在 headData 里设置`sorter`属性即可自定义排序函数

该属性值为一个函数数组, 当排序事件发生时，会按照当前事件执行对应的自定义排序方法,

如果数组中某项缺省 会执行内置方法

```javascript
[事件`normal`的方法 || 内置方法，
 事件`asc`的方法 || 内置方法,
 事件`desc`的方法 || 内置方法]
```

<example-board :component="TableAlign" :source="TableAlignSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property            | Description                                                  | Type      | Available Value           |
| :------------------ | :----------------------------------------------------------- | :-------- | :------------------------ |
| head-data           | 表头数据                                                     | `Array`   | []                        |
| body-data           | 表格主体数据                                                 | `Array`   | []                        |
| striped             | 是否展示相间条纹                                             | `Boolean` | **true\***, false         |
| default-sortable    | 默认每列是否可排序                                           | `Boolean` | **true\***, false         |
| default-align       | 默认每列对齐方式                                             | `String`  | **right\***, center, left |
| show-index          | 是否展示索引                                                 | `Boolean` | **false\***, true         |
| img-no-padding-left | 当第一列需要展示图片时,<br>是否去掉 padding-left（项目需要） | `Boolean` | **false\***, true         |

> 排序时会尝试转换为数字进行排序， 如果不能转换（例如汉字）则按照 unicode 的顺序进行排序

### slot 插槽

| Name                              | Description        | Type                   | parameter                                                                             |
| :-------------------------------- | :----------------- | :--------------------- | :------------------------------------------------------------------------------------ |
| head-column-${head-key}           | 自定义该表头内容   | scope-slot、named-slot | headItem(表头数据), headCell(表头文字)                                                |
| body-column-${head-key}           | 自定义该列内容     | scope-slot、named-slot | rowItem(该行的数据), cellItem(当前单元格的数据)，<br>headItem(当前单元格对应表头数据) |
| body-${row-index}<br>-${head-key} | 自定义该单元格内容 | scope-slot、named-slot | rowItem(该行的数据), cellItem(当前单元格的数据)，<br>headItem(当前单元格对应表头数据) |

### headData 属性

> `*`表示必填属性。

| Property      | Description            | Type              | Available Value     | Parameter                                                                               |
| :------------ | :--------------------- | :---------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| **content\*** | 当前表头显示内容       | `string`          | -                   |                                                                                         |
| **key\***     | 对应 bodyData 中的键值 | `string`          | -                   |                                                                                         |
| formatter     | 自定义格式化该列内容   | `Function`        | -                   | cell(当前单元格原始值)，当前行的所有值，<br>当前 headData 的值                          |
| sorter        | 自定义排序方式         | `Array<Function>` | -                   | 前两个参数为 Array.sort 方法的两个默认参数 a、b，<br> 第三个参数 key(当前排序的 key 值) |
| sortable      | 自定义该列是否可排序   | `Boolean`         | -                   | -                                                                                       |
| align         | 自定义该列对齐方式     | `String`          | right, left, center | -                                                                                       |

> **sorter 属性是一个函数数组， 数组成员是自定义排序方法， 执行顺序按照 asc、desc、normal 执行**

> 当使用 slot 时，也可以使用`void-ui`内置的一些过滤器过滤

### table 事件

| Name       | Description        | Parameter                                         |
| :--------- | :----------------- | :------------------------------------------------ |
| table-sort | 排序事件发生时触发 | key(排序列对应表头的 key 值)， sortType(排序类型) |

<script>
import TableBasic from 'docs/examples/data/dataTable/TableBasic';
import TableBasicSource from 'docs/examples/data/dataTable/TableBasic.txt';
import TableProps from 'docs/examples/data/dataTable/TableProps';
import TablePropsSource from 'docs/examples/data/dataTable/TableProps.txt';
import TableCellProps from 'docs/examples/data/dataTable/TableCellProps';
import TableCellPropsSource from 'docs/examples/data/dataTable/TableCellProps.txt';
import TableFormatter from 'docs/examples/data/dataTable/TableFormatter';
import TableFormatterSource from 'docs/examples/data/dataTable/TableFormatter.txt';
import TableAlign from 'docs/examples/data/dataTable/TableAlign';
import TableAlignSource from 'docs/examples/data/dataTable/TableAlign.txt';

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
