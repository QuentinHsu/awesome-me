<script lang="ts" setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'CommandConsole',
})
</script>

<template>
  <div class="command-console">
    <div class="command-console-header">
      <div class="command-console-buttons">
        <span class="command-console-button red" />
        <span class="command-console-button yellow" />
        <span class="command-console-button green" />
      </div>
    </div>
    <div class="command-console-body">
      <div class="command-console-input">
        <slot />
      </div>
      <div class="command-console-output">
        <slot name="console" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$command-console-colors: (
  red: #ff5f57,
  yellow: #ffbd2e,
  green: #27c93f,
);

.command-console {
  background-color: #000;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  font-family: 'Courier New', Courier, monospace;

  &-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0;
  }

  &-buttons {
    display: flex;
    gap: 5px;
  }

  &-button {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;

    &.red {
      background-color: map-get($command-console-colors, red);
    }

    &.yellow {
      background-color: map-get($command-console-colors, yellow);
    }

    &.green {
      background-color: map-get($command-console-colors, green);
    }
  }

  &-body {
    padding: 10px;
  }

  &-input,
  &-output {
    margin-bottom: 10px;
  }

  &-output {
    color: #00ff00;
    white-space: pre-wrap;
  }
}
</style>
