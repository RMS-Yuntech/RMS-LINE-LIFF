<script setup lang="ts">
const searchText = ref("");
</script>

<template>
  <!-- Main Layout -->
  <div class="min-h-svh flex flex-col">
    <!-- Header -->
    <header class="header">
      <!-- Toolbar -->
      <div class="px-8 pt-8 pb-16 relative">
        <div class="flex items-center justify-between">
          <!-- Title -->
          <h1 class="text-gray-800 text-xl font-medium">歡迎使用資彙王</h1>

          <!-- Avatar -->
          <div class="w-18">
            <UAvatar
              size="lg"
              src="https://cdn.quasar.dev/img/boy-avatar.png"
              alt="User avatar"
            />
          </div>
        </div>

        <!-- Search Input -->
        <div class="absolute -bottom-4 left-0 right-0 px-8 z-50">
          <UInput
            v-model="searchText"
            placeholder="您想搜尋什麼？"
            icon="i-heroicons-magnifying-glass"
            variant="outline"
            class="w-full"
            size="xl"
          />
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main class="flex-1 overflow-auto pb-8">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="fixed bottom-0 left-0 right-0 z-50">
      <FooterTab />
    </footer>
  </div>
</template>

<style>
.header {
  @apply bg-primary rounded-b-[35px] shadow mb-6 fixed top-0 left-0 right-0 z-50;
}
</style>
