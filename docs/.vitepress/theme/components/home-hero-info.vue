<script setup lang="ts">
import IMGSignature from './signature.vue'
</script>

<template>
  <div class="home-hero-info">
    <div class="home-hero-info-clip">
      Hi! 👋
    </div>
    <div class="home-hero-info-text">
      I'm
      <ClientOnly>
        <IMGSignature style="margin-left: 20px;" />
      </ClientOnly>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-hero-info {
  margin: 25px 0;
  &-clip {
    background: var(--vp-home-hero-name-background);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: var(--vp-home-hero-name-color);
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  &-text {
    font-size: 48px;
    font-weight: 700;
    display: flex;
    justify-self: center;
    align-items: center;
    font-family: var(--vp-font-family-base);
  }
}
</style>
