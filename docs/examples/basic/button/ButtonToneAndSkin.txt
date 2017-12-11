<template>
  <vd-flexbox gutter="xsmall">
    <!-- 4 kinds of skins -->
    <vd-flexbox v-for="skin in ['fill', 'flat', 'plain', 'silk']"
                :key="skin"
                gutter="xsmall"
                flex="100">
      <vd-flexbox justify="around">
        <vd-button v-for="tone in ['primary', 'secondary', 'success', 'warning', 'danger']"
                   :key="tone"
                   :skin="skin"
                   :tone="tone">{{skin}} {{tone}}</vd-button>
        <vd-button :skin="skin"
                   disabled>{{skin}} disabled</vd-button>
      </vd-flexbox>
    </vd-flexbox>
  </vd-flexbox>
</template>

<script>
</script>
