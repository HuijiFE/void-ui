## Message Box

模拟系统提示消息的弹框组件

```html
<VdMessageBox modal="true"></VdMessageBox>
```

也可以在组件中进行全局调用

```js
this.$msg({
  title: '这是标题',
  content: '这是内容',
});
```

例子

<example-board :component="MessageBoxBasic" ></example-board>

<script>
import MessageBoxBasic from 'docs/examples/message/MessageBox/MessageBoxBasic'
// import MessageBoxBasicSource from 'docs/examples/message/MessageBox/MessageBoxBasic.txt'

export default {
  data() {
    return {
      MessageBoxBasic
    }
  }
  // MessageBoxBasicSource
}
</script>
