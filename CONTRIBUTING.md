# Build Setup

## Install dependencies

```bash
# install dependencies
npm run frame
# or
npm run frame:cn

# if failed at the chromedriver@X.XX.X install: `node install.js`, try:
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver

# if failed at the node-sass@X.XX.X install: `node scripts/build.js`, try:
npm rebuild node-sass
# or
npm install node-sass --sass-binary-site=https://npm.taobao.org/mirrors/node-sass/

# if failed at node-gyp rebuild: `gyp ERR! stack Error: not found: make`, try:
sudo apt-get install -y build-essential
```

## Development

```bash
# auto code generating script, it will generate follow files:
# src/controls/index.ts
# src/index.scss
# copy 'docs/examples/**/*.vue' to .txt files, for showing source code in documentation
npm run auto

# serve with hot reload at localhost:8192
npm run dev
# or
npm start
```

## Build

```bash
# build for production
npm run build

# build for production and view the bundle analyzer report
npm run build:lib --report
npm run build:docs --report
```

## Test

```bash
# run unit tests
npm run unit

# run unit tests and post result to coverall.io
npm run test
```
