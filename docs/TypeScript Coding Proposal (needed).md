# TypeScript Coding Proposal (needed)

# Purpose (目的)
这是关于TS命名相关的一份规范性文档，注意，这不是权威，也不是最合理的，但是参考了大量的案例和沉淀，旨在使用TS开发过程中，团队有一致性，尽最大可能避免理解歧义与偏差。（如果你有合理更好的建议可以帮忙完善）
# Naming (命名)


## PascalCase (Type, Enum, Namespace, Interface, Class, Module, Tuple)


```typescript
type Hobby = string
type WebConnection = { ethernet: unknown }

enum DragComponentItemType {
  Input = 'input',    // recommended
  Button = 'button',  // recommended
  Any = 'any',  
  Emoji = 'emoji',
  ContainerBox = 'containerBox',
  select = 'select' // bad,  you should use uppercase at the beginning.
}
enum PrimaryColors{
    R,
    G,
    B
}
namespace ExternalComponents {
   const TableLayout: InherentComponentProps = {
    style: {width: 200,height: 200}
  }
   const BoxLayout = {
    style: {width: 200,height: 200}
   }
}
// 公有接口需要加I
// 加I为interface缩写  用于区分 💡 type = Dispose  💡 interface = IDispose
export interface IDispose{    
    dispose():void
}
// 私有接口可以不需要加I 内部使用
interface Dispose{ 
		dispose():void 
}

module City{} // module
class Bank {} // class
abstract class Element {}   // abstract class
type Vector4D = [x: number, y: number, z: number, w: number] // tuple
  
```


## CamelCase (Function, Property, Local Variable, Field)


```typescript
function tellMeYourName() {}
function show() {}

{
  name: 'Andrew'
  age: 17
  bodyFat: '18%'
}
Array.aggregate = <T>(pre: T, next: T) => T
let education = 'bachelor degree'
const cities = ['changdu', 'beijing']
const myName = 'Andrew'
```


## FullName old-fashioned (not recommended)


```typescript
const DO_NOT_COPY_THIS = true
```


# Typing (类型)


## Interface
定义实现细节需要使用接口, 内部和外部使用的区别


```typescript
export interface IDispose{  //外部使用 需要加  ' I '   Dispose    => IDispose
    dispose():void
}
interface Dispose{
    dispose():void
}  //内部使用
```


## Specific Parameter & Return Type(明确入参和返回参数)
指定参数和返回类型


```typescript
function add(a, b) {
  return a + b
  // bad
}

function add(a: number, b: number): number {
  return a + b
  // good
}
```


## Return Const Type (返回常量)
在某些场景下不希望用户修改返回值的变量，需要明确(正常情况下可以不考虑)


```typescript
function getNameList(){
  return ['Andrew','Mary']
}
function getNameList(): readonly string[]{
    return ['Andrew','Mary']
}
```


# Access Modifier (访问修饰符)
## 抽象类和类需要增加修饰符
类、抽象类和接口的访问修饰符 private, protected, public


```typescript
class Bank {
  //类名称需要大写
  private bankInfo //🔑类成员需要标记修饰符
  constructor(public readonly address: string) {
    //🔑类成员需要标记修饰符
  }
  protected getFinancialReport() {} //🔑类成员需要标记修饰符
  public withdraw() {} //🔑类成员需要标记修饰符
}
```


    
```typescript
abstract class Element {
  constructor(public readonly address: string) {
    //🔑标记修饰符
  }
  abstract public getLocation()
  protected readonly name
}
```


 接口访问修饰符是高级用法暂时可以不考虑


```typescript
export interface IDispose{ 
   protected dispose():void  //🔑标记修饰符
}

export interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;  //默认是 public 可以省略
}
```










