# Acrylic 亚克力

在选项卡视图中显示不同来源的内容。

<example-board :component="AcrylicBasic" :source="AcrylicBasicSource"></example-board>

<script>
import AcrylicBasic from 'docs/examples/style/acrylic/AcrylicBasic.vue';
import AcrylicBasicSource from 'docs/examples/style/acrylic/AcrylicBasic.txt';

export default {
  data() {
    return {
      AcrylicBasic,
      AcrylicBasicSource,
    }
  }
}
</script>
