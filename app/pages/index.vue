<template>
  <div>
    <div class="flex justify-center">
      <div class="flex gap-4 m-4">
        <!-- 左側大卡片 -->
        <CardItem size="xl" icon="i-heroicons-home" />

        <!-- 右側上下小卡片 -->
        <div class="flex flex-col gap-4">
          <CardItem icon="i-heroicons-home" />
          <CardItem icon="i-heroicons-home" />
        </div>
      </div>
    </div>

    <!-- // 新增 label -->
    <div class="flex flex-col gap-4 m-4">
      <span class="text-2xl">分類</span>
    </div>
    <div class="flex flex-col gap-4">
      <CardItem icon="i-heroicons-home" />
      <CardItem icon="i-heroicons-home" />
    </div>
  </div>
</template>
