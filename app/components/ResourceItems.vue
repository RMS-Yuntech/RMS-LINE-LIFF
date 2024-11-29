<script setup lang="ts">
  import resource from 'assets/resource.json';

  const list = defineModel<string[]>({
    type: (Array as PropType<string[]>) || null,
    required: true
  });

  interface ResourceItem {
    id: string; // 添加 id 屬性
    thumbnail: string;
    title: string;
  }

  const items = ref(resource);
  const status = inject('search-status') as Ref<string>;

  watch(status, (val) => {
    if (val === 'not-found') {
      items.value = [];
      return;
    }

    if (!list.value || list.value.length === 0) {
      items.value = resource;
      return;
    }

    items.value = resource.filter((item: ResourceItem) =>
      list.value.includes(item.id)
    );
  });
</script>

<template>
  <div v-if="status === 'not-found'">
    <div class="flex items-center justify-center h-[200px]">
      <span class="text-lg text-gray-500">找不到符合的資源</span>
    </div>
  </div>
  <div v-else-if="status === 'loading'">
    <div class="flex items-center justify-center h-[200px]">
      <span class="text-lg text-gray-500">✨ 查詢中...</span>
    </div>
  </div>

  <div v-else class="space-y-4">
    <UCard v-for="item in items" :key="item.title">
      <div class="flex gap-4">
        <div
          class="w-[64px] h-[64px] flex items-center justify-center bg-gray-100 rounded"
        >
          <img
            :src="item.thumbnail"
            :alt="item.title"
            class="max-w-[64px] max-h-[64px] object-contain"
          />
        </div>
        <div class="flex items-center">
          <h3 class="text-lg font-semibold">{{ item.title }}</h3>
        </div>
      </div>
    </UCard>
  </div>
</template>
