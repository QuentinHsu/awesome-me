---
title: JavaScript
layout: "doc"
createTime: "2024-02-16"
next: false
---

## var 与 let/const 的区别

|       |  使用范围  |   作用域   | 变量提升 | 重复申明 |
| ----- | :--------: | :--------: | -------: | -------: |
| var   |    all     | 函数作用域 |     存在 |     允许 |
| let   | ES6 及以后 | 块级作用域 |   不存在 |   不允许 |
| const | ES6 及以后 | 块级作用域 |   不存在 |   不允许 |

### 适用范围

看表就是了

### 作用域

- `var`

  `var` 关键字声明的变量具有**函数作用域**或者**全局作用域**，这取决于它们在哪里被声明。

  - 如果 `var` 在函数内部声明，那么它在那个函数内部是可见的，但在函数外部是不可见的。

  - 如果 `var` 在函数外部声明，那么它在全局（浏览器下就是 `window`，Node.js 下就是 `global`）范围内都是可见的。

  例如：

  ```javascript
  function example() {
      var x = 10; // x 只在这个函数内部可见
  }

  var y = 20; // y 在全局范围内都是可见的

  ```

- `let`/`const`

  `let`/`const` 关键字声明的变量具有**块级作用域**。只在它所在的代码块有效。

  ```javascript
  {
    let a = 10;
    var b = 1;
  }
  a // ReferenceError: a is not defined.
  b // 1
  ```

### 变量提升

由于变量提升的概念存在，所以还有个“**暂时性死区**”的问题：**当我们使用 `let` 或 `const` 声明变量时，从代码块开始到声明语句之间的区域就被称为"暂时性死区"。在此区域内，任何对该变量的访问都会抛出一个错误。**

```javascript
console.log(myVar); // undefined，因为 var 声明的变量会被提升
console.log(myLet); // 抛出错误：myLet is not defined

var myVar = 'hello';
let myLet = 'world';
```
