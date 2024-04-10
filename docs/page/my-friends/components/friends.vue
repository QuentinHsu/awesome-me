<script setup lang="ts">
interface Friend {
  name: string
  avatars: string
  blog?: string
  github?: string
}
const friends: Friend[] = [
  {
    name: 'Lian bo',
    avatars: 'https://avatars.githubusercontent.com/u/16079222?v=4',
    blog: 'https://godruoyi.com',
    github: 'https://github.com/godruoyi',
  },
  {
    name: 'CodeDreamfy',
    avatars: 'https://avatars.githubusercontent.com/u/7604937?v=4',
    github: 'https://github.com/CodeDreamfy',
  },
]
</script>

<template>
  <div class="friends">
    <div class="body">
      <div v-for="friend in friends" :key="friend.name" class="friend">
        <img :src="friend.avatars" alt="avatar">
        <div class="info">
          <div class="name">
            {{ friend.name }}
          </div>
          <div class="links">
            <a v-if="friend.blog" class="link" :href="friend.blog" target="_blank">Blog</a>
            <a v-if="friend.github" class="link" :href="friend.github" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.friends {
  .body {
    display: flex;
    flex-wrap: wrap;
    .friend {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      margin-right: 4rem;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 1rem;
      }
      .info {
        .name {
          margin: 0;
          font-size: 1.3em;
        }
        .links {
          a {
            margin-right: 1rem;
            pointer-events: auto;
            transition: color 0.25s;
          }
          .link:hover {
            color: var(--vp-c-brand-1);
          }
        }
      }
    }
  }
}
</style>
