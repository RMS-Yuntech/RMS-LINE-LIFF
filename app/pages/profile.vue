<script setup lang="ts">
  definePageMeta({
    title: '偏好設定',
    layout: 'blank'
  });

  const apiKey = ref('');
  const toast = useToast();
  const loading = ref(false);
  const status = ref('⚙️檢測中');

  const validGeminiKey = async (key: string, skipToast: boolean = false) => {
    if (!skipToast) {
      loading.value = true;
    }

    try {
      const { checkKey } = useCheckApiKey();
      await checkKey(key);

      status.value = '✅已啟用';
      if (!skipToast) {
        toast.add({
          title: '測試成功',
          description: 'API 金鑰可正常使用',
          color: 'success'
        });
      }
    } catch (error) {
      console.error(error);
      status.value = '🚫未啟用';
      if (!skipToast) {
        toast.add({
          title: '測試失敗',
          description: '請確認 API 金鑰是否正確',
          color: 'error'
        });
      }
    }

    loading.value = false;
    nextTick();
  };

  const saveApiKey = () => {
    loading.value = true;
    localStorage.setItem('GEMINI_API_KEY', apiKey.value);

    validGeminiKey(apiKey.value, false);
  };

  onMounted(() => {
    validGeminiKey(localStorage.getItem('GEMINI_API_KEY') || '', true);
  });
</script>

<template>
  <div>
    <div class="text-md font-medium text-gray-700">
      目前 Gemini 存取權限: {{ status }}
    </div>
    <br />
    <div class="text-md mb-2 font-medium text-gray-700">
      設定 Gemini API 金鑰
    </div>
    <div class="flex items-center gap-4">
      <UInput
        v-model="apiKey"
        placeholder="🗝️請輸入 Gemini API 金鑰"
        type="password"
        class="flex-1"
      />
      <UButton :loading @click="saveApiKey">儲存</UButton>
    </div>
  </div>
</template>
