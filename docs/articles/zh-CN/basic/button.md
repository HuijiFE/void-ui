# Button 按钮

```html
  <vd-button></vd-button>
```

## Theme 主题

5 种色调：`primary`、`success`、`warning`、`danger`、`secondary`

4 种皮肤：`fill`、`flat`、`plain`、`silk`

<example-board :component="ButtonToneAndSkin" :source="ButtonToneAndSkinSource"></example-board>

<script>
import ButtonToneAndSkin from 'docs/examples/basic/ButtonToneAndSkin';
import ButtonToneAndSkinSource from 'docs/examples/basic/ButtonToneAndSkin.txt';

export default {
  data() {
    return {
      ButtonToneAndSkin,
      ButtonToneAndSkinSource,
    }
  }
}
</script>
