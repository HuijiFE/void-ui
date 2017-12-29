<template>
  <vd-flexbox>
    <vd-definition>

      <vd-definition-item label="开发者">
        Paradox Development Studio
      </vd-definition-item>

      <vd-definition-item label="发行商">
        Paradox Interactive
      </vd-definition-item>

      <vd-definition-item label="类型">
        Simulation Strategy
      </vd-definition-item>


      <vd-definition-item label="语言">
        简体中文，繁体中文，英语，法语
      </vd-definition-item>

      <vd-definition-item label="发售日期">
        2016-5-9
      </vd-definition-item>

    </vd-definition>
  </vd-flexbox>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class DefinitionBasic extends Vue {}
</script>
