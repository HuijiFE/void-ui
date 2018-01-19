## table 表格

```html
<vd-data-table></vd-data-table>
```

### 基本用法

<example-board :component="TableBasic" ></example-board>

### 自定义单元格内容

<example-board :component="TableProps" ></example-board>

<script>
import TableBasic from 'docs/examples/data/dataTable/TableBasic';
import TableProps from 'docs/examples/data/dataTable/TableProps';

export default {
  data() {
    return {
      TableBasic,
      TableProps
  }
}
}
</script>
