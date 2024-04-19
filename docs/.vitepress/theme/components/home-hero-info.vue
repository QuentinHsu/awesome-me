<script setup lang="ts">
import IMGSignature from './signature.vue'
import Typewriter from './typewriter.vue'
import TechStackIcons from './tech-stack-icons.vue'
</script>

<template>
  <div class="home-hero-info">
    <div class="content">
      <div class="content-left">
        <div class="home-hero-info-clip">
          Hi! 👋
        </div>
        <div class="home-hero-info-text">
          I'm
          <ClientOnly>
            <IMGSignature style="margin-left: 20px;" />
          </ClientOnly>
        </div>
        <div class="tagline">
          <Typewriter content="人生本就過的不愉快 那就來點羅曼蒂克" speed="200" style="display: block;" :delay="2000" />
        </div>
        <TechStackIcons />
      </div>
      <div class="content-right">
        <div class="avatar">
          <img src="https://avatars.githubusercontent.com/u/21162238?v=4" alt="home-hero">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-hero-info {
  margin: 25px 0;
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    &-left {
      .home-hero-info-clip {
        background: var(--vp-home-hero-name-background);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: var(--vp-home-hero-name-color);
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 30px;
      }
      .home-hero-info-text {
        font-size: 48px;
        font-weight: 700;
        display: flex;
        justify-self: center;
        align-items: center;
        font-family: var(--vp-font-family-base);
      }
    }
    &-right {
      display: flex;
      align-items: center;
      justify-content: center;
      .avatar {
        width: 150px;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
