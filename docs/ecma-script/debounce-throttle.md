---
title: Debounce Throttle
layout: "doc"
createTime: "2023-05-10"
---

# Debounce

::: info 💡
Debounce，防抖函数是一种优化函数调用频率的手段，它能在规定的时间内只让函数执行一次。这对于一些需要频繁触发但又不希望频繁执行的场景非常有用，比如输入框的输入监听、窗口大小的变化监听等。
:::

## 示例代码

```JavaScript
function debounce(fn, delay) {
  let timer = null;

  return function() {
    const context = this;
    const args = arguments;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}
```

## 参数与变量

- `fn`: 这是你希望被防抖的函数，也就是你希望在一段时间内只执行一次的函数。
- `delay`: 这是一个时间间隔，单位是毫秒。即你希望在触发行为停止后多久，`fn` 函数才被真正执行。比如，如果 `delay` 是 1000，那么只有在最后一次触发 `fn` 后的 1 秒钟内没有再次触发，`fn` 函数才会被执行。
- `timer`: 这是一个用于存储定时器的变量。每次触发防抖函数，都会清除之前的定时器，并重新设置一个新的定时器。
- `context` 和 `args`: 这两个变量用于在 `setTimeout` 的回调函数中，保持 `fn` 函数的调用上下文和参数。`context` 保存了 `fn` 函数的 `this` 值，`args` 保存了传给 `fn` 函数的参数。

## 工作原理

1. 当防抖函数被触发时，先清除之前的定时器（如果存在的话），然后设置一个新的定时器。新的定时器会在 `delay` 毫秒后执行。
2. 如果在 `delay` 毫秒内，防抖函数再次被触发，那么就会清除之前的定时器，再设置一个新的定时器。这样一来，只要防抖函数在 `delay` 毫秒内被连续触发，`fn` 函数就不会被执行。
3. 只有在最后一次触发防抖函数后的 `delay` 毫秒内没有再次触发，定时器才会到时间，从而执行 `fn` 函数。

这个防抖函数的实现使用了 JavaScript 的闭包和定时器功能。闭包是指函数有访问到它自己被定义时的词法作用域，即使在它被调用时已经在不同的作用域了。在这个防抖函数中，返回的匿名函数就形成了一个闭包，它可以访问并修改它被定义时的作用域中的 `timer` 变量。每次调用 `debounce` 函数，都会创建一个新的作用域，以及一个新的 `timer` 变量。然后，返回的函数通过闭包，可以访问并修改这个 `timer` 变量。这就是为什么每个通过 `debounce` 函数生成的函数（比如下面 `例子 1`中的 `onChange1`、`onChange2` 和 `onChange3`）都有各自的定时器，它们之间是互不影响的。

::: details 例子 1

```JavaScript
function debounce(func, delay) {
  let timer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

onChange1 = debounce(() => {
  console.log('debounce1');
}
, 1000);
onChange2 = debounce(() => {
  console.log('debounce2');
}
, 2000);

onChange3 = debounce(() => {
  console.log('debounce3');
}
, 3000);

onChange1();
onChange2();
onChange3();
onChange1();
onChange2();
onChange3();
onChange1();
onChange2();
onChange3();
onChange1();
onChange2();
onChange3();
```

:::
