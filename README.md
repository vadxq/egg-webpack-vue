# egg-webpack-vue

egg webpack vue:从零开始搭建webpack vue本地开发部署环境，同时使用egg构建本地服务器

## 目录架构
```
week1/
  |
  ├──app/                     * egg代码主目录
  │   │
  │   │──controller/          * 业务逻辑主要代码
  │   │   │
  │   │   └──home.js          * 渲染静态文件
  │   │ 
  │   │──middleware/          * egg中间件
  │   │ 
  │   │──public/              * egg默认静态文件目录
  │   │ 
  │   │──view/                * egg默认模板文件目录
  │   │ 
  │   └──router.js            * egg路由文件
  │
  ├──client/                  * 前端代码主目录
  │   │
  │   │──public/              * vue生产打包静态文件目录
  │   │ 
  │   └──src/                 * vue代码主目录
  │       │
  │       │──index.html       * vue html模板
  │       │
  │       │──index.js         * vue入口文件js
  │       │
  │       └──pages/           * vue代码文件目录
  │
  ├──config/
  │   │──config.default.js    * egg默认配置文件
  │   │ 
  │   │──config.pro.js        * egg生产环境配置文件
  │   │ 
  │   └──plugin.js            * egg插件配置
  │
  │
  │──.gitignore               * Git忽略文件配置
  │
  │──package.json             * 包信息
  │
  │──README.md                * readme
  │
  └──webpack.config.js        * webpack配置文件

```

## egg后端

本地开发
```
npm run dev:server
```
部署
```
npm run start || npm start
// 127.0.0.1:8080
```
关闭服务
```
npm run stop
```

## vue前端

本地开发
```
npm run dev:client
```
部署
```
npm run build
```
本地开发预览
```
npm run dev
// 127.0.0.1:7001
```

## 遇见的坑
1. egg config添加参数时，有两种写法，一种是直接返回参数，文件引入命名为config。第二张为目前推荐用法
```
module.exports = appInfo => {
  const config = exports = {}

  config.view = {}

  return {
    ...config
  }
}
```

2. egg 添加渲染模板引擎（即添加插件），需在config目录新建plugin.js文件，添加相应plugin配置，同时在config里添加设置。以下举例html渲染模板引擎。
```
// plugin.js
module.exports = {
  // had enabled by egg
  viewStatic: {
    enable: true,
    package: 'egg-view-static',
  }
};

//config.js
config.view = {
  defaultViewEngine: 'static',
  mapping: {
    '.html': 'static',
  },
}

```

3. 修改默认静态文件目录。egg根目录需要有package.json文件和config,所以导致文件目录无法将前端代码和后端代码平行目录下。egg修改静态文件配置如下：
```
// static ,需自行引入path
config.static = {
  prefix: '/',
  dir: path.join(appInfo.baseDir, 'client/public'),
}
```

4. html无法被渲染？错误代码为开头为agent，需要使用html引擎，如上第二步介绍

5. egg区分开发环境和生产环境，config.default.js为默认配置，可以作为开发环境配置。config.pro.js为生产环境配置，同名配置覆盖默认配置，可以作为生产环境。
```
// development static,匹配前端开发代码
config.static = {
  prefix: '/',
  dir: path.join(appInfo.baseDir, 'client/.dist'),
}

// production static，匹配后端开发代码
config.static = {
  prefix: '/',
  dir: path.join(appInfo.baseDir, 'client/public'),
}
```

6. webpack配置文件-输出文件如何保证用户缓存更新？使用hash
```
filename: '[name].[hash].js',
```

7. vue模板loader?
```
{
  test: /\.vue$/,
  use: ['vue-loader'] // vue loader
}, {
  test: /\.css$/,
  use: ['vue-style-loader', 'css-loader'] // css loader
}

```
需要注意，当vue-loader版本为v15.X时，需要在引入：
```
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 同时在plugin引入
plugins: [
  // vue-loader need
  new VueLoaderPlugin(),
]

```

8. 更改vue打包文件目录
```
path: path.join(__dirname, './client/public'),
```

9. html怎么引入自定义目录文件,同时自定义加入打包后js？需要html-webpack-plugin插件
```
// 引入老需求
const HtmlWebpackPlugin = require('html-webpack-plugin');

//
// html 自动打包引入
plugins: [
  new HtmlWebpackPlugin({
    template:'./client/src/index.html', // 为你想要的html文件地址
    filename:'index.html' // 输出的名字，一般为index.html
  })
]
```

10. 发现开发打包的文件越来越多怎么清理？使用插件clean-webpack-plugi。需要注意，官方文档在最近更新出现的问题。引入和添加如下：

```
// 引入
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// plugins
plugins: [
  // html 自动打包引入
  new HtmlWebpackPlugin({
    template:'./client/src/index.html',
    filename:'index.html'
  }),
  // clean old files
  new CleanWebpackPlugin(),
  // vue-loader need
  new VueLoaderPlugin(),
]

```

11. 如何区分开发环境和生产环境？需要process.env.NODE_ENV参数。
```
path: process.env.NODE_ENV === 'production' // 输出路径
      ? path.join(__dirname, './client/public')
      : path.join(__dirname, './client/.dist'),

```

同时在package.json需要修改scripts。
```
"dev:client": "cross-env NODE_ENV=development npx webpack --mode development --watch",
"build": "cross-env NODE_ENV=production npx webpack",
```

注意，cross-env时一个npm包，为了解决windows电脑引起的问题。建议加上。

12. vue挂载入口文件和html
```
// index.js
import Vue from 'vue';
import App from './pages/App.vue';

new Vue({
  el: '#root',
  render:h => h(App)
})

// index.html
<div id="root"></div>

```
需要注意，id名和el挂载一致

## 差不多就这些啦~有疑问或者建议欢迎提issue哟~