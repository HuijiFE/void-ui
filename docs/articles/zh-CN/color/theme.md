# Theme 主题

Theme：主题色，是 Void-UI 明暗色彩约定。用于控制前景色、背景色以及边框颜色等。

共 2 种语义化名称：`lite`, `dark`。\
每种名称又细分多种用途，如下：

注：

- fg 是前景（foreground）的缩写，对应 CSS 中的 color 属性
- bg 是背景（background）的缩写，对应 CSS 中的 background-color 属性
- bd 是边框（border）的缩写，对应 CSS 中的 border-color 属性

```text
  fg-emphasize   : 强调，通常用于标题文字
  fg-normal      : 普通，通常用于正文文字
  fg-sub         : 辅助，通常用于子标题、辅助信息（如新闻列表中的日期）
  fg-placeholder : 占位，通常用于输入框中的占位文字
  fg-disabled    : 禁用状态颜色

  bg-higher      : 用于细分区域，比如作卡片类内容区域的头部背景颜色
  bg-high        : 用于细分区域，比如
  bg-normal      : 用于细分区域，通常是正文区域的背景颜色
  bg-low         : 用于细分区域，比如列表项选中状态
  bg-lower       : 用于细分区域，通常用作整个页面的大背景
  bg-hover       : 用于列表项鼠标悬停时的背景色
  bg-disabled    : 禁用状态背景色颜色

  bd-normal      : 一般状态的边框颜色，为保持风格一致，要求与   bg-hover 的颜色一致
  bd-disabled    : 禁用状态的边框颜色，为保持风格一致，要求与   fg-disabled 的颜色一致
  bd-focus       : 焦点状态的边框颜色，通常用于激活状态的表单组件
```
