# TypeScript Coding in React Proposal (needed)



# Purpose
合理统一并达成一致的编码规范使得团队开发协助变的容易，尽可能避免在团队和代码增长的过程中使得维护和理解变得复杂。这不是规范、业内也没有统一的规范，我们要做的是让我们的团队保持一致。


# 文件与文件夹在React中的命名


## 基本命名
支持 - underscores (`_`) or dashes (`-`) 命名. 但是推荐使用 👍 CamelCase 

可允许,但不推荐
tell-me.ts   // good [👌](https://emojipedia.org/ok-hand/)
tell_me.ts // good [👌](https://emojipedia.org/ok-hand/)
_a.ts  // allowed [👌](https://emojipedia.org/ok-hand/)


推荐的
utils.ts  👍 // best
busStationHelper.ts 👍 // best
busStation.tsx 👍 //best


list.tsx  // 👎 bad 用于React 组件
Button.tsx  //👍 best    用于React 组件
List.tsx //👍 best 用于React 组件


## 文件夹小写 + 中杠 (-)


name-list-xxx-xxx 




## 文件名使用驼峰
name.js
nameList.js




## 扩展名
### *.ts文件名扩展名
非React文件需要使用 .ts 
### *.tsx文件名扩展名
React组件需要使用 .tsx 扩展名
### *.test.tsx & *.test.ts 单元测试扩展名
*.test.tsx  或  *.test.ts




# Necessary Type Definition(类型定义)
## 1、增加更多的可读性,和类型安全校验功能


```typescript
// bad 👎 
export const ElementSlot = ({ children }) => return <>{children}</> 
```


```typescript
// good 👍
type ElementSlotProps<T = {}> = {   // good
  data: T
  draggable: boolean
}
export const ElementSlot: FC<ElementSlotProps> = ({ children }) => return <>{children}</>
```
## 2、组件大小写问题?




```typescript
<button></button> // bad 👎 React组件需要用大写开头 为了避免和html tag 重名
<Button></Button> // good 👍 成功避免了重名问题
```
## 3、组件的单一性


```typescript
function Button({ children }) {
  // bad 👎 问题在于他包裹了 div, 导致了布局模式彻底改变
  return (
    <div>
      <button>{children}</button>
    </div>
  )
}

function Button({ children }) {
  // good 👍 命名和返回的Button一直,用户可以放心使用...
  return <button>{children}</button>
}
```


# import & export
导入导出有几种变体形式，因为历史原因，由于没有标准来的比较晚，随后有了我们常见的 import, export 关键字，它们都是ECMA Script Module标准的关键字，所以建议使用标准。
```typescript
import React from 'react'  recommended
const React = require('react')   not recommended

export {}  good
export default {} good 
```
## 页面导出


函数申明 后 导出默认 ✅ （推荐）
```typescript
function HomePage(){ return <> Home Page </>}  // 页面级
export default HomePage  //页面级用默认导出 考虑到支持动态导入
```


函数申明 同时 导出默认 ✅（推荐）
```typescript
export default function HomePage(){ return <> Home Page </>}  // 页面级 
//页面级用默认导出 考虑到支持动态导入
```


匿名箭头函数 同时 导出默认   👎（不推荐）
-src
  -pages
    -Home.tsx
    -About.tsx
使用场景一般在用户有上下文情况下   import Home from './src/pages/Home.tsx'
```typescript
export default () => { return <> Home Page </> }  // 页面级 
//页面级用默认导出 考虑到支持动态导入
```
## 导出组件


```typescript
function ListItem(){ return <ul><li>菜单</li></ul>} //组件级
export ListItem  // 组件级用直接导出 这样增加了语义
export default ListItem
```




## @导入排版参考
下面是一个导入文件&资源的一个参考，让可让你的导入文件更加美观
```typescript
优先默认导入 
import React from 'react'
import styled from 'styled-components'
import List, {Item} from './List'
常规导入
import {AppState} from '..'
import {useDispatch, useSelector} from 'react-redux'
import {ItemProps as TodoItemProps} from '../../components/todo-list/List'
导入TS类型文件
import type {IProps, IState} from 'Button'
import type {IProps, IState} from 'Button'
导入样式文件
import styles1 from './index.css'
import styles2 from './index.less'
import styles3 from './index.sass'
导入资源
import jpg from './icon1.jpg'
import png from './icon2.png'
import svg from './icon3.svg'
```


