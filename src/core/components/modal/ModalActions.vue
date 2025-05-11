<script setup lang="ts">
defineProps<{
  cancelLabel: string;
  confirmLabel: string;
}>();

defineEmits<{
  (e: 'cancel'): void;
  (e: 'confirm'): void;
}>();
</script>

<template>
  <div class="mt-6 flex justify-end gap-3">
    <button
      type="button"
      class="w-full mt-4 mr-8 p-4 bg-white text-primary border border-black text-bg-primary text-sm font-medium rounded-2xl"
      @click="$emit('cancel')"
    >
      {{ cancelLabel }}
    </button>
    <button
      type="button"
      class="w-full mt-4 p-3 text-sm font-medium rounded-2xl bg-primary text-white border-bg-primary"
      @click="$emit('confirm')"
    >
      {{ confirmLabel }}
    </button>
  </div>
</template>
