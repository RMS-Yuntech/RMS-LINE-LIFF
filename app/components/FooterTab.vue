<script setup lang="ts">
  const router = useRouter();

  const active = ref('0');

  const items = [
    {
      name: 'home',
      label: '首頁',
      icon: 'i-heroicons-home',
      route: '/'
    },
    {
      name: 'advancedSearch',
      label: '進階搜尋',
      icon: 'i-heroicons-magnifying-glass',
      route: '/advanced-search'
    }
  ];

  const changeTab = (payload: string | number) => {
    const idx = typeof payload === 'number' ? payload : parseInt(payload, 10);
    if (items[idx]) {
      router.push({ path: items[idx].route });
    }
  };

  // 預設為 name為 home 的 tab
  // 隨時監聽 route.meta.footerDefault 的變化
  // 若 route.meta.footerDefault 有設定，則以此在 items 中的 index 為主
  watch(
    () => router.currentRoute.value.meta.footerDefault,
    (val) => {
      if (val) {
        const idx = items.findIndex((item) => item.name === val);
        if (idx !== -1) {
          active.value = idx.toString();
        }
      }
    },
    { immediate: true }
  );
</script>

<template>
  <UTabs
    v-model="active"
    class="px-2"
    :items="items"
    @update:model-value="changeTab"
  />
</template>
