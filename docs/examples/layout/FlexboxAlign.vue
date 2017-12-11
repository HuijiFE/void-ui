<template>
  <vd-flexbox gutter="xsmall">

    <vd-flexbox flex="100"
                v-for="align in ['start', 'center', 'end', 'stretch', 'baseline']"
                :key="align"
                :align="align">

      <vd-flexbox flex="50">
        <div class="layout-content"
             style="height: 92px;">align = "{{align}}"<br/>height: 92px;</div>
      </vd-flexbox>

      <vd-flexbox flex="50">
        <div class="layout-content"
             style="">align = "{{align}}"</div>
      </vd-flexbox>

    </vd-flexbox>

  </vd-flexbox>
</template>

<script>
export default {};
</script>
