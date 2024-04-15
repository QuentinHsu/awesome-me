<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NestedPreview',
  props: {
    urlPreview: {
      type: String,
      required: true,
    },
    urlCode: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
  },
})
</script>

<template>
  <div class="nested-preview">
    <div v-if="title">
      {{ title }}
    </div>
    <iframe :src="urlPreview" class="preview-frame" />
    <a v-if="urlCode" :href="urlCode" target="_blank" class="source-link">查看源码</a>
  </div>
</template>

<style scoped>
.nested-preview {
  width: 100%;
  height: 100%;
}

.preview-frame {
  width: 100%;
  height: 80%;
  border: none;
}

.source-link {
  display: block;
  margin-top: 10px;
  text-align: right;
  color: #00f;
  text-decoration: none;
}
</style>
