<script setup lang="ts">
defineProps<{
  firstName: string;
  lastName: string;
  backgroundColor?: string;
}>();

const getInitials = (firstName: string, lastName: string) => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};
</script>

<template>
  <div
    class="w-10 h-10 rounded-full flex items-center justify-center text-[#646cff] text-sm uppercase border border-[#646cff]"
    :style="{ backgroundColor: backgroundColor || '#F6F3FD' }"
  >
    {{ getInitials(firstName, lastName) }}
  </div>
</template>
