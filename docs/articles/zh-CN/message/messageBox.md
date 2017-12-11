## Message Box

模拟系统提示消息的全局弹框组件

### 基本用法

通过在组件中全局调用

```js
this.$msg({
  title: '这是标题',
  content: '这是内容',
});
```

例子

<example-board :component="MessageBoxBasic" :source="MessageBoxBasicSource"></example-board>

通过设置 `maskCloable：false` 禁止通过点击遮罩层来关闭弹窗

<example-board :component="MessageBoxMask" :source="MessageBoxMaskSource"></example-board>

### 所有属性

> `*`表示默认值。

| Property    | Intruction                     | Type      | Available Value |
| :---------- | :----------------------------- | :-------- | :-------------- |
| title       | 弹框标题                       | `string`  | ---             |
| content     | 弹框内容                       | `string`  | ---             |
| maskCloable | 是否可以通过点击遮罩层关闭弹框 | `boolean` | **false\***     |

<script>
import MessageBoxBasic from 'docs/examples/message/MessageBox/MessageBoxBasic'
import MessageBoxBasicSource from 'docs/examples/message/MessageBox/MessageBoxBasic.txt'
import MessageBoxMask from 'docs/examples/message/MessageBox/MessageBoxMask'
import MessageBoxMaskSource from 'docs/examples/message/MessageBox/MessageBoxMask.txt'

export default {
  data() {
    return {
      MessageBoxBasic,
      MessageBoxBasicSource,
      MessageBoxMask,
      MessageBoxMaskSource
    }
  }
}
</script>
