<template>
  <Transition>
    <div
      v-if="show"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm"
      aria-hidden="true"
    />
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean;
}>();
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
