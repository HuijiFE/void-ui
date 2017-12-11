# Button 按钮

```html
  <vd-button></vd-button>
```

## 基本用法

5 种色调：`primary`、`success`、`warning`、`danger`、`secondary`

4 种皮肤：`fill`、`flat`、`plain`、`silk`

<example-board :component="ButtonToneAndSkin" :source="ButtonToneAndSkinSource"></example-board>

3 种形状：`rect`、`circle`、`square`

3 种尺寸：`small`、`medium`、`large`

<example-board :component="ButtonShapeAndSize" :source="ButtonShapeAndSizeSource"></example-board>

<script>
import ButtonToneAndSkin from 'docs/examples/basic/button/ButtonToneAndSkin';
import ButtonToneAndSkinSource from 'docs/examples/basic/button/ButtonToneAndSkin.txt';
import ButtonShapeAndSize from 'docs/examples/basic/button/ButtonShapeAndSize';
import ButtonShapeAndSizeSource from 'docs/examples/basic/button/ButtonShapeAndSize.txt';

export default {
  data() {
    return {
      ButtonToneAndSkin,
      ButtonToneAndSkinSource,
      ButtonShapeAndSize,
      ButtonShapeAndSizeSource,
    }
  }
}
</script>
