<script setup lang="ts">
import { signature as SVGSignature } from '../../constants/svg.ts'

const logoColor = 'var(--vp-c-text-1)'
</script>

<template>
  <div class="signature">
    <svg
      viewBox="0 0 550 110" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="signaturePath"
        :d="SVGSignature"
        :stroke="logoColor"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.signature {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100px;
  svg {
    width: 100%; // SVG 宽度为父元素的 100%
    height: auto; // 高度自适应
  }
  #signaturePath {
    stroke-dasharray: 2400;
    stroke-dashoffset: 2400;
    fill: transparent;
    animation: drawSignature 8s linear infinite;
    margin-top: 10px;
  }

  @keyframes drawSignature {
    0% {
      stroke-dashoffset: 2400;
    }

    15% {
      fill: transparent;
    }

    35%,
    75% {
      stroke-dashoffset: 0;
      fill: v-bind(logoColor);
    }

    90%,
    100% {
      stroke-dashoffset: 2400;
      fill: transparent;
    }
  }
}
</style>
