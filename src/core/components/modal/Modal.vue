<script setup lang="ts">
import { useModal } from '../../composable/useModal';
import ModalOverlay from './ModalOverlay.vue';
import ModalActions from './ModalActions.vue';

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    title: string;
    persistent?: boolean;
    cancelLabel?: string;
    confirmLabel?: string;
    showCloseIcon?: boolean;
    maxwidth?: string;
    hideModalActions?: boolean;
  }>(),
  {
    persistent: false,
    showCloseIcon: true,
    cancelLabel: 'Annuler',
    confirmLabel: 'Confirmer',
    maxwidth: 'max-w-md',
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'cancel'): void;
  (e: 'confirm'): void;
}>();

const { modalRef, handleCancel, handleConfirm } = useModal(props, emit);
</script>

<template>
  <Teleport to="#app">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-40 overflow-y-auto rounded-2xl"
      >
        <ModalOverlay :show="modelValue" />
        <div
          class="flex min-h-screen rounded-2xl items-center justify-center p-4"
        >
          <div
            ref="modalRef"
            :class="[
              maxwidth,
              'relative w-full rounded transform overflow-hidden rounded-2xl-lg bg-white p-6 text-left shadow-xl transition-all',
            ]"
          >
            <!-- Close button -->
            <button
              v-if="showCloseIcon"
              type="button"
              class="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
              @click="handleCancel"
            >
              <span class="sr-only">Close</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <!-- Content -->
            <div class="mt-3 text-center sm:mt-5">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                {{ title }}
              </h3>
              <div class="mt-4">
                <slot />
              </div>
            </div>

            <ModalActions
              v-if="!hideModalActions"
              :cancel-label="cancelLabel"
              :confirm-label="confirmLabel"
              @cancel="handleCancel"
              @confirm="handleConfirm"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.15s ease-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
