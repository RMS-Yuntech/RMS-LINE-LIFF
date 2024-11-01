<script setup lang="ts">
const items = [
  {
    label: "首頁",
    icon: "i-heroicons-home",
    route: "home",
  },
  {
    label: "進階搜尋",
    icon: "i-heroicons-magnifying-glass",
    route: "search",
  },
];

const changeTab = (idx: number) => {
  console.log(items[idx]?.route);
};
</script>

<template>
  <!-- 改 UNavigationMenu  -->
  <UTabs class="px-2" :items="items" @change="changeTab" />
</template>
