---
title: "居中布局"
layout: 'doc'
createTime: "2023-05-22"
next: false
---

当然，以下是各种居中布局情况的多种实现方案的具体代码：

## 文本水平居中

### `text-align: center`

::: code-group

```HTML
<div class="center-text">Hello World</div>
```

```CSS
.center-text {
  text-align: center;
}
```

## 文本垂直居中

:::

### `line-height`

::: code-group

```HTML
<div class="center-line-height">Hello World</div>
```

```CSS
.center-line-height {
  height: 50px;
  line-height: 50px;
}
```

:::

## 内联元素或内联块元素水平居中

### `text-align: center`

::: code-group

```HTML
<div class="center-inline">
  <span>Item 1</span>
  <span>Item 2</span>
</div>
```

```CSS
.center-inline {
  text-align: center;
}
```

:::

### `margin: auto`

::: code-group

```HTML
<div class="center">
  <span class="content"></span>
</div>
```

```CSS
.center .content {
  display: block;
  margin: auto;
}
.content {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

:::

### `flex` 布局

::: code-group

```HTML
<div class="center-flex">
  <span>Item 1</span>
  <span>Item 2</span>
</div>
```

```CSS
.center-flex {
  display: flex;
  justify-content: center;
}
```

:::

### `grid` 布局

::: code-group

```HTML
<div class="center">
  <span>我是内联元素</span>
</div>
```

```CSS
.center {
  display: grid;
  justify-items: center;
}
```

:::

## 块级元素水平居中

### `margin: auto`

::: code-group

```HTML
<div class="center-block">Block Element</div>
```

```CSS
.center-block {
  margin: auto;
  width: 50%;
}
```

:::

### `flex` 布局

::: code-group

```HTML
<div class="center-flex-block">
  <div>Block Element</div>
</div>
```

```CSS
.center-flex-block {
  display: flex;
  justify-content: center;
}
.center-flex-block div {
  width: 50%;
}
```

:::

## 垂直居中

### `flex` 布局

::: code-group

```HTML
<div class="center-vertical">Vertical Center</div>
```

```CSS
.center-vertical {
  display: flex;
  align-items: center;
  height: 100vh;
}
```

:::

### `position`

::: code-group

```HTML
<div class="center-position">
  <div>Vertical Center</div>
</div>
```

```CSS
.center-position {
  position: relative;
  height: 100vh;
}
.center-position div {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

:::

## 水平垂直居中

### `flex` 布局

::: code-group

```HTML
<div class="center-both">Center Both</div>
```

```CSS
.center-both {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
```

:::

### `position`

::: code-group

```HTML
<div class="center-both-position">
  <div>Center Both</div>
</div>
```

```CSS
.center-both-position {
  position: relative;
  height: 100vh;
}
.center-both-position div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

:::
