<template>
  <!-- // - Main Layout -->
  <div class="min-h-svh flex flex-col">
    <!-- // - Header -->
    <header class="bg-primary rounded-b-[35px] shadow fixed-header">
      <!-- // - Toolbar -->
      <div class="px-8 pt-4 pb-4 relative">
        <div class="flex items-center justify-center">
          <!-- // - Back Arrow -->
          <div class="absolute left-8">
            <ULink href="/">
              <UIcon
                name="line-md:chevron-left"
                size="28"
                class="text-gray-800"
              />
            </ULink>
          </div>
          <!-- // -  Title -->
          <h1 class="text-gray-800 text-xl font-medium">
            <slot name="title" />
          </h1>
        </div>
      </div>
    </header>

    <!-- // - Page Content -->
    <main class="flex-1 overflow-auto pb-8 main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
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
