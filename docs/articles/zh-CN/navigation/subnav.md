# Subnav 导航页

为页面和功能提供导航的菜单列表。

<example-board :component="SubnavBasic" :source="SubnavBasicSource"></example-board>

使用 items-source

<example-board :component="SubnavItemsSource" :source="SubnavItemsSourceSource"></example-board>

<script>
import SubnavBasic from 'docs/examples/navigation/subnav/SubnavBasic.vue';
import SubnavBasicSource from 'docs/examples/navigation/subnav/SubnavBasic.txt';
import SubnavItemsSource from 'docs/examples/navigation/subnav/SubnavItemsSource.vue';
import SubnavItemsSourceSource from 'docs/examples/navigation/subnav/SubnavItemsSource.txt';

export default {
  data(){
    return {
     SubnavBasic,
     SubnavBasicSource,
     SubnavItemsSource,
     SubnavItemsSourceSource,
    }
  }
}
</script>
