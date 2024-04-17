---
title: "测试工具"
layout: "doc"
createTime: "2024-04-15"
next: false
---

## 编辑器扩展

[Type Challenges - VSCode ](https://marketplace.visualstudio.com/items?itemName=YRM.type-challenges)

## 测试工具类型

[Code Source](https://github.com/type-challenges/type-challenges/blob/main/utils/index.d.ts)

这些是一些 TypeScript 的工具类型。它们是用于在编译阶段进行类型检查的函数。下面是对每个类型函数的简单解释：

1. `Expect<T extends true>`：期望类型 T 是 true 的类型，否则编译器将报错。

   ```TypeScript
   export type Expect<T extends true> = T
   ```

2. `ExpectTrue<T extends true>`：期望类型 T 是 true，否则编译器将报错。

   ```TypeScript
   export type ExpectTrue<T extends true> = T
   ```

3. `ExpectFalse<T extends false>`：期望类型 T 是 false，否则编译器将报错。

   ```TypeScript
   export type ExpectFalse<T extends false> = T
   ```

4. `IsTrue<T extends true>` 和 `IsFalse<T extends false>`：检查类型 T 是否是 true 或 false。

   ```TypeScript
   export type IsTrue<T extends true> = T
   export type IsFalse<T extends false> = T

   ```

5. `Equal<X, Y>`：检查类型 X 和 Y 是否相同。

   ```TypeScript
   export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
   ? true
   : false
   ```

6. `NotEqual<X, Y>`：检查类型 X 和 Y 是否不同。

   ```TypeScript
   export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true
   ```

7. `IsAny<T>`：检查类型 T 是否是 any 类型。

   ```TypeScript
   export type IsAny<T> = 0 extends 1 & T ? true : false
   ```

8. `NotAny<T>`：检查类型 T 是否不是 any 类型。

   ```TypeScript
   export type NotAny<T> = true extends IsAny<T> ? false : true
   ```

9. `Debug<T>`：一个用于调试的工具类型，它将类型 T 的所有属性映射到自身，使得你可以查看类型 T 的结构。

   ```TypeScript
   export type Debug<T> = { [K in keyof T]: T[K] }
   ```

10. `MergeInsertions<T>`：递归合并类型 T 的所有属性，当 T 是对象时。

    ```TypeScript
    export type MergeInsertions<T> = T extends object ? { [K in keyof T]: MergeInsertions<T[K]> } : T
    ```

11. `Alike<X, Y>`：检查类型 X 和 Y 是否相似。

    ```TypeScript
    export type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>
    ```

12. `ExpectExtends<VALUE, EXPECTED>`：检查类型 VALUE 是否扩展自 EXPECTED。

    ```TypeScript
    export type ExpectExtends<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false
    ```

13. `ExpectValidArgs<FUNC extends (...args: any[]) => any, ARGS extends any[]>`：检查类型 ARGS 是否可以作为类型 FUNC 的参数。

    ```TypeScript
    export type ExpectValidArgs<
      FUNC extends (...args: any[]) => any,
      ARGS extends any[] > = ARGS extends Parameters<FUNC> ? true : false
    ```

14. `UnionToIntersection<U>`：将联合类型转换为交叉类型。例如，`UnionToIntersection<'a' | 'b'>`将得到`'a' & 'b'`。

    ```TypeScript
    export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
      k: infer I
    ) => void
      ? I
      : never
    ```

这些工具类型可以用于编写类型安全的代码，提高代码的可维护性。

## 解析

### `extends`

在 TypeScript 中，`extends` 是一个关键字，用于表示类型的继承或约束。

1. 类型继承：在类和接口中，`extends` 用来表示一个类或接口继承另一个类或接口，继承来的类或接口会拥有父类或父接口的所有属性和方法。例如：`class Child extends Parent {}` 或 `interface IChild extends IParent {}`。

2. 类型约束：在泛型中，`extends` 用来表示一个类型变量必须是某种特定类型或该类型的子类型。例如，`<T extends string>` 表示类型变量 `T` 必须是 `string` 或 `string` 的子类型。

`extends` 多数情况下被用作类型约束，用来限制类型变量必须满足某种类型。例如，在 `Expect<T extends true>` 中，`T extends true` 表示类型变量 `T` 必须是 `true` 类型。

### `X`, `Y`

其中的 `X`，`Y` 只是类型变量，你可以随意替换它们。在 TypeScript 中，类型变量允许你创建可重用的组件并且可以适应任何类型，只要这个类型符合变量的约束。

所以，你可以像下面这样替换 X 和 Y：

```TypeScript
export type NotEqual<A, B> = true extends Equal<A, B> ? false : true

```

在这里，`A` 和 `B` 只是占位符，用来表示任何类型。这个类型别名 `NotEqual` 可以用来检查两个类型是否不相同。如果 `A` 和 `B` 不相同，那么 `NotEqual<A, B>` 将会是 `true`，否则将会是 `false`。

### `FUNC`

`FUNC` 是一个函数类型，它接受任意数量和类型的参数，然后返回任意类型的结果。在这个类型别名中，`FUNC` 是一个泛型参数，这意味着你可以为它传入任意的函数类型。这对于创建高阶函数或者函数工具库非常有用，因为你可以对函数的类型进行抽象，而不是硬编码特定的函数类型。

### `ARGS`

`ARGS` 是一个数组类型，数组中的元素类型是任意的。在这个类型别名中，`ARGS` 也是一个泛型参数，这意味着你可以为它传入任意的数组类型。这对于处理函数参数列表非常有用，因为你可以抽象地处理任意类型和数量的参数，而不是硬编码特定的参数类型和数量。
