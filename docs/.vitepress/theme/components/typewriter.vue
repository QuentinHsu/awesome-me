<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    default: 200,
  },
  delay: {
    type: Number,
    default: 1000,
  },
})

const displayText = ref('')
let index = 0

// 定义打字机效果函数
function typeWriter() {
  if (index < props.content.length) {
    displayText.value += props.content.charAt(index)
    index++
    setTimeout(typeWriter, props.speed)
  }
  else {
    // 如果所有字符都已经显示，就暂停一段时间，然后重新开始
    setTimeout(() => {
      displayText.value = ''
      index = 0
      typeWriter()
    }, props.delay)
  }
}

onMounted(() => {
  nextTick().then(() => {
    typeWriter()
  })
})
</script>

<template>
  <div class="typewriter">
    {{ displayText }}
  </div>
</template>

<style scoped>
.typewriter {
  width: 100%;
  white-space: pre-wrap; /* 保留空白符序列，但正常地进行换行 */
  word-wrap: break-word; /* 如果内容超过元素的宽度，则换行 */
}
</style>
