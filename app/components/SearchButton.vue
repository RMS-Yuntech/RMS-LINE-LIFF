<script setup lang="ts">
  defineEmits(['click']);
</script>

<template>
  <div>
    <button class="ai-search-button" @click="$emit('click')">
      <div class="flex items-center space-x-2">
        <span class="sparkle">✨</span>
        <span>搜尋</span>
      </div>
    </button>
  </div>
</template>

<style scoped>
  .ai-search-button {
    position: relative;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    font-weight: 600;
    color: white;
    background: linear-gradient(90deg, #9333ea, #3b82f6, #9333ea);
    background-size: 200% auto;
    white-space: nowrap;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    animation: gradient 3s ease infinite;
  }

  .ai-search-button:hover {
    opacity: 0.9;
    transform: scale(1.05);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  @keyframes gradient {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes sparkleRotate {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.2);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
</style>
