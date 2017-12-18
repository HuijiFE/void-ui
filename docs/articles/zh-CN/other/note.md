# Notification 提示

## 基本用法

`<vd-note :preset="preset" :label="label" :description="description"></vd-note>`

preset 的值为空时
<example-board :component="NoteBasic" :source="NoteBasicSource"></example-board>

分别绑定一个 preset,label,description 值
<example-board :component="NoteAll" :source="NoteAllSource"></example-board>

## 所有属性

> `*`表示默认值。

| Property    | Type   | Available Value                      |
| :---------- | :----- | :----------------------------------- |
| preset      | string | **success,primary,warning,error**    |
| label       | string | **成功，标准，警告，错误**，可自定义 |
| description | string | **自定义**                           |

<script>
import NoteBasic from 'docs/examples/other/NoteBasic.vue';
import NoteBasicSource from 'docs/examples/other/NoteBasic.txt';

import NoteAll from 'docs/examples/other/NoteAll.vue';
import NoteAllSource from 'docs/examples/other/NoteAll.txt';

export default {
  data(){
    return {
    NoteBasic,
    NoteBasicSource,
    NoteAll,
    NoteAllSource,
    }
  }

  }
</script>
