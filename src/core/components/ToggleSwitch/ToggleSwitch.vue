<template>
  <button
    class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    :class="[enabled ? 'bg-blue-600' : 'bg-gray-200']"
    @click="$emit('toggle')"
  >
    <span
      class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
      :class="[enabled ? 'translate-x-5' : 'translate-x-0']"
    />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  enabled: boolean;
}>();

defineEmits<{
  (e: 'toggle'): void;
}>();
</script>
