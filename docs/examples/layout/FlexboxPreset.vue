<template>
  <vd-flexbox gutter="xsmall">

    <vd-flexbox flex="100">
      <vd-flexbox>
        <div class="layout-content">some content</div>
      </vd-flexbox>
      <vd-flexbox>
        <div class="layout-content">long long long content</div>
      </vd-flexbox>
      <vd-flexbox>
        <div class="layout-content">content</div>
      </vd-flexbox>
    </vd-flexbox>

    <vd-flexbox flex="100">
      <vd-flexbox flex="auto">
        <div class="layout-content">some content</div>
      </vd-flexbox>
      <vd-flexbox flex="auto">
        <div class="layout-content">long long long content</div>
      </vd-flexbox>
      <vd-flexbox flex="auto">
        <div class="layout-content">content</div>
      </vd-flexbox>
    </vd-flexbox>

    <vd-flexbox flex="100">
      <vd-flexbox flex="initial">
        <div class="layout-content">some content</div>
      </vd-flexbox>
      <vd-flexbox flex="initial">
        <div class="layout-content">long long long content</div>
      </vd-flexbox>
      <vd-flexbox flex="initial">
        <div class="layout-content">content</div>
      </vd-flexbox>
    </vd-flexbox>

    <vd-flexbox flex="100">
      <vd-flexbox flex="none">
        <div class="layout-content">some content</div>
      </vd-flexbox>
      <vd-flexbox flex="none">
        <div class="layout-content">long long long content</div>
      </vd-flexbox>
      <vd-flexbox flex="none">
        <div class="layout-content">content</div>
      </vd-flexbox>
    </vd-flexbox>

  </vd-flexbox>
</template>

<script>
export default {};
</script>
