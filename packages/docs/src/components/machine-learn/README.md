# Machine Learn

## 全局参数

URL 格式：`/void-ui/machine-learn/<component>?<arg1>=value1&<arg2>=value2&<arg3>=value3`

> 注意：url 参数需要经过 encode，否则 `#` 等符号会导致传参出现异常

`background`, `background-color`, `background-image` 设置页面的 CSS 背景颜色和图片

## Card

`/void-ui/machine-learn/card`

### 参数

- cardStyle 阴影级别，0-8
- header, headerStyle
- image, imageStyle
- title, titleStyle
- summary, summaryStyle
- content, contentStyle

### 示例

header、image 和 content 的组合

- background-image=url("https://img2.tgbus.com/i/gl_1080p/data/sharedata/XY-IGDB-1/e99308c9bac678c78ad32d74081749ca.JPEG")
- cardStyle=border-radius:8px
- header=卡片头部文字
- headerStyle=font-size:22px
- image=https://img2.tgbus.com/i/gl_game-screenshot-preview-800w/data/sharedata/XY-IGDB-1/8968216c53163ba69e50fceb6b9c2fb7.JPEG
- content=卡片内容，稍微长一点

/void-ui/machine-learn/card?cardStyle=border-radius:8px&raise=4&header=卡片头部文字&headerStyle=font-size:22px&content=卡片内容，稍微长一点&image=https://img2.tgbus.com/i/gl_game-screenshot-preview-800w/data/sharedata/XY-IGDB-1/8968216c53163ba69e50fceb6b9c2fb7.JPEG&background-image=url("https://img2.tgbus.com/i/gl_1080p/data/sharedata/XY-IGDB-1/e99308c9bac678c78ad32d74081749ca.JPEG")

image、title 和 summary 的组合

- background-image=url("https://img2.tgbus.com/i/gl_1080p/data/sharedata/XY-IGDB-1/e99308c9bac678c78ad32d74081749ca.JPEG")
- image=https://img2.tgbus.com/i/gl_game-screenshot-preview-800w/data/sharedata/XY-IGDB-1/8968216c53163ba69e50fceb6b9c2fb7.JPEG
- cardStyle=border-radius:8px
- contentStyle=background-color:#eee
- title=卡片标题文字
- summary=卡变摘要文字

/void-ui/machine-learn/card?cardStyle=border-radius:8px&contentStyle=background-color:%23eee&title=卡片标题文字&summary=卡变摘要文字&image=https://img2.tgbus.com/i/gl_game-screenshot-preview-800w/data/sharedata/XY-IGDB-1/8968216c53163ba69e50fceb6b9c2fb7.JPEG&background-image=url("https://img2.tgbus.com/i/gl_1080p/data/sharedata/XY-IGDB-1/e99308c9bac678c78ad32d74081749ca.JPEG")
