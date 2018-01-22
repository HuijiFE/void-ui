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

`slot` 的 `name` 值为 `body-${该单元格的行}-${该单元格对应列的表头的key}`

<example-board :component="TableCellProps" :source="TableCellPropsSource"></example-board>

### 设置格式化后的内容

可以在 headdata 中使用自定义`formatter`函数

也可以使用`slot`配合`void-ui`的内置的 filter 来格式化输出内容

<example-board :component="TableFormatter" :source="TableFormatterSource"></example-board>

<script>
import TableBasic from 'docs/examples/data/dataTable/basic/TableBasic';
import TableBasicSource from 'docs/examples/data/dataTable/basic/TableBasic.txt';
import TableProps from 'docs/examples/data/dataTable/props/TableProps';
import TablePropsSource from 'docs/examples/data/dataTable/props/TableProps.txt';
import TableCellProps from 'docs/examples/data/dataTable/cellProps/TableCellProps';
import TableCellPropsSource from 'docs/examples/data/dataTable/cellProps/TableCellProps.txt';
import TableFormatter from 'docs/examples/data/dataTable/formatter/TableFormatter';
import TableFormatterSource from 'docs/examples/data/dataTable/formatter/TableFormatter.txt';


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
      TableFormatterSource
    }
  }
}
</script>
