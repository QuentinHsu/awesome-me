/* eslint perfectionist/sort-objects: "error" */
<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed, onMounted } from 'vue'
import { isEmptyObject } from '../../../../utils/is'

const _VitePressData = useData()

const showContent = computed(() => {
  return !isEmptyObject(_VitePressData.frontmatter.value)
})
</script>

<template>
  <div class="doc-before">
    <div v-if="showContent" class="content">
      <div class="doc-title">
        {{ _VitePressData.frontmatter.value.title }}
      </div>
      <div class="doc-create_time">
        创建于 {{ _VitePressData.frontmatter.value.createTime }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.doc-before {
  .content {
    padding: 0em 3em 3em 0em;
    .doc-title {
      font-family: 'Noto Serif SC', var(--vp-font-family-base);
      font-size: 2em;
      font-weight: bold;
      border-left: 5px solid red;
      line-height: 1.5em;
      padding-left: 10px;
    }
    .doc-create_time {
      font-family: var(--vp-font-family-base);
      color: var(--vp-c-text-2);
      padding-left: 15px;
      padding-top: 10px;
      line-height: 32px;
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>
