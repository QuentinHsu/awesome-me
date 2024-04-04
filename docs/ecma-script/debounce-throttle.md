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

## 解析

- `fn`: 这是你希望被防抖的函数，也就是你希望在一段时间内只执行一次的函数。
- `delay`: 这是一个时间间隔，单位是毫秒。即你希望在触发行为停止后多久，`fn`函数才被真正执行。比如，如果`delay`是1000，那么只有在最后一次触发`fn`后的1秒钟内没有再次触发，`fn`函数才会被执行。
- `timer`: 这是一个用于存储定时器的变量。每次触发防抖函数，都会清除之前的定时器，并重新设置一个新的定时器。
- `context`和`args`: 这两个变量用于在`setTimeout`的回调函数中，保持`fn`函数的调用上下文和参数。`context`保存了`fn`函数的`this`值，`args`保存了传给`fn`函数的参数。
