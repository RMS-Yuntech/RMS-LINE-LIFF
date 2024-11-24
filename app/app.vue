<script setup>
  const route = useRoute();
  const pageTitle = computed(() => route.meta.title || '');
</script>

<template>
  <div>
    <NuxtLayout>
      <template #title>
        {{ pageTitle }}
      </template>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  @import './styles/main.css';
</style>
