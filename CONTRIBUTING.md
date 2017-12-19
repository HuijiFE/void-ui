# Build Setup

```bash
# install dependencies
npm run frame
# or
npm run frame:cn

# if Failed at the chromedriver@X.XX.X install: `node install.js`, try:
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver

# if Failed at node-sass@X.XX.X postinstall: `node scripts/build.js`, try:
npm rebuild node-sass
# or
npm install node-sass --sass-binary-site=https://npm.taobao.org/mirrors/node-sass/

# auto code generating script, it will generate follow files:
# src/controls/index.ts
# typings/controls/index.ts
# copy 'docs/examples/**/*.vue' to .txt files, for showing source code in documentation
npm run auto

# serve with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# build for production and view the bundle analyzer report
npm run build:lib --report
npm run build:docs --report

# run unit tests
npm test
```
