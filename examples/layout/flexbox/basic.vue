<template>
  <div class="e-flexbox-demo">
    <vd-flexbox gap>
      <vd-flexbox :flex="20">
        <c-demo-box label="flex = 20"
                    bordered
                    rainbow/>
      </vd-flexbox>
      <vd-flexbox :flex="50">
        <c-demo-box label="flex = 50"
                    bordered
                    rainbow/>
      </vd-flexbox>
      <vd-flexbox :flex="30">
        <c-demo-box label="flex = 30"
                    bordered
                    rainbow/>
      </vd-flexbox>

      <vd-flexbox :flex="40">
        <c-demo-box label="flex = 40"
                    bordered
                    rainbow/>
      </vd-flexbox>
      <vd-flexbox :flex="15">
        <c-demo-box label="flex = 15"
                    bordered
                    rainbow/>
      </vd-flexbox>
      <vd-flexbox :flex="45">
        <c-demo-box label="flex = 45"
                    bordered
                    rainbow/>
      </vd-flexbox>

      <vd-flexbox :flex="1 / 6">
        <c-demo-box label="flex = 1/6"
                    bordered
                    rainbow/>
      </vd-flexbox>
      <vd-flexbox :flex="1 / 6">
        <c-demo-box label="flex = 1/6"
                    bordered
                    rainbow/>
      </vd-flexbox>
      <vd-flexbox :flex="2 / 3">
        <c-demo-box label="flex = 2/3"
                    bordered
                    rainbow/>
      </vd-flexbox>
    </vd-flexbox>
  </div>
</template>
