# 如何使用

## 直接引用 git 仓库。

首先需要安装 [@vue/cli 3.0](https://www.npmjs.com/package/@vue/cli)

```bash
sudo npm i -g @vue/cli

# 或者

sudo yarn global add @vue/cli
```

克隆 Void-UI 到你的工作目录，并切换至 alpha-1.0 分支

```
cd /path/to/your/workspace
git clone git@github.com:HuijiFE/void-ui.git
cd void-ui
git check out alpha-1.0
```

返回工作目录，创建 vue 项目（项目和 void-ui 处于平级目录）

```
vue create my-project
```

选择预设时选择“Manually select features”（手动选择特性）,接下来依次选择：

```
Vue CLI v3.0.0-rc.3
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, CSS Pre-processors, Linter
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript for auto-detected polyfills? Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): SCSS/SASS
? Pick a linter / formatter config: TSLint
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```

修改项目设置文件：

tsconfig.json

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "lib": [
      "dom",
      "scripthost",
      "dom.iterable",
      "es5",
      "es2015",
      "es2016",
      "es2017",
      "es2018",
      "esnext"
    ],
    "types": ["node"],
    "strict": true,
    "strictNullChecks": true,
    "strictPropertyInitialization": true,
    "jsx": "preserve",
    "jsxFactory": "h",
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@void/*": ["void/*"]
    }
  },
  "include": ["src/*", "void/*", "scripts/**/*.ts", "typings/*.d.ts"],
  "exclude": ["node_modules"]
}
```

vue.config.js

```js
module.exports = {
  // ...

  chainWebpack(config) {
    const context = config.store.get('context');
    const resolve = _path => path.resolve(context, _path);

    // 设置 void-ui 的引用路径别名
    config.resolve.alias
      .set('@void', resolve('void'));

    // 关闭 webpack 对 symlinks 的处理，重要！
    config.resolve.symlinks(false);
    }
  },

  // ...
}
```

进入项目，创建 void-ui 的引用 symlink

```bash
cd vue-project
ln -s ../void-ui/src/ void
```

在 src 中创建两个 `.d.ts` 类型声明文件

```ts
// shims.css.d.ts
declare type ClassName = (string | { [x: string]: any })[];

// shims.fa.d.ts
declare module '@fortawesome/vue-fontawesome' {
  import { FunctionalComponentOptions } from 'vue';

  const FontAwesomeIcon: FunctionalComponentOptions;
  const FontAwesomeLayers: FunctionalComponentOptions;
  const FontAwesomeLayersText: FunctionalComponentOptions;

  export { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText };
  export default FontAwesomeIcon;
}

//
```

开始编写项目代码：

src/main.ts

```ts
import Vue from 'vue';

// 插件形式安装 void-ui
import VoidUI from '@void/VoidUI';
Vue.use(VoidUI);

// Font Awesome Icon
// API: https://fontawesome.com/how-to-use/font-awesome-api
// tslint:disable:match-default-export-name
import fontawesome from '@fortawesome/fontawesome';
import fontawesomeSolid from '@fortawesome/fontawesome-free-solid';
import fontawesomeRegular from '@fortawesome/fontawesome-free-regular';
import fontawesomeBrands from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
fontawesome.library.add(fontawesomeSolid, fontawesomeRegular, fontawesomeBrands);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
```

更详细用法查看 game-lib 项目源码（需要内部帐号）：
https://glab.tagtic.cn/zhangxiaodong/fe-game-lib
