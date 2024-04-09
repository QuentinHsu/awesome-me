<script setup lang="ts">
const techStackIcons: string[] = [
  'js',
  'ts',
  'html',
  'css',
  'vue',
  'react',
  'go',
  'vscode',
  'apple',
  'linux',
  'windows',
]
</script>

<template>
  <div class="home-hero-info-after">
    <div class="icon-tech-stack">
      <img v-for="item in techStackIcons" :key="item" :src="`https://skillicons.dev/icons?i=${item}`" alt="item">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-hero-info-after {
  margin: 25px 0;
  .icon-tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
