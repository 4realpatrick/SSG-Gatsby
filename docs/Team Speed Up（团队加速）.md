# Team Speed Up（团队加速）

# 排版
代码如何断句，换行，大小写，命名都是排版，排版是否合理，与阅读者的阅读质量密切相关。报纸排版有专门的报纸排版软件，代码排版也是专门的代码排版工具。
## Single Quote (单引号)
单引号命名的好处就是你不用每次都按住shift键，切来切去，还有输入法干涉，提高开发效率。


```typescript
const nums = ['1', '2']
// the benifit of use single quote that is your don't need to press key shift when you typing.
```


## Semi
分号，ES中支持带分号和不分号的断句， 各种IDE和🔧包的出现，使得我们不强制使用分号+敏捷开发变的更高效。
据我多个项目的实践结合成熟案例对比， Vue3.0 使用了TypeScript + eslint + prettier 也没有使用分号，代码很是清爽。推荐大家使用。


semi : false
```typescript
import React from 'react'
import TodoListPage from './pages/TodoListPage'
import GlobalStyle from './theme/index'
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoListPage />
    </>
  )
}

export default App
```
semi : true
```typescript
import React from 'react';
import TodoListPage from './pages/TodoListPage';
import GlobalStyle from './theme/index';
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoListPage />
    </>
  );
}

export default App;
```
不带分号有一些好处，
1、比如说缩减源代码的大小，
2、阅读起来更加清爽，
3、节省开发时间，你不需要在末尾增加额外的字符如果你是中文半角模式可能会更加麻烦


## BracketSpacing
括号之间孔隙，对比下图
```typescript
bracketSpacing = false
import {AppState} from '..'
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useMemo} from 'react'
import {ShortUniqueId} from '../../utils/gen'
import {TaskProgress} from '../../components/todo-list/Footer'
import {todoSlice} from './slicer'
import {ItemProps as TodoItemProps} from '../../components/todo-list/List'

bracketSpacing = true
import { AppState } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { ShortUniqueId } from '../../utils/gen'
import { TaskProgress } from '../../components/todo-list/Footer'
import { todoSlice } from './slicer'
import { ItemProps as TodoItemProps } from '../../components/todo-list/List'

```
## PrintWidth
排版的好坏是直接影响阅读者的阅读速度的， 对比一下下面的代码。
React官方使用的是80宽度，意思是一行最多80个字母，超过了就需要重新排版。至于他们为什么用80个字母，不用70、100，我想他们肯定是综合考量了。😁
```typescript
// printWidth = 90
const {
  add,
  remove,
  removeFinished,
  finish,
  syncTaskProcess,
  updateItem,
  resetItem,
  filter,
} = todoSlice.actions

// printWidth = unlimited
const { add, remove, removeFinished, finish, syncTaskProcess, updateItem, resetItem, filter } = todoSlice.actions
```


## React 项目排版
下面的配置参数是从React官方项目悄悄借鉴的😁  
Server-Components
```javascript
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

module.exports = {
  arrowParens: 'always',
  bracketSpacing: false,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  printWidth: 80,
};
```
React.js
```javascript

'use strict';

const {esNextPaths} = require('./scripts/shared/pathsByLanguageVersion');

module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  printWidth: 80,
  parser: 'babel',

  overrides: [
    {
      files: esNextPaths,
      options: {
        trailingComma: 'all',
      },
    },
  ],
};
```
