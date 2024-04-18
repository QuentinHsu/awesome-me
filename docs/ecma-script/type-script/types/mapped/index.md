---
title: "映射类型"
layout: "doc"
createTime: "2023-11-10"
next: false
---

在 TypeScript 中，映射类型是一种特殊的泛型类型，可以从一个旧的类型中创建新的类型。这是通过对旧类型的每个属性进行“映射”来实现的。这种映射操作可以使我们能够创建新的类型，这些类型能够反映旧类型的属性的某些特性。

比如，我们可以创建一个映射类型，使得一个类型的所有属性都变为只读，或者所有属性都变为可选。

```TypeScript twoslash
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}

type Partial<T> = {
    [P in keyof T]?: T[P];
}
```

在上面的例子中，`Readonly<T>` 类型会创建一个新的类型，这个类型的所有属性都是只读的。`Partial<T>` 类型则会创建一个新的类型，这个类型的所有属性都是可选的。

这种映射类型的能力，使得我们能够更加灵活地处理类型，而不需要手动创建新的类型。这对于提高代码的可维护性和可重用性非常有帮助。

## `Partial`

`Partial` 是 TypeScript 的一个内置工具类型，它产生一个新的类型，该类型将原始类型的所有属性都设置为可选。

### 定义

```TypeScript twoslash
type Partial<T> = {
    [P in keyof T]?: T[P];
}
```

### 应用

当然，`Partial` 类型的应用其实非常广泛，除了常见的在处理 REST API 和对象更新时使用，还有以下一些应用场景：

1. **默认参数和选项对象**：在 JavaScript 中，经常会遇到这样的函数，它们的参数是一个选项对象，这个对象的所有属性都是可选的。使用`Partial`类型，你可以很容易地把这种模式转换到 TypeScript 中。

```TypeScript twoslash
interface Options {
  color: string
  volume: number
}

function configure(options: Partial<Options> = {}) {
  // ...
}
```

在这个例子中，`configure` 函数接受一个选项对象，这个对象的所有属性都是可选的。这就意味着你可以调用 `configure()` 而不传递任何参数，或者只传递一部分选项。

2. **组件的 props**：在 React（或其他前端框架）中，组件的 props 通常是一个对象，它包含了一些属性。有时，你可能希望创建一个新的组件，这个组件接受和原始组件相同的 props，但是一部分 props 是可选的。这时，你可以使用 `Partial` 类型。

```tsx v-pre
import React from 'react'

interface ButtonProps {
  color: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ color, onClick }) => (
  <button style={{ color }} onClick={onClick}>Click me</button>
)

interface OptionalColorButtonProps extends Partial<ButtonProps> {
  onClick: () => void // onClick is still required
}

const OptionalColorButton: React.FC<OptionalColorButtonProps> = ({ color = 'blue', onClick }) => (
  <Button color={color} onClick={onClick} />
)
```

在这个例子中，`OptionalColorButton` 组件接受和 `Button` 组件相同的 props，但是 `color` 属性是可选的。如果没有提供 `color`，它会默认为 `'blue'`。

3. **类型保护**：有时候，你可能需要检查一个对象是否具有某些属性。你可以使用 `Partial` 类型创建一个类型保护函数。

```TypeScript twoslash
interface Duck {
  quack: () => void
  feathers: number
}

function isDuck(obj: any): obj is Partial<Duck> {
  return 'quack' in obj && 'feathers' in obj
}
```

在这个例子中，`isDuck` 函数检查一个对象是否具有 `Duck` 接口的所有属性。如果是，它返回 `true`，并且类型被缩小为 `Duck`。

这些只是 `Partial` 类型的一些应用，实际上，你可以在任何需要使类型的所有属性变为可选的地方使用它。
