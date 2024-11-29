<script setup lang="ts">
  definePageMeta({
    title: '偏好設定',
    layout: 'blank'
  });

  const apiKey = ref(localStorage.getItem('GEMINI_API_KEY') || '');

  const saveApiKey = () => {
    localStorage.setItem('GEMINI_API_KEY', apiKey.value);
  };
</script>

<template>
  <div class="flex gap-4 items-center">
    <UInput
      v-model="apiKey"
      placeholder="請輸入 Gemini API 金鑰"
      type="password"
      class="flex-1"
    />
    <UButton @click="saveApiKey">儲存</UButton>
  </div>
</template>
