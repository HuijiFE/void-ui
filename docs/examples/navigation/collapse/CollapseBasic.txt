<template>
  <vd-collapse :accordion="false">
    <vd-collapse-item head="Vue.js"
                      content="Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。">
    </vd-collapse-item>
    <vd-collapse-item :expand="true">
      <div slot="head">TypeScript</div>
      <div slot="content">TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。 TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。</div>
    </vd-collapse-item>
    <vd-collapse-item>
      <div slot="head">JavaScript</div>
      <div slot="content">JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。</div>
    </vd-collapse-item>
  </vd-collapse>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VdCollapseBasic extends Vue {}
</script>


