<script setup lang="ts">
  import resource from 'assets/resource.json';

  const list = defineModel<string[]>({
    type: (Array as PropType<string[]>) || null,
    required: true
  });

  interface ResourceItem {
    id: string;
    type: string; // 加入 type 屬性定義
    thumbnail: string;
    title: string;
  }

  const items = ref(resource);
  const status = inject('search-status') as Ref<string>;
  const selectedTypes = inject('selected-types') as Ref<string[]>;

  watch(
    [status, selectedTypes],
    ([newStatus, newTypes]) => {
      if (newStatus === 'not-found') {
        items.value = [];
        return;
      }

      // 先根據搜尋結果過濾
      let filteredItems =
        !list.value || list.value.length === 0
          ? resource
          : resource.filter((item: ResourceItem) =>
              list.value.includes(item.id)
            );

      // 再根據選擇的類型過濾
      if (!newTypes.includes('all')) {
        filteredItems = filteredItems.filter((item: ResourceItem) =>
          newTypes.includes(item.type)
        );
      }

      items.value = filteredItems;
    },
    { immediate: true }
  );
</script>

<template>
  <div v-if="status === 'not-found'">
    <div class="flex h-[200px] items-center justify-center">
      <span class="text-lg text-gray-500">找不到符合的資源</span>
    </div>
  </div>
  <div v-else-if="status === 'loading'">
    <div class="flex h-[200px] items-center justify-center">
      <span class="text-lg text-gray-500">✨ 查詢中...</span>
    </div>
  </div>

  <div v-else class="space-y-4">
    <UCard v-for="item in items" :key="item.title">
      <div class="flex gap-4">
        <div
          class="flex h-[64px] w-[64px] items-center justify-center rounded bg-gray-100"
        >
          <UIcon
            v-if="item.type === 'article'"
            name="i-heroicons-document-text"
            size="64px"
          />
          <img
            v-else
            :src="item.thumbnail"
            :alt="item.title"
            class="max-h-[64px] max-w-[64px] object-contain"
          />
        </div>
        <div class="flex items-center">
          <h3 class="text-lg font-semibold">{{ item.title }}</h3>
        </div>
      </div>
    </UCard>
  </div>
</template>
