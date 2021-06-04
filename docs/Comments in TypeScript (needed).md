# Comments in TypeScript (needed)

## 注释的范围
### 
### 1、公用函数、字段、属性需要增加注释. 
### 2、内部函数过于复杂的需要增加注释 
### 3、支持emoji形式的伪代码和图形化的注释(增加可读性和重要性) 
### 
## 
## 函数
入参和函数名需要给与注释, 返回值TypeScript可以识别, 一般不需要


```typescript
/**
* Creates an array from an iterable object.
* @param iterable An iterable object to convert to an array.
* @param mapfn A mapping function to call on every element of the array.
* @param thisArg Value of 'this' used to invoke the mapfn.
*/
 from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
```


## 变量
```typescript
/* Best: 清晰,甚至不需要注释 */
const units = 'μs';

/* Allowed: 不知道解析出是啥, 但是后面给了解析也是很友好的 */
const units = '\u03bcs'; // 'μs'

/* Good: use escapes for non-printable characters with a comment for clarity. */
return '\ufeff' + content;  // Prepend a byte order mark.

/* Poor: 读者不知道这个字符是啥?*/
const units = '\u03bcs'; //
```


## Emojis
```typescript
/**
 * Describe a point where HTMLElement e browser.
 * 🈲 Don't extend this interface... otherwise...
 */
export interface Point {
  x: number
  y: number
}

/**
 * `🚨` WARNING: 警告
 * Changing this will break down the build
 */
function build() {}
/**
 * `🧪` 试验性 Go to Mars is experimental function that will change in the feture...
 */
function toMars() {}
/**
 * `🚀` 性能提升 A sort function which has been optimized.
 */
function sort() {}

/**
 * `🧧` 发红包 Reward $20  Help me to solve this implement this function.
 */
function rotate(el: HTMLElement, degree: number): void {
  // TODO
}

```
![image.png](https://cdn.nlark.com/yuque/0/2020/png/2850637/1604908595971-b377adde-bf6a-4383-89fa-bc7f57bb0c68.png#align=left&display=inline&height=88&margin=%5Bobject%20Object%5D&name=image.png&originHeight=175&originWidth=775&size=19321&status=done&style=none&width=387.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/2850637/1604908691848-e99b9e5b-ec1a-4594-9463-414f88c3246e.png#align=left&display=inline&height=83&margin=%5Bobject%20Object%5D&name=image.png&originHeight=128&originWidth=601&size=15839&status=done&style=none&width=388)


- 🧪 experimental
- ✔️ corrent, true
- 🚀 optimize
- 🚨 emergency, urgent
- ⚙️ option
- 🔨 repiar
- 🎀 cool, excellent
- 🔌 plug
- 💡 innovation
- 🔮 foresee
- 🕳 pitfall
- 🧨💣 bomb
- 🔑 key, important
- 🧧 reward
- 🧩 interface
- 🦗bug
- 🔔⚠️ notice
- 📢 announce
- 🈲 forbidden, stop
- 📜📃🧾 scripts
- 📆📅 date, calendar
- 🗑 trush, obsolete
## ES Import


避免重复导入
```typescript
import {short} from './long/path/to/a/file.js';     
import {long} from './long/path/to/a/file.js';   // bad
```
一次性导入
```typescript
// Imports have the same path, but since it doesn't align it can be hard to see.
import {short, long} from './long/path/to/a/file.js'; //good
```


## ES Export


## Block Tags


### @deprecated
Document that this is no longer the preferred way.

```typescript
/**
 * @deprecated since version 2.0
 */
function old() {}
```
### @see
Refer to some other documentation for more information.

```typescript
/**
 * Both of these will link to the bar function.
 * @see {@link bar}
 * @see bar
 */
function foo() {}

// Use the inline {@link} tag to include a link within a free-form description.
/**
 * @see {@link foo} for further information.
 * @see {@link http://github.com|GitHub}
 */
function bar() {}
```
### 

### @todo
Document tasks to be comple
```typescript
/**
 * @todo Write the documentation.
 * @todo Implement this function.
 */
function foo() {
    // write me
}
```
### 

### @version
Documents the version number of an item.
```typescript
/**
 * Solves equations of the form a * x = b. Returns the value
 * @version 1.2.3
 */
function solver(a, b) {
    return b / a;
}
```
### 

### @[returns](https://jsdoc.app/tags-returns.html)
Document the return value of a function.
```typescript
/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
    return a + b;
}
```
### 
### [@author](https://jsdoc.app/tags-author.html)
Identify the author of an item.
```typescript
/**
 * @author Andrew Li <noberkli@gmail.com>
 */
function MyClass() {}
```


