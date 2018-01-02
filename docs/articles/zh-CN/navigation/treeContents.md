## 树形目录

<example-board :component="TreeContentBasic" :source="TreeContentBasicSource"></example-board>


## 所有属性

> `*`表示默认值。

| Property  | Description        | Type      | Available Value   |
| :-------- | :----------------- | :-------- | :---------------- |
| data      | 目录列表            | `Array`   |                   |


<script>
  import TreeContentBasic from 'docs/examples/navigation/treeContent/TreeContentBasic'
  import TreeContentBasicSource from 'docs/examples/navigation/treeContent/TreeContentBasic.txt'

  export default {
    data() {
      return {
        TreeContentBasic,
        TreeContentBasicSource
      }
    }
  }
</script>
