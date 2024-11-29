export const useFooter = () => {
  const route = useRoute();
  const hideFooter = computed(() => route.meta.hideFooter || false);

  return {
    hideFooter
  };
};
