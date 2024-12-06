<script setup lang="ts">
  definePageMeta({
    layout: 'blank',
    title: '進階搜尋',
    footerDefault: 'advancedSearch'
  });

  const searchText = ref('');
  const selectedTypes = ref<string[]>([]);
  provide('selected-types', selectedTypes);

  const status = ref<string>('');
  provide('search-status', status);

  const clickSearch = async () => {
    status.value = 'loading';
    const result = await useGeminiSearch(searchText.value);

    status.value = result ? 'founded' : 'not-found';

    if (result) filterList.value = result;
  };

  const filterList = ref<string[]>([]);
</script>

<template>
  <div>
    <div class="flex w-full max-w-2xl items-center space-x-3">
      <div class="flex-1">
        <!-- Input -->
        <UInput
          ref="refInputSearch"
          v-model="searchText"
          placeholder="您想搜尋什麼？"
          icon="i-heroicons-magnifying-glass"
          variant="outline"
          class="flex-grow"
          size="xl"
          autofocus
        />
      </div>
      <SearchButton @click="clickSearch" />
    </div>

    <!-- // - 搜尋類型篩選 -->
    <SearchFilterChips />

    <!-- // - 資源列表 -->
    <ResourceItems v-model="filterList" class="mt-4" />
  </div>
</template>
