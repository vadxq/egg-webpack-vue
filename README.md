# egg-webpack-vue

egg-webpack-vue: 从零开始搭建webpack vue本地开发部署环境，同时使用egg构建本地服务器

## 目录架构
```
egg-webpack-vue/
  |
  ├──app/                     * egg代码主目录
  │   │
  │   │──controller/          * 业务逻辑主要代码
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
  │
  ├──config/
  │
  │──.gitignore               * Git忽略文件配置
  │
  │──package.json             * 包信息
  │
  │──README.md                * readme
  │
  └──webpack.config.js        * webpack配置文件

```