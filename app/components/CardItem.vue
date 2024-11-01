<script setup lang="ts">
// Define interface
interface CardProps {
  size?: "md" | "lg" | "xl";
  icon: string;
}

const props = withDefaults(defineProps<CardProps>(), {
  size: "md",
});

// Predefined Tailwind classes for different sizes
const sizeClasses = {
  md: {
    card: "w-24 h-24",
    icon: "w-8 h-8",
  },
  lg: {
    card: "w-32 h-32",
    icon: "w-12 h-12",
  },
  xl: {
    card: "w-52 h-52",
    icon: "w-24 h-24",
  },
};

// Compute the appropriate classes based on size prop
const computedClasses = computed(() => {
  return sizeClasses[props.size] || sizeClasses.md;
});
</script>

<template>
  <UButton
    :class="[
      computedClasses.card,
      'bg-secondary',
      'flex',
      'items-center',
      'justify-center',
    ]"
  >
    <UIcon :name="props.icon" :class="[computedClasses.icon]" />
  </UButton>
</template>
