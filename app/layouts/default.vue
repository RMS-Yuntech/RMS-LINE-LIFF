<script setup lang="ts">
  const { hideFooter } = useFooter();
  const router = useRouter();

  const searchText = ref('');

  const switchToSearch = () => {
    router.push('/advanced-search');
  };
</script>

<template>
  <!-- // - Main Layout -->
  <div class="min-h-screen flex flex-col relative">
    <!-- // - Header -->
    <header class="bg-primary rounded-b-[35px] shadow fixed-header">
      <!-- Toolbar -->
      <div class="px-8 pt-8 pb-16 relative">
        <div class="flex items-center justify-between">
          <!-- Title -->
          <h1 class="text-gray-800 text-xl font-medium">歡迎使用資彙王</h1>

          <!-- Avatar -->
          <div class="w-18">
            <ULink href="/profile">
              <UAvatar
                src="https://www.svgrepo.com/show/446530/avatar.svg"
                alt="User avatar"
                size="3xl"
              />
            </ULink>
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
            @click="switchToSearch"
          />
        </div>
      </div>
    </header>
    <!-- // - Page Content -->
    <main class="flex-1 main-content">
      <NuxtPage />
    </main>

    <!-- // - Footer -->
    <footer v-show="!hideFooter" class="fixed bottom-0 left-0 right-0 z-50">
      <FooterTab />
    </footer>
  </div>
</template>

<style scoped>
  .fixed-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  .main-content {
    padding: 20px;
    margin-top: 140px;
    margin-bottom: 48px;
  }
</style>
