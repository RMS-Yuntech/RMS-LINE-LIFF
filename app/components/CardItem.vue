<script setup lang="ts">
  interface CardProps {
    size?: 'md' | 'lg' | 'xl';
    icon: string;
    background?: string;
  }

  const props = withDefaults(defineProps<CardProps>(), {
    size: 'md',
    background: 'bg-secondary'
  });

  // - 定義不同尺寸的卡片和圖示大小
  const sizeClasses = {
    md: {
      card: 'w-24 h-24',
      icon: 'w-8 h-8',
      fontSize: 'text-sm'
    },
    lg: {
      card: 'w-32 h-32',
      icon: 'w-12 h-12',
      fontSize: 'text-md'
    },
    xl: {
      card: 'w-52 h-52',
      icon: 'w-24 h-24',
      fontSize: 'text-xl'
    }
  };

  // - 根據 props.size 取得對應的樣式
  const computedClasses = computed(() => {
    return sizeClasses[props.size] || sizeClasses.md;
  });
</script>

<template>
  <UButton
    class="font-bold text-gray-800"
    :class="[
      computedClasses.fontSize,
      computedClasses.card,
      props.background,
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'gap-2'
    ]"
  >
    <UIcon :name="props.icon" :class="[computedClasses.icon]" />
    <slot />
  </UButton>
</template>
