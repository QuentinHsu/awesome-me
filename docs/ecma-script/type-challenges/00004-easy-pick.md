---
title: "Pick"
layout: "doc"
createTime: "2024-04-15"
next: false
---

<Badge type="info" text="easy-00004" />

不使用 `Pick<T, K>` ，实现 TS 内置的 `Pick<T, K>` 的功能。

**从类型 `T` 中选出符合 `K` 的属性，构造一个新的类型**。

例如：

```TypeScript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
```

::: details 题解

- 直接答案

  ```TypeScript twoslash
  type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
  }
  ```

- 完整运行代码

  ```TypeScript twoslash
  type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
  }
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
  }
  ```

:::

## 需要了解的

### `keyof`

`keyof` 运算符接受一个对象类型，并生成其键的字符串或数值文字并集。

```TypeScript twoslash
type Point = { x: number; y: number}
type P = keyof Point
```

[Official Document](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)

```TypeScript twoslash
namespace Syntax_keyof {

  // 商品规格
  interface IProduct {
    name: string
    price: number
    stock: number
    category: string
  }
  // 从 IProduct 中提取 key 的值
  type keyOfValue = keyof IProduct
  let key: keyOfValue
  // 如何提现 key 获取到了 IProduct 的所有 key 的值
  key = 'name'
  key = 'price'
  key = 'stock'
  key = 'category'
  // key = 'name1' // Error: Type '"name1"' is not assignable to type 'keyOfValue'.

}
```

### `in`
