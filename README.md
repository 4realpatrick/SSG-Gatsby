# 项目构成
项目使用Express作为后端依赖提供数据，前端使用react搭建，样式使用tailwindCSS以避免class命名问题

## 文档

[Express](http://expressjs.com/)

# 启动项目
现在项目只实现了后端热更新和TS类型限定，启动命令
gulp server-watch 开启gulp监听
npm start 开启nodemon后端热更新
只要service里面的index.ts发生变化，就会重新启动项目