---
layout: "page"
---

<script setup lang="ts">

import Layout from './components/layout.vue'
import Friends from './components/friends.vue'

</script>

<Layout>
  <template #header>
    我的朋友们
  </template>
  <template #body>
    <Friends/>
  </template>
</Layout>
