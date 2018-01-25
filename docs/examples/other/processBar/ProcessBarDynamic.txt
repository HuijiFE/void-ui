<template>
  <vd-flexbox gutter="xsmall">
    <vd-flexbox flex="20">
      <vd-button @click="review">重看一遍</vd-button>
    </vd-flexbox>
    <vd-flexbox flex="80"
                gutter="xsmall">
      <vd-flexbox flex="100">
        <vd-process-bar :value="percentage1"></vd-process-bar>
      </vd-flexbox flex="100">
      <vd-flexbox>
        <vd-process-bar :failure="failure2"
                        :value="percentage2"></vd-process-bar>
      </vd-flexbox>
    </vd-flexbox>
  </vd-flexbox>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ProcessBarDynamic extends Vue {
  percentage1 = 0;
  percentage2 = 0;
  timer1 = 0;
  timer2 = 0;
  failure2 = false;

  restore() {
    this.failure2 = false;
    this.percentage1 = 0;
    this.percentage2 = 0;
  }
  review() {
    this.restore();
    this.runProcessfirst();
    this.runProcessSecond();
  }
  runProcessfirst() {
    if (this.timer1) {
      clearInterval(this.timer1);
    }
    this.timer1 = setInterval(() => {
      this.percentage1 += 5;
      if (this.percentage1 >= 100) {
        clearInterval(this.timer1);
      }
    }, 500);
  }
  runProcessSecond() {
    if (this.timer2) {
      clearInterval(this.timer2);
    }
    this.timer2 = setInterval(() => {
      this.percentage2 += 5;
      if (this.percentage2 >= 50) {
        this.failure2 = true;
        this.percentage2 = 50;
      }
    }, 500);
  }
}
</script>
