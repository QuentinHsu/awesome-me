---
title: "JavaScript 的提升"
layout: 'doc'
createTime: "2022-04-07"
next: false
---

最近在回顾 JavaScript 的基础。

于是碰到了 **提升** 这个概念

关于，提升，一直有印象的，就是 `var` 这个变量提升。

> [!TIP] 提示
> 每个作用域都会有“提升”操作，提升操作会将变量提升到作用域的顶部。

## `var` 的提升

使用 `var` 声明的变量，会在所有的作用域中提升。

1. 基本

   ```JavaScript
   var a = 'a001'
   console.log(a) // a001
   ```

2. 先打印，接着声明，赋值

   ```JavaScript
   console.log(b) // undefined. ReferenceError: b is not defined
   var b = 'b001'
   ```

   在编译器中等价于

   ```JavaScript
   var b
   console.log(b) // undefined. ReferenceError: b is not defined
   b = 'b001'
   ```

3. 重复声明并赋值

   ```JavaScript
   var c = 'c001'
   var c = 'c002'
   console.log(c) // c002
   ```

   但是你假如对使用 `let`/`const` 声明的变量进行了重复声明，那么就会报错。

   ```JavaScript
   let c1 = 'c1001'
   let c1 = 'c1002' // SyntaxError: Identifier 'c1' has already been declared
   console.log(c1)

   const c2 = 'c2001'
   const c2 = 'c2002' // SyntaxError: Identifier 'c2' has already been declared
   console.log(c2)
   ```

4. 先“赋值”，再声明

   ```JavaScript
   d = 'd001'
   var d
   console.log(d) // d001
   ```

5. 仅“赋值”，就会变成 window 上的变量

   ```JavaScript
   e = 'e001'
   console.log(e) // e001。若后续同一作用域下代码无 `var e`，那这 `e` 便是 window.e 了。

   // or
   function f() {
     e = 'e002'
   }
   f()
   console.log(e) // e002。跟上面的 `e`，是相同的情况

   // but
   if (false) {
     e = 'e003'
   }
   console.log(e) // undefined。跟上面的两个 `e`，是不同的情况。因为不存在变量提升，代码也没有执行 if 块里的
   ```

6. 在函数中

   ```JavaScript
   function g() {
     var h = 'h001'
     console.log('in function', h) // h001
   }
   g()
   console.log('in window', h) // undefined。因为函数内部的变量，不会提升到作用域的顶部，因为该变量会在调用函数之后随即被销毁掉。
   ```

## 函数的提升

或许是好久没看概念，这两天看书发现：

函数里也是有“提升”的。

但仅限于函数声明会有提升，而函数表达式是不会提升的。

> [!TIP] 《JavaScript 高级程序设计（第 4 版）》P297
> 函数声明会在任何代码执行之前先被读取并添加到执行上下文。这个过程叫作函数声明提升（function declaration hoisting）。在执行代码时，JavaScript 引擎会先执行一遍扫描，把发现的函数声明提升到源代码树的顶部。因此即使函数定义出现在调用它们的代码之后，引擎也会把函数声明提升到顶部。

具体表现为

```JavaScript
// 没问题
console.log(sum(10, 10)) // 20
function sum(num1, num2) {
  return num1 + num2
}
```

但是把上述的函数声明改为等价的函数表达式，那么执行的时候就会出错。

```JavaScript
console.log(sum(10, 10)) // Uncaught ReferenceError: sum is not defined
let sum = function (num1, num2) {
  return num1 + num2
}
```

哪怕是你换成用 `var` 声明的函数，也会出错。

```JavaScript
console.log(sum(10, 10)) // Uncaught ReferenceError: sum is not defined
var sum = function (num1, num2) {
  return num1 + num2
}
```

除了“函数什么时候真正有定义”这个区别之外，这两种写法是等价的。

## 提升的优先级

### 重复的声明，将被忽略掉

先看点简单的例子

```JavaScript
foo()
var foo
function foo() {
  console.log(1)
}
foo = function () {
  console.log(2)
}
```

上述代码执行的结果是：1

在编译器中，被理解为：

```JavaScript
function foo() {
  console.log(1)
}
foo()
foo = function () {
  console.log(2)
}
```

> [!TIP] 注意
> `foo()` 这里的 `foo` 只是一个函数名，不是[函数声明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#函数声明)。函数声明是包含函数名的。在此也可以理解为是个变量，函数变量。跟之后的 `var foo` 中的 `foo` 是相同的，同名变量。所以，后面的 `var foo` 将被忽略掉。因为是**重复的声明**。

### 函数声明会被提升到变量声明之前

再来看看这个例子

```JavaScript
console.log('a -1', a) // a -1 f a()
console.log('a() -2', a()) // 这里是先执行 a()，后打印返回值
var a = 1
function a() {
  console.log('函数 a', 1)
  return `函数 a 2`
}
console.log('a -8', a) // a -8 1
a = 3
console.log('a() -10', a()) // a not a function，该错误会阻断后续的代码执行
console.log('a -11', a)
```

### 重复的声明，将被忽略掉

变量的值，只会在重新赋值后才会被改写。而重复的声明，会被忽略，并不会影响什么。

> [!TIP] 援引自 tc39/ecma262 中的阐述
> A variable defined by a VariableDeclaration with an Initializer is assigned the value of its Initializer's AssignmentExpression when the VariableDeclaration is executed, not when the variable is created.
> [source](https://tc39.es/ecma262/#sec-variable-statement)

1. 变量的第一次声明，会被默认赋值为 `undefined`。假如接着赋值，那么就会覆盖掉默认值。

#### `var` `let`

只声明，不赋值，默认值为 `undefined`。

除非是显式的赋值，否则变量的值，在非第一次执行变量声明时，是不会被赋值的。是无效的，会被编译器忽略掉。

#### `const`

必须声明并赋值（初始化），否则报错。

只声明，不赋值。是无效的声明。

只声明，或再打印它：`const` 声明中缺少初始化器。

```JavaScript
const b // SyntaxError: Missing initializer in const declaration
// or
const b
console.log(b) // SyntaxError: Missing initializer in const declaration
```

当使用这个变量去赋值给其他变量的时候，会提示未定义

```JavaScript
const b
const c = b // ReferenceError: b is not defined
```

在 JavaScript 引擎里，

```JavaScript
var a = 2
```

被看作两个单独的语句

```JavaScript
var a // 编译阶段的任务
a = 2 // 执行阶段的任务
```

> [!TIP]《你不知道的 JavaScript（上卷）》4.4 小结
> 这意味着无论作用域中的声明出现在什么地方，都将在代码本身被执行前首先进行处理。可以将这个过程形象地想象成所有的声明（（var）变量和函数（声明））会被“移动”到各自作用域的最顶端，这个过程被称为提升。
>
> 声明本身会被提升，而包括函数表达式的赋值在内的赋值操作并不会提升。
>
> 要注意避免重复声明，特别是当普通的 var 声明和函数声明混合在一起的时候，否则会引起很多危险的问题！
