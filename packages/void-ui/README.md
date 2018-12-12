# Void-UI

[文档](http://huijife.github.io/void-ui/)

## 关键特性

**设计语言**\
在遵循设计规范的情况下，为多 Web App 项目提供一致性设计风格，减少设计人员与开发人员之间的沟通成本。

**高内聚的样式**\
使用`CEP.scss`作为辅助，书写组件样式，使组件样式高度内聚，保持隔离。

**自定义**\
精心构思的属性和变量使得自定义样式变得更加简单，组件外观契合设计风格，也为二次开发提供更多便利。
对于面向用户的产品，这是个极其重要的特性。

**布局**\
提供多种多样的布局方式，list、card、flow 等各种经典布局，以及强大的 flexbox。
其中核心布局组件 flexbox 的强大超出你的想象，响应式和实现栅格系统更是不在话下。在所有主流浏览器都支持 flex 布局的今天，你几乎可以将其用在任何地方，代替老旧的浮动布局。

**类型支持**\
类型和注释是最好的文档，在使用 TypeScript 和 TSX（TypeScript 版的 JSX）时，代码提示让你获得良好的开发体验。

## 如何使用

> Void-UI 采用源码分发模式，建议使用 `@vue/cli 3.X`，并在创建项目时选择 ts 以及 scss 特性，以获得完善的 TypeScript 构建支持。

将 Void-UI 添加到你的依赖中。

```bash
# 使用 yarn
yarn add void-ui

# 或者使用 npm
npm install void-ui
```

在项目中引用

main.scss

```scss
@import '~void-ui/src/index.scss';
```

main.js or main.ts

```ts
import './main.scss';
import Vue from 'vue';
import VoidUI from 'void-ui';

Vue.use(VoidUI);
```
