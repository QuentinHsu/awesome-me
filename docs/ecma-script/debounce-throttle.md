---
title: Debounce Throttle
layout: "doc"
createTime: "2023-05-10"
---

# 防抖 / Debounce

::: info 💡
Debounce，防抖函数是一种优化函数调用频率的手段，它能在规定的时间内只让函数执行一次。这对于一些需要频繁触发但又不希望频繁执行的场景非常有用，比如输入框的输入监听、窗口大小的变化监听等。
:::

## 示例代码

::: code-group

```JavaScript:line-numbers
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

```TypeScript:line-numbers
function debounce(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void {
  let timer: NodeJS.Timeout | null = null;

  return function(...args: any[]): void {
    const context = this;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}
```

:::

## 参数与变量

- `fn`: 这是你希望被防抖的函数，也就是你希望在一段时间内只执行一次的函数。
- `delay`: 这是一个时间间隔，单位是毫秒。即你希望在触发行为停止后多久，`fn` 函数才被真正执行。比如，如果 `delay` 是 1000，那么只有在最后一次触发 `fn` 后的 1 秒钟内没有再次触发，`fn` 函数才会被执行。
- `timer`: 这是一个用于存储定时器的变量。每次触发防抖函数，都会清除之前的定时器，并重新设置一个新的定时器。
- `context` 和 `args`: 这两个变量用于在 `setTimeout` 的回调函数中，保持 `fn` 函数的调用上下文和参数。`context` 保存了 `fn` 函数的 `this` 值，`args` 保存了传给 `fn` 函数的参数。

## 工作原理

1. 当防抖函数被触发时，先清除之前的定时器（如果存在的话），然后设置一个新的定时器。新的定时器会在 `delay` 毫秒后执行。
2. 如果在 `delay` 毫秒内，防抖函数再次被触发，那么就会清除之前的定时器，再设置一个新的定时器。这样一来，只要防抖函数在 `delay` 毫秒内被连续触发，`fn` 函数就不会被执行。
3. 只有在最后一次触发防抖函数后的 `delay` 毫秒内没有再次触发，定时器才会到时间，从而执行 `fn` 函数。

这个防抖函数的实现使用了 JavaScript 的闭包和定时器功能。闭包是指函数有访问到它自己被定义时的词法作用域，即使在它被调用时已经在不同的作用域了。在这个防抖函数中，返回的匿名函数就形成了一个闭包，它可以访问并修改它被定义时的作用域中的 `timer` 变量。每次调用 `debounce` 函数，都会创建一个新的作用域，以及一个新的 `timer` 变量。然后，返回的函数通过闭包，可以访问并修改这个 `timer` 变量。这就是为什么每个通过 `debounce` 函数生成的函数（比如下面 `例子 1` 中的 `onChange1`、`onChange5` 和 `onChange10` ）都有各自的定时器，它们之间是互不影响的。

::: details 例子 1

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
// 定义一个被防抖的函数
function log() {
  console.log('防抖函数执行');
}

// 使用debounce函数包装原函数，设置不同的防抖延迟
let debouncedLog1 = debounce(log, 1000);
let debouncedLog5 = debounce(log, 5000);
let debouncedLog10 = debounce(log, 10000);

// 交错调用三个函数
debouncedLog1(); // 不会立即执行 log，而是等待 1 秒
debouncedLog5(); // 不会立即执行 log，而是等待 5 秒
debouncedLog1(); // 上一次的等待被清除，重新开始等待 1 秒
debouncedLog10(); // 不会立即执行 log，而是等待 10 秒
debouncedLog5(); // 上一次的等待被清除，重新开始等待 5 秒
debouncedLog1(); // 上一次的等待被清除，重新开始等待 1 秒

// 1 秒后，没有新的 debouncedLog1 被调用，log 函数执行
// 5 秒后，没有新的 debouncedLog5 被调用，log 函数执行
// 10 秒后，没有新的 debouncedLog10 被调用，log 函数执行
```

:::

---

# Throttling

在 Web 开发中，节流函数（Throttling）也是一种重要的优化手段，它可以限制函数的执行频率，避免在短时间内过于频繁地执行一些操作，从而提高性能和用户体验。

## 示例代码

::: code-group

```JavaScript
/**
 * Throttle Function: Limits the execution rate of a function.
 * @param {Function} func - Function to be throttled.
 * @param {Number} wait - Time delay in milliseconds.
 * @returns {Function} - Throttled function.
 */
function throttle(func, wait) {
  let lastExecTime, timeoutId;

  return function(...args) {
    const context = this;
    const now = Date.now();

    if (lastExecTime && now < lastExecTime + wait) {
      // If the function is invoked in less than 'wait' time, reset the timer.
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() {
        lastExecTime = now;
        func.apply(context, args);
      }, wait);
    } else {
      // Else, execute the function and set the last execution time.
      lastExecTime = now;
      func.apply(context, args);
    }
  };
}
```

```JavaScript [JavaScript - 箭头函数版本]
/**
 * Throttle Function: Limits the execution rate of a function.
 * @param {Function} func - Function to be throttled.
 * @param {Number} wait - Time delay in milliseconds.
 * @returns {Function} - Throttled function.
 */
function throttle(func, wait) {
  let lastExecTime, timeoutId;

  return function(...args) {
    const context = this; // [!code --]
    const now = Date.now();

    if (lastExecTime && now < lastExecTime + wait) {
      // If the function is invoked in less than 'wait' time, reset the timer.
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() { // [!code --]
      timeoutId = setTimeout(() =>{ // [!code ++]
        lastExecTime = now;
        func.apply(context, args); // [!code --]
        func(...args); // [!code ++]
      }, wait);
    } else {
      // Else, execute the function and set the last execution time.
      lastExecTime = now;
      func.apply(context, args); // [!code --]
      func(...args); // [!code ++]
    }
  };
}
```

```TypeScript
/**
 * Throttle Function: Limits the execution rate of a function.
 * @param {() => void} func - Function to be throttled.
 * @param {number} wait - Time delay in milliseconds.
 * @returns {(...args: any[]) => void} - Throttled function.
 */
const throttle = (func: (...args: any[]) => void, wait: number): ((...args: any[]) => void) => {
  let lastExecTime: number | null = null;
  let timeoutId: NodeJS.Timeout;

  return function(...args: any[]): void {
    const now: number = Date.now();

    if (lastExecTime && now < lastExecTime + wait) {
      // If the function is invoked in less than 'wait' time, reset the timer.
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastExecTime = now;
        func(...args);
      }, wait);
    } else {
      // Else, execute the function and set the last execution time.
      lastExecTime = now;
      func(...args);
    }
  };
}
```

:::

## 参数与变量

1. `func`：是需要被节流的函数。
2. `wait`：是设定的延迟执行时间。
3. `lastExecTime`：用来记录上次函数执行的时间。
4. `timeoutId`：用来存储定时器的 ID，用于清除定时器。
5. `...args`：是传递给被节流函数的参数列表。
6. `context`：是函数执行的上下文，这里是使用了 `this` 关键字来获取。
7. `now`：是当前时间，用于和 `lastExecTime` 对比，判断是否已经过了 `wait` 时间。
8. `setTimeout`：是用来设定延迟执行的函数，如果在 `wait` 时间内再次调用，会清除之前的定时器，并重新设定一个新的定时器。
9. `clearTimeout`：是用来清除定时器的，避免函数的重复执行。
10. `func.apply(context, args)`：是用来执行函数的，使用了 `apply` 方法来指定函数的执行上下文和参数。

## 工作原理

1. 当调用 `throttle` 函数时，会返回一个新的函数。这个新函数在被调用时，会检查当前时间（`now`）与上次执行时间（`lastExecTime`）的差值是否小于设定的延迟时间（`wait`）。
2. 如果是（即在 `wait` 时间内再次调用了函数），则清除已设定的定时器（`clearTimeout(timeoutId)`）并重新设定一个新的定时器（`setTimeout`）。这个新的定时器会在 `wait` 时间后执行原函数，并更新 `lastExecTime` 。
3. 如果不是（即已过了 `wait` 时间），则立即执行原函数，并更新 `lastExecTime`。
4. 无论是立即执行还是延迟执行，函数的执行都是通过 `func.apply(context, args)` 实现的，其中 `context` 是函数执行的上下文，`args` 是函数调用时传入的参数。

这样，通过 `throttle` 函数，我们就可以控制函数的执行频率，让其在一定时间内只执行一次。这对于一些需要频繁触发但不需要频繁响应的事件（如滚动、拖拽、窗口大小改变等）非常有用，能有效提高性能。

# 其他

## `this`

在 JavaScript 中，函数的 `this` 上下文是在调用时确定的，而不是在定义时确定的。这会导致在某些情况下，函数的 `this` 上下文不是我们期望的那个。例如，当我们将一个对象的方法作为回调函数传递给另一个函数时，这个方法的 `this` 上下文可能会丢失，变成全局对象（在非严格模式下）或 `undefined`（在严格模式下）。

为了解决这个问题，我们可以使用 `Function.prototype.apply` 或 `Function.prototype.bind` 方法显式地设置函数的 `this` 上下文。在上面的 JavaScript 版本的节流函数中，我们就是用 `Function.prototype.apply` 方法来确保函数的 `this` 上下文正确。

然而，在 TypeScript（以及 ES6+）中，我们可以使用箭头函数来绑定 `this` 上下文。箭头函数不会创建自己的 `this` 上下文，而是会从定义它的上下文中继承 `this`。因此，当我们在箭头函数中使用 `this` 关键字时，它总是指向定义箭头函数的上下文。

在上面的 TypeScript 版本的节流函数中，我们用箭头函数替代了 `Function.prototype.apply` 方法，因此不需要显式地设置函数的 `this` 上下文。这是 TypeScript（以及 ES6+）的一个优点，它使得代码更简洁、更易于理解。
