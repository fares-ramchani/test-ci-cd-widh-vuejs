import { computed, ref } from 'vue';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useExampleToggle() {
  const isActive = ref(false);

  function toggleActive(): void {
    isActive.value = !isActive.value;
  }

  const isActiveText = computed<string>(() =>
    isActive.value ? 'Active' : 'Inactive'
  );
  return { isActiveText, isActive, toggleActive };
}
