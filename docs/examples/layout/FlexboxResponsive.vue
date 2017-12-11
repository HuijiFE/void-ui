<template>
  <vd-flexbox gutter="auto">

    <vd-flexbox flex="100"
                align="start"
                gutter="auto">
      <vd-flexbox flex="33"
                  flex-medium="50"
                  flex-small="100">
        <div class="layout-content">
          flex="33"<br/>flex-medium="50"<br/>flex-small="100"
        </div>
      </vd-flexbox>
      <vd-flexbox flex="66"
                  flex-medium="50"
                  flex-small="100">
        <div class="layout-content">
          flex="66"<br/>flex-medium="50"<br/>flex-small="100"
        </div>
      </vd-flexbox>
    </vd-flexbox>

    <vd-flexbox flex="100"
                align="start"
                gutter="auto">
      <vd-flexbox flex="33"
                  flex-medium="100"
                  :hidden-xsmall="true">
        <div class="layout-content">
          flex="33"<br/>flex-medium="100"<br/>:hidden-xsmall="true"
        </div>
      </vd-flexbox>
      <vd-flexbox flex="66"
                  flex-medium="100"
                  :hidden-small="true">
        <div class="layout-content">
          flex="66"<br/>flex-medium="100"<br/>:hidden-small="true"
        </div>
      </vd-flexbox>
    </vd-flexbox>

  </vd-flexbox>
</template>

<script>
export default {};
</script>
