# lets code 项目代码库

每个人checkout一个自己的分支，然后提交代码到本仓库

分支命名规范：**s(期数)/姓名**， 

比如第二期刘文静的提交，就是 **s2/liuwenjing** ，第三期就是 **s3/liuwenjing**， 一期一个分支 


## 项目结构说明

### @types
类型声明

### src
项目代码

### src/bootstrap
项目启动逻辑

### src/components
公共组件

### src/pages
不同路由下的页面

### src/store
redux store相关的东东

## 项目操作说明

### 代码提交规范 （二选一）
* git add 之后通过npm run commit或者yarn commit来提交
* vscode 安装commitizen插件，通过插件来提交

## 知识点

### 构建任务
* 构建任务
  * 构建任务的配置[webpack-config](http://gitlab.beisencorp.com/ux-public/webpack-config-5)
  * 参数
    * readonly entry?: Entry; // 项目入口
    * readonly output?: webpack.Configuration["output"]; // 输出配置
    * readonly mode?: webpack.Configuration["mode"]; // webpack mode
    * readonly define?: { [key: string]: string }; // 给definePlugins用的，用来字符串的替换
    * readonly useCommonChunk?: boolean; // 是否使用common chunk， almost deprecated
    * readonly extractCss?: boolean; // 是否extract css 影响热更新，一般开发环境关掉，生产构建的时候打开，鲁班就是关掉的，非常影响性能
    * readonly cssModule?: boolean; // 是否开启css modules， 开启的话，就可以import css 文件，并且把selector当常量那样用，
    * readonly postCSS?: boolean; // 是否开启postcss，需要自己配置postcss
    * readonly sourceMap?: string | false; // 是否使用sourceMap，影响构建速度，也影响我们接下来的调试，生产默认使用隐藏的sourceMap,需要开发手动加载
    * readonly publicPath?: string; // 加载资源的地址，影响异步模块的加载，和一些静态资源的加载
    * readonly corejs?: number; // 使用的core-js的版本，给babel-presets-env用，用来做Polyfill
    * readonly targets?: {[key: string]: string;}; // 兼容性配置，参考browserlist, 建议不配置，通过配置package.json来实现
    * readonly alias?: {[key: string]: string;}; // 别名，比如把React alias到preact上，
    * readonly devServer?: DevServerConfiguration; // 参考devServer的配置，
    * readonly externals?: webpack.Configuration["externals"]; // external 可以认为是全局上有，构建的时候不需要的东东配这里来
    * readonly hostPage?: string; // 自定义承载页，
    * readonly hashSize?: number; // h构建文件名hash的部分的长度，默认20， 其实没必要这么大
  * webpack-config本质上就是一个方法，返回值是一套webpack的配置对象，目标就是为了简化webpack配置的过程，没有什么特殊的地方

### 定制构建任务
* 定制构建任务
  * 通过参数
  * 拿到返回值后直接修改返回的对象

### 构建优化(代码加载性能)
这里主要是指的splitChunk配置

#### 原来的拆分策略是这样的：（现在依然是默认的拆分策略）
* webpack-runtime,这个是webpack运行时（声明webpack运行的方法，变量，以及安装，加载模块等等功能），内容不是固定的，根据项目构建时的具体情况生成
* vendors, 同步模块里引用的node_modules里的代码进这个
* commons, 异步模块里共享过的，比如我项目里有多个import(), 这多个import的引用关系上同时引用的包，包含自己写的和node_modules里的，所以common本身也是个异步模块
* main, 项目启动入口


基于这个策略，这个策略是在webpack 2的时候定下来的，那个时候webpack本身还有一些明显的缺陷，配置起来也相对麻烦，这套策略有好处也有坏处，好处就是代码分隔的策略很清楚，在一般情况下,做到了合理利用浏览器的连接数限制，并行加载前端代码，又可以有机会让不同的构建产生更多相同的代码，利用浏览器的缓存机制，减少网络请求的时间。不好的地方就是我们项目的在启动时，需要同步加载的js和css不是十分确定的，大部分情况而且文件也比较多，但不会超过浏览器链接数的上限。

#### 新的策略：（需要稍微配置一下）
除了main全部都是异步代码，也就是我们现在模板里展示的用法

1、项目的entry point只有一个，而且肯定没有css，那么配置的更新和同步就会很方便。
2、项目中的代码可以充分的打散，充分发挥http2的优势
3、更好的利用缓存的优势，多次构建过程会产生更多相同结果的文件，在线后不需要重新加载。(未验证)

要使用这种方式需要配置：
1. useCommonChunk: false
2. 在保证原来项目结构不变的基础上，创建一个新文件，通过一个import()来引用项目原来的entry，同时用这个文件替换webpack中配置的entry。

这里有一个比较关键的点：就是如果一个chunk是异步的，那么这chunk相关的css也是异步加载的


### browserlist （兼容性配置）
这个配置会影响webpack的输出代码和babel转换的结果，有多种配置的方式，虽然叫browserlist，但是对构建结果目标运行环境的一个指导，不是只能配置浏览器，通过这个配置让工具生成的代码，能运行在指定的环境上比如一个箭头函数，如果目标运行环境是最新的chrome，就不会做任何处理，但如何是要运行在浏览器上，就会转换成普通的function, 再根据函数当中有没有使用this做区别性的处理。建议配在package.json上，也可以配置在browserlistrc上

### core-js
标准的模块化的js库，包含到ECMA2021的Polyfill, 比如promise, symbols, collections,map, set 等等， 你可以自己按需加载，比如你的react 16的项目想支持ie10, 就需要运行环境支持Map, Set, Symbols这类对象，就可以手动引用corejs中对应的polyfill, 也可以通过babel这类的工具根据你的代码自动引入。

### 内置支持的模块类型（此模块非js module，而是可以被webpack处理的文件）

#### 代码：
jsx? tsx?, mjsx? 代码
json (内置支持)

#### 媒体资源：
assets, 图片，音频，视频==常用可以直接展示在浏览上的媒体文件

#### 样式：
less 
css
sass
以上这些类型的文件基本上可以支持我们90以上的需求了。

## 业务

### bootstrap
框架的核心功能，它定义了应用顶层组件，路由规则，项目状态管理方案
* 顶层组件， 
  * RouterOnly, 只应用路由，
  * ReduxAndRouter, 除了路由规则之外还包含React-redux的Provider
* 路由规则
  * 说明可以参考[星辰的文档](https://wiki.beisen-inc.com/pages/viewpage.action?pageId=248774745)
  * src下创建目录x，并创建page-view.tsx, 当访问/x的时候，就会自动渲染这个page-view默认导致出组件，如果访问/x/y，就需要在src/page/x/y目录下写一个page-view即可
    * 这一步是通过react-router-dom的hook来获取和更新当前的路由信息，再通过import()来加载模块实现的，原理比较简单
  * 如果访问的路由地址没有对应的page-view.tsx，测自动渲染src/pages/404目录下的page-views
* 状态管理方案，
  * 就是react-redux
  * store需要自己在项目中创建，这里没有限制是因为创建store的方式不止一种(redux, toolkit)，就完全交给业务层来做了。
  * 热更新的逻辑放在业务里


### 热身：
  * 除去ReactDom.render，在react内部有两种正常的办法来更新
    * setState useState
    * dispatch useReducer
  * 状态变更，组件重新render，过程中拿到新的数据，并且返回新的结果
  * 当store更新的时候，react-redux根据selector从store里拿数据，并且对比上次拿到的结果，如果相同就什么都不做，如果不同的话，就会执行一次dispatch，更新一个内部(无用)state，从而强制组件做一次更新。看起来很高级，其实很简单

### react-redux
* react-redux在顶层提供了状态的Provider组件，这个provider把store和订阅的方法放到了context里. 这样react-redux知道store发生了变化，然后通过connect或者useSelector通知到组件层，再用上面说的方法让组件来更新。
* 通过mapStateToProps或者useSelector来消息消费中的数据，
  * mapStateToProps是高阶组件，当store数据发生变化的时候，根据你map的数据做一次浅比较如果相等组件就不更新了，如果不相等，就会去重新渲染组件
  * useSelector是hook，store数据发变化的时候，会执行useSelector传入的方法，对useSelector返回的数据做一次===比较，如果相等就啥也不干，如果不相等，就强制组件做一重新渲染，同时从store里selector出想要的值。
    * 所以使用useSelector的时候，根据他的对比策略，不要新建数据，也不要同时返回store中的多个数据（因为这意味着你要创建新的数据容器，对象，或者数组），如果要访问store中的多个字段，可以多写几个useSelector,然后在useSelector外部进行处理。
    * 也可以使用类似reselect这种工具来写selector。（这样你就可以返回多个store里的字段了 ）
    * 不要在selector里依赖props，比如通过filter来过程store中的某个数组
  * 使用了mapStateToProps或者useSelector的组件，我们可以叫做container组件，是负责用来获取和分发数据的中间层组件
    * 我们可以在应用中多做几层container，减少props深层传递的压力，但不要在所有的组件里都做。

### Layout
* Layout可以认为是所有页面共用的部分，比如站点的导航条，你肯定不需要每个页面都写一遍，在使用顶层组件的时候，可以写一个layout组件并且传给顶层组件，然后在这个layout组件中用{children}来渲染页面的组件即可。
* pages下的页面可以通过设置静态属性useLayout=false，来让这个页面不使用Layout