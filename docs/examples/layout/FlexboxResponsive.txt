<template>
  <vd-flexbox gutter="auto">

    <vd-flexbox flex="100"
                align="start"
                gutter="auto">
      <vd-flexbox flex="33"
                  flex-medium="50"
                  flex-small="100">
        <div class="layout-content">日照香炉生紫烟，<br/>遥看瀑布挂前川。<br/>飞流直下三千尺，<br/>疑是银河落九天。</div>
      </vd-flexbox>
      <vd-flexbox flex="66"
                  flex-medium="50"
                  flex-small="100">
        <div class="layout-content">从军玉门道，逐虏金微山。笛奏梅花曲，刀开明月环。鼓声鸣海上，兵气拥云间。愿斩单于首，长驱静铁关。</div>
      </vd-flexbox>
    </vd-flexbox>

    <vd-flexbox flex="100"
                align="start"
                gutter="auto">
      <vd-flexbox flex="33"
                  flex-medium="50"
                  flex-small="100">
        <div class="layout-content">日照香炉生紫烟，<br/>遥看瀑布挂前川。<br/>飞流直下三千尺，<br/>疑是银河落九天。</div>
      </vd-flexbox>
      <vd-flexbox flex="66"
                  flex-medium="50"
                  :hidden-small="true">
        <div class="layout-content">从军玉门道，逐虏金微山。笛奏梅花曲，刀开明月环。鼓声鸣海上，兵气拥云间。愿斩单于首，长驱静铁关。</div>
      </vd-flexbox>
    </vd-flexbox>

  </vd-flexbox>
</template>

<script>
export default {};
</script>
