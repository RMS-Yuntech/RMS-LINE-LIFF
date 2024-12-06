<script setup>
  const route = useRoute();
  const pageTitle = computed(() => route.meta.title || '');
</script>

<template>
  <UApp>
    <NuxtLayout>
      <template #title>
        <span class="font-bold">{{ pageTitle }}</span>
      </template>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
  @import './styles/main.css';
</style>
