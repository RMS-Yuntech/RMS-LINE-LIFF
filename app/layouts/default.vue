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
  <div class="relative flex min-h-screen flex-col">
    <!-- // - Header -->
    <header
      class="bg-primary rounded-b-[35px] shadow"
      :class="$style['fixed-header']"
    >
      <!-- Toolbar -->
      <div class="relative px-8 pt-8 pb-16">
        <div class="flex items-center justify-between">
          <!-- Title -->
          <h1 class="text-xl font-bold text-gray-800">歡迎使用資彙王</h1>

          <!-- Avatar -->
          <div>
            <ULink class="w-18" href="/profile">
              <UAvatar
                src="https://www.svgrepo.com/show/446530/avatar.svg"
                alt="User avatar"
                size="3xl"
              />
            </ULink>
          </div>
        </div>

        <!-- Search Input -->
        <div class="absolute right-0 -bottom-4 left-0 z-50 px-8">
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
    <main class="flex-1" :class="$style['main-content']">
      <NuxtPage />
    </main>

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
    z-index: 1000;
  }

  .main-content {
    padding: 20px;
    margin-top: 140px;
    margin-bottom: 48px;
  }
</style>
