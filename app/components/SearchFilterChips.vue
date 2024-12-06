<script setup lang="ts">
  const selectedTypes = inject('selected-types') as Ref<string[]>;
  const typeOptions = ref([
    { key: 'all', value: '全部', icon: 'i-heroicons-squares-2x2' },
    { key: 'website', value: '網站', icon: 'i-heroicons-globe-alt' },
    { key: 'article', value: '文字', icon: 'i-heroicons-document-text' },
    { key: 'picture', value: '圖片', icon: 'i-heroicons-photo' },
    { key: 'video', value: '影片', icon: 'i-heroicons-video-camera' },
    { key: 'audio', value: '音訊', icon: 'i-heroicons-musical-note' }
  ]);

  const toggleType = (key: string) => {
    // Prevent deselecting 'all' when it's the only selection
    if (key === 'all' && selectedTypes.value.includes('all')) {
      return;
    }

    if (key === 'all') {
      selectedTypes.value = ['all'];
      return;
    }

    const newTypes = selectedTypes.value.filter((t) => t !== 'all');
    const isSelected = newTypes.includes(key);

    if (isSelected) {
      newTypes.splice(newTypes.indexOf(key), 1);
    } else {
      newTypes.push(key);
    }

    selectedTypes.value = newTypes.length ? newTypes : ['all'];
  };

  // 提供選擇的類型給其他元件使用

  onBeforeMount(() => {
    selectedTypes.value = ['all'];
  });
</script>

<template>
  <div class="mt-4 flex flex-wrap gap-2">
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
