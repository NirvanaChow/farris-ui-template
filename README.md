# FarrisTheme
### 目录结构
```
src/
│ 
├── theme/
│   ├── bootstrap/
│   │  │ 
│   │  └── bootstrap.scss
│   │
│   ├── kendoui-bt/ kendoui bootstrap主题
│   │   ├── _custom.scss 覆盖变量，新自定义变量
│   │   └── all.scss
│   │
│   ├── kendoui-default/ kendoui 默认主题 ---------参考变量写法，实际未用
│   │   └── all.scss
│   │
│   ├── common/ 公共变量提取
│   │   ├── _custom-bt.scss 覆盖bootstrap变量，新自定义变量
│   │   ├── _custom-kendo.scss 覆盖kendo变量，新自定义变量
│   │   ├── _functions.scss farris 提供的方法
│   │   ├── _variables.scss farris 提供的变量
│   │   └── _overrides.scss 覆盖bt和kendo通用的变量
│   │
│   └── farris/
│       ├── bootstrap.scss 需要单独覆盖bt的样式
│       ├── kendo.scss 需要单独覆盖kendo的样式
│       └── all.scss farris自有的样式
│ 
│ 
│ 
├── themes/ 
│     ├── default/默认主题
│     │     │ 
│     │     ├── base 定义变量
│     │     │ 
│     │     ├── default 默认主题类型
│     │     │     │
│     │     │     ├── index.scss 变量文件入口
│     │     │     │
│     │     │     └── extend.scss 扩展样式文件入口
│     │     │ 
│     │     └── loose 宽松型主题类型
│     │          │
│     │          ├── index.scss 变量文件入口
│     │          │
│     │          └── extend.scss 扩展样式文件入口 
│     │      
│     │     
│     └── bootstrap.scss
│ 
│ 
│ 
└── assets/ 样式文件生成目录
    ├── docs/ 文档显示相关的样式
    │   ├── docs.css 
    │   └── docs.min.css
    │ 
    ├── elements/ 组件样式HTML样式片段
    │   ├── 
    │   └── 
    │ 
    ├── img
    │   └── 
    │ 
    ├── js/ 文档显示所需脚本
    │   ├── 
    │   └── 
    │ 
    └── themes/ 所有主题
        │ 
        ├── default 默认主题
        │   │ 
        │   ├── default 默认主题类型
        │   │ 
        │   └── loose 宽松类型
        |
        ├── 
        └── 

```
### 支持在线切换主题
1. 启动服务 npm run start ,启动后端服务 npm run backend

### 更新字体
1. 字体发布命令是farrisicon:publish
2. 提醒如果字体文件变更，先执行字体发布命令后再执行生成主题命令

### 生成主题
1. gulp theme --code 主题编码 --type 主题类型
2. gulp theme --code red --type loose 生成红色主题宽松型

### 如何发布主题？ 
1. 修改版本号 src/theme/package.json 和说明 README.md
2. npm run css-publish 
3. cd 到publish目录
4. 发布到latest 分支 npm publish --access=public 
5. 发布到dev 分支  npm publish --access=public --tag dev

### 编译的命令
1. npm run css-docs 合并文档样式
2. npm run css-all 生成farris 样式 npm run css-update 更新到资源目录
3. npm run css-publish 生成发布版farris

### 如何升级Bootstrap主题? 目前版本是4.1.3
1. 下载bootstrap最新主题
2. 清空 src/theme/bootsrap 所有文件
3. 拷贝Bt最新Sass文件到 src/theme/bootsrap 下
4. 修改文件 bootstrap.scss，在顶部增加 @import '../common/custom-bt';

### 如何升级KendoUI Bootstrap主题？ 
#### Default版本是3.4.0-dev.975061cd Kendo bt的SCSS版本2.18.0-dev.7867b944
1. 下载Kendo UI最新主题
2. 清空 src/theme/kendoui-bt 所有文件
3. 在工程里https://github.com/telerik/kendo-themes package找到bootstrap版本
4. 拷贝kendo UI Bootstrap版 scss文件到  src/theme/kendoui-bt 
5. 修改文件 _custome.scss,在顶部增加  @import '../common/custom-kendo';
6. 修改文件 _variable.scss, 将`
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
`
修改为`
@import '../common/custom-bt';
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import '../common/after-bt';
`


### 遇到问题
1. 命令执行有问题 css-lint-vars css-lint 
"css-main": "npm-run-all --parallel css-lint-vars css-lint css-compile --sequential css-prefix css-minify",

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
