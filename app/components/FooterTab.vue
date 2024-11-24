<script setup lang="ts">
  const router = useRouter();

  const items = [
    {
      label: '首頁',
      icon: 'i-heroicons-home',
      route: '/'
    },
    {
      label: '進階搜尋',
      icon: 'i-heroicons-magnifying-glass',
      route: '/advanced-search'
    }
  ];

  const changeTab = (idx: number) => {
    router.push({ path: items[idx].route });
  };
</script>

<template>
  <UTabs class="px-2" :items="items" @update:model-value="changeTab" />
</template>
