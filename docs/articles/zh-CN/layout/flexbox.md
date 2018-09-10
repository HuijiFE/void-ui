# Flexbox 弹性盒子

弹性盒子布局非常适合用于局部的布局，能适应各种复杂情形。配合 gap/flex/order 属性还能模拟栅格系统。该组件是响应式的。

## Flex 属性的基本用法

可用值为 `'initial' | 'auto' | 'none' | number`，当使用数字时，会根据父元素的方向适配成百分比单位的宽度或高度。
属性 flex 是基于百分比的，大于 1 的数值会被视为百分数，小于 1 的数值会自动乘上 100 作为百分数。

注意：在 Vue 单文件组件模板中使用使用数字型的 flex 属性时需要用绑定语法，这是为了性能考虑，省去将字符串转换成数字的消耗，因为这是个非常实用的布局，在一个页面中往往会有大量的 flexbox 组件。

<c-example path="layout/flexbox/basic" />

模拟 Windows 风格磁贴

<c-example path="layout/flexbox/tiles" />

# Gap 属性

Gap 属性用于控制嵌套的弹性盒子之间的间隙。

<c-example path="layout/flexbox/gap" />
