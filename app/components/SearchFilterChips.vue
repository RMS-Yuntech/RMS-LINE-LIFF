<script setup lang="ts">
  const selectedTypes = ref<string[]>([]);
  const typeOptions = ref([
    { key: 'all', value: '全部', icon: 'i-heroicons-squares-2x2' },
    { key: 'website', value: '網站', icon: 'i-heroicons-globe-alt' },
    { key: 'article', value: '文字', icon: 'i-heroicons-document-text' },
    { key: 'picture', value: '圖片', icon: 'i-heroicons-photo' },
    { key: 'video', value: '影片', icon: 'i-heroicons-video-camera' },
    { key: 'audio', value: '音訊', icon: 'i-heroicons-musical-note' }
  ]);

  const toggleType = (key: string) => {
    // > 攔截取消全選時的行為
    if (key === 'all' && selectedTypes.value.includes('all')) {
      return;
    }

    // - 處理全部選項
    // > 當點擊 all 時，若已選擇則清空所有選項，否則僅選擇 all
    if (key === 'all') {
      if (selectedTypes.value.includes('all')) {
        selectedTypes.value = [];
      } else {
        selectedTypes.value = ['all'];
      }
    }
    // - 處理其他選項
    // > 先移除 all，再切換選擇狀態
    else {
      const index = selectedTypes.value.indexOf(key);

      selectedTypes.value = selectedTypes.value.filter((t) => t !== 'all');

      if (index === -1) {
        selectedTypes.value.push(key);
      } else {
        selectedTypes.value.splice(index, 1);
      }
    }
  };

  onBeforeMount(() => {
    selectedTypes.value = ['all'];
  });
</script>

<template>
  <div class="flex flex-wrap gap-2 mt-4">
    <UButton
      v-for="item in typeOptions"
      :key="item.key"
      :class="{ 'bg-primary text-white': selectedTypes.includes(item.key) }"
      :icon="item.icon"
      size="md"
      variant="outline"
      class="whitespace-nowrap"
      @click="toggleType(item.key)"
    >
      {{ item.value }}
    </UButton>
  </div>
</template>
