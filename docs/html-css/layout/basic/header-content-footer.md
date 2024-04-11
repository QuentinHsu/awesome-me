---
title: 'Header Content Footer'
layout: 'doc'
createTime: "2023-03-04"
next: false
---

<script lang="ts" setup>

</script>

## 固定头尾滚动内容布局

固定头尾滚动内容布局（Fixed Header Footer Scrolling Content Layout）是一种常见的 Web 页面布局设计，主要用于展示大量的内容，同时保持头部和底部区域的稳定显示。

这种布局设计的主要特点是，头部（header）和底部（footer）区域在页面滚动时保持固定，而中间的内容区域可以滚动。这样的设计使得用户在滚动阅读内容时，仍然可以清晰地看到头部和底部的信息，如导航菜单、logo、版权信息等。

固定头尾滚动内容布局广泛应用于各种 Web 应用中，包括新闻、博客、电子商务网站、社交媒体等。它提供了清晰的结构和良好的用户体验，使得用户可以在阅读内容的同时，轻松地访问其他部分的信息和功能。

该布局设计利用了 CSS 的 FlexBox 布局和 overflow 属性，实现了内容的动态滚动和头尾的固定定位。这种设计方式简洁高效，易于维护和扩展，是现代 Web 前端开发的常用技术和最佳实践。

::: code-group

```HTML
<div class="container">
  <header class="container__header">我是header</header>
  <main class="container__main">
    <div
      class="container__content"
      style="display: flex; flex-direction: column"
    >
      <div>内容区域 - header</div>
      <div style="margin: auto">内容区域 - body</div>
      <div>内容区域 - footer</div>
    </div>
  </main>
  <footer class="container__footer">
    <div>我是footer</div>
  </footer>
</div>
```

```CSS
.container {
  height: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  overflow: hidden;
}

.container__header {
  flex-shrink: 0;
}

.container__main {
  flex-grow: 1;
  overflow: auto;
}

.container__content {
  height: 600px;
  background-color: #65da79;
}

.container__footer {
  flex-shrink: 0;
}
```

```SCSS
.container {
  height: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  overflow: hidden;

  &__header,
  &__footer {
    flex-shrink: 0;
  }

  &__main {
    flex-grow: 1;
    overflow: auto;

    &__content {
      height: 600px;
      background-color: #65DA79;
    }
  }
}
```

:::

[DEMO](https://stackblitz.com/edit/stackblitz-starters-sfm64t?file=index.html)
