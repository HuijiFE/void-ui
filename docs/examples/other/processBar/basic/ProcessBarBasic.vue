<template>
  <vd-flexbox gutter="xsmall">
    <vd-flexbox flex="100"
                v-for="(percentage, index) in [0, 70, 100, 50]"
                :key="percentage">
      <vd-process-bar :failure="index === 3 ? true : false"
                      :value="percentage"></vd-process-bar>
    </vd-flexbox>
  </vd-flexbox>
</template>
