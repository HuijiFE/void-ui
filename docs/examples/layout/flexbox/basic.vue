<template>
  <div class="e-flexbox-demo">
    <vd-flexbox>
      <vd-flexbox :flex="20">
        <c-demo-box label="flex = 20"></c-demo-box>
      </vd-flexbox>
      <vd-flexbox :flex="50">
        <c-demo-box label="flex = 50"></c-demo-box>
      </vd-flexbox>
      <vd-flexbox :flex="30">
        <c-demo-box label="flex = 30"></c-demo-box>
      </vd-flexbox>
    </vd-flexbox>
  </div>
</template>
