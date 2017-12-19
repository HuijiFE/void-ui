# Common Layout 通用布局

通用布局样式。

## 主元素组件

```html
<vd-main :theme="lite"></vd-main>
```

通常作为根组件，渲染后的 html：

```html
<main class="vd-main theme-lite"></main>
```

通过 `theme` 属性设置明 / 暗主题

| theme            | lite                                      | dark                                      |
| :--------------- | :---------------------------------------- | :---------------------------------------- |
| color            | <color-cube color="#333333"></color-cube> | <color-cube color="#ffffff"></color-cube> |
| background-color | <color-cube color="#ffffff"></color-cube> | <color-cube color="#333333"></color-cube> |

## 响应式断点

| 断点   | 屏幕宽度 |
| ------ | -------- |
| xsmall | 320px    |
| small  | 768px    |
| medium | 1024px   |
| large  | 1440px   |
| xlarge | 1920px   |

## 区段与左右边界

通用 css 类名 `vd-section` 与 `vd-container`.

### vd-section

在垂直方向上将一个页面分割为多个主要区段。

<section-basic></section-basic>

### vd-container

上下不同区段的主要内容互相之间对齐左右边界。

<container-basic></container-basic>

> vd-container 是响应式的

| 断点   | 宽度   |
| ------ | ------ |
| xsmall | 100%   |
| small  | 100%   |
| medium | 880px  |
| large  | 1200px |
| xlarge | 1200px |

## Gutter 间隔

各种组件中的 padding 与 margin 遵循标准的间隔尺寸。

|        |      |
| ------ | ---- |
| xsmall | 8px  |
| small  | 16px |
| medium | 24px |
| large  | 32px |
| xlarge | 40px |

<script>
import SectionBasic from 'docs/examples/layout/common/SectionBasic';
import ContainerBasic from 'docs/examples/layout/common/ContainerBasic';

export default {
  components: {
    SectionBasic,
    ContainerBasic
  },
};
</script>
