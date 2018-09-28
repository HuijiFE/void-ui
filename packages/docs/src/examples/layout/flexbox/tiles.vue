<template>
  <div class="e-flexbox-tiles">
    <vd-flexbox gap>
      <vd-flexbox :flex="40">
        <c-demo-box bordered
                    rainbow
                    bold
                    label="0"
                    :ratio="100"></c-demo-box>
      </vd-flexbox>
      <vd-flexbox :flex="60">
        <vd-flexbox gap>
          <vd-flexbox v-for="num in 6"
                      :key="num"
                      :flex="1 / 3">
            <c-demo-box bordered
                        rainbow
                        bold
                        :label="num"
                        :ratio="100"></c-demo-box>
          </vd-flexbox>
        </vd-flexbox>
      </vd-flexbox>
    </vd-flexbox>
  </div>
</template>
