<template>
  <div v-if="modelValue" class="fixed inset-0 overflow-hidden z-40">
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-black bg-opacity-50"
      @click="modelValue = false"
    ></div>

    <!-- Panel -->
    <div
      class="absolute inset-y-0 right-0 bg-grayCustomBg shadow-xl flex flex-col"
      :style="panelStyle"
      :class="[
        'min-w-[280px]', // Minimum width for usability
        'max-w-[90vw]', // Maximum width to prevent overflow
      ]"
    >
      <div class="flex items-center justify-between p-4">
        <slot name="header">
          <h2 class="text-xl font-semibold">Panel Content</h2>
        </slot>
        <button
          class="p-2 rounded-full hover:bg-gray-100"
          aria-label="Close panel"
          @click="modelValue = false"
        >
          <svg
            class="w-5 h-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div class="flex-1 overflow-y-auto p-6">
        <slot></slot>
      </div>

      <div class="p-4 flex justify-end space-x-4">
        <slot name="actions">
          <button
            class="min-w-[120px] px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 font-medium"
            @click="modelValue = false"
          >
            Annuler
          </button>
          <button
            class="min-w-[120px] px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
            @click="modelValue = false"
          >
            Enregistrer
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const modelValue = defineModel<boolean>({
  required: true,
});

const props = defineProps<{
  width?: string | number;
}>();

const panelStyle = computed(() => ({
  width: props.width
    ? typeof props.width === 'number'
      ? `${props.width}px`
      : props.width
    : 'fit-content',
}));
</script>
