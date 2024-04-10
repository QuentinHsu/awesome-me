<script setup lang="ts"></script>

<template>
  <div class="layout">
    <div class="content">
      <div class="header">
        <slot name="header" />
      </div>
      <div class="body">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .content {
    width: 100vw;
    .header {
      padding: 2rem;
      font-size: 2em;
      font-family: 'Noto Serif SC', var(--vp-font-family-base);
    }
    .body {
      padding: 2rem;
    }
  }
  @media (min-width: 768px) {
    .content {
      max-width: 1200px;
      width: 55vw;
    }
  }
}
</style>
