<script setup lang="ts">
  const { hideFooter } = useFooter();
</script>

<template>
  <div>
    <!-- // - Main Layout -->
    <div class="flex min-h-svh flex-col">
      <!-- // - Header -->
      <header
        class="bg-primary rounded-b-[35px] shadow"
        :class="$style['fixed-header']"
      >
        <!-- // - Toolbar -->
        <div class="relative px-8 pt-4 pb-4">
          <div class="flex items-center justify-center">
            <!-- // - Back Arrow -->
            <UButton
              icon="line-md:chevron-left"
              size="xl"
              class="absolute left-8 text-gray-800"
              to="/"
            />
            <!-- // -  Title -->
            <div class="text-xl font-medium text-gray-800">
              <slot name="title" />
            </div>
          </div>
        </div>
      </header>

      <!-- // - Page Content -->
      <main class="flex-1 overflow-auto pb-8" :class="$style['main-content']">
        <NuxtPage />
      </main>
    </div>

    <!-- // - Footer -->
    <footer v-show="!hideFooter" class="fixed right-0 bottom-0 left-0 z-50">
      <FooterTab />
    </footer>
  </div>
</template>

<style module>
  .fixed-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000; /* 確保 header 在最上層 */
  }

  .main-content {
    margin-top: 64px; /* 根據 header 的高度調整 */
    padding: 20px; /* 根據需要設定內邊距 */
    margin-bottom: 25px;
  }
</style>
