# Tone 色调

Tone：色调，是 Void-UI 的语义化色彩约定。

共 5 种语义化颜色名称：'primary', 'secondary', 'success', 'warning', 'danger'。\
每种语义颜色又细分为 5 个等级：'lightener', 'lighten', 'standard', 'darken', 'darkener'，用于不同情境下。\
通常情况下，`standard` 用作组件正常颜色，`lightener` 用作组件`:hover` 时的颜色，`darkener` 用作组件 `:active` 时的颜色。

在组件中通过 `tone` 属性控制，在 scss 中可通过 `tone()` 函数获取颜色值。

```scss
@function tone($tone: 'primary', $level: 'standard') {
  // ...
}
```

<c-example path="color/tone/overview" />

## tone() 函数定义：
