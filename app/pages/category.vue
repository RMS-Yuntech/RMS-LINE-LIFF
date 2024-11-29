<script setup lang="ts">
  // @ts-expect-error: Unreachable code error
  import category from 'assets/category';

  definePageMeta({
    layout: 'blank',
    title: '總分類',
    hideFooter: true
  });

  const item = ref(category);
</script>

<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-3 gap-4">
      <CardItem v-for="i in item" :key="i.id" :icon="i.icon">
        {{ i.name }}
      </CardItem>
    </div>
  </div>
</template>
