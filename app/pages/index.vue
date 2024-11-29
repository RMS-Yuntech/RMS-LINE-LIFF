<script setup lang="ts">
  import category from 'assets/category.json';

  const item = ref();

  onBeforeMount(() => {
    item.value = {
      first: [...category].sort((a, b) => a.order - b.order).slice(0, 3),
      second: [...category].sort((a, b) => a.order - b.order).slice(3, 8)
    };
  });
</script>

<template>
  <div>
    <div class="flex justify-center">
      <div class="flex gap-4 m-4">
        <!-- 左側大卡片 -->
        <CardItem size="xl" :icon="item.first[0].icon">
          {{ item.first[0].name }}
        </CardItem>

        <!-- 右側上下小卡片 -->
        <div class="flex flex-col gap-4">
          <CardItem :icon="item.first[1].icon">
            {{ item.first[1].name }}
          </CardItem>
          <CardItem :icon="item.first[2].icon">
            {{ item.first[2].name }}
          </CardItem>
        </div>
      </div>
    </div>

    <!-- // 新增 label -->
    <div class="flex flex-col gap-4 mb-2">
      <span class="text-2xl">所有分類</span>
    </div>

    <div class="columns-3 space-y-4">
      <CardItem v-for="i in item.second" :key="i.id" :icon="i.icon">
        {{ i.name }}
      </CardItem>
      <ULink href="/category">
        <CardItem background="bg-blue-300" icon="material-symbols:more-horiz" />
      </ULink>
    </div>
  </div>
</template>
