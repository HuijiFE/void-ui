<template>
  <vd-flexbox gutter="xsmall">
    <!-- 4 kinds of skins -->
    <vd-flexbox v-for="shape in ['rect', 'circle', 'square']"
                :key="shape"
                gutter="xsmall"
                flex="100">
      <vd-flexbox justify="around"
                  align="center">
        <vd-button v-for="size in ['small', 'medium', 'large']"
                   :key="size"
                   :shape="shape"
                   :size="size">{{shape}}</vd-button>
      </vd-flexbox>
    </vd-flexbox>
  </vd-flexbox>
</template>

<script>
</script>
