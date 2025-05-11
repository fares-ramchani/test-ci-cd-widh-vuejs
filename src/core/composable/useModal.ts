import { onMounted, onUnmounted, ref } from 'vue';

interface ModalProps {
  persistent: boolean;
  modelValue: boolean;
}

interface ModalEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'cancel'): void;
  (e: 'confirm'): void;
}

export function useModal(props: ModalProps, emit: ModalEmits) {
  const modalRef = ref<HTMLElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !props.persistent &&
      modalRef.value &&
      !modalRef.value.contains(event.target as Node)
    ) {
      emit('update:modelValue', false);
    }
  };

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });

  const close = () => {
    emit('update:modelValue', false);
  };

  const handleCancel = () => {
    emit('cancel');
    close();
  };

  const handleConfirm = () => {
    emit('confirm');
    close();
  };

  return {
    modalRef,
    handleCancel,
    handleConfirm,
  };
}
