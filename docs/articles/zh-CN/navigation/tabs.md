# Tabs 选项卡

在选项卡视图中显示不同来源的内容。

<example-board :component="TabsBasic" :source="TabsBasicSource"></example-board>

定制样式。

<example-board :component="TabsStyle" :source="TabsStyleSource"></example-board>

<script>
import TabsBasic from 'docs/examples/navigation/tabs/TabsBasic.vue';
import TabsBasicSource from 'docs/examples/navigation/tabs/TabsBasic.txt';
import TabsStyle from 'docs/examples/navigation/tabs/TabsStyle.vue';
import TabsStyleSource from 'docs/examples/navigation/tabs/TabsStyle.txt';

export default {
  data() {
    return {
      TabsBasic,
      TabsBasicSource,
      TabsStyle,
      TabsStyleSource,
    }
  }
}
</script>
