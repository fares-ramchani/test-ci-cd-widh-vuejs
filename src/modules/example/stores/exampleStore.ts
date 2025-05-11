import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { ExampleItem } from '../models/interfaces/ExampleItem';
import { getExampleItems } from '../services/exampleService';

export const useExampleStore = defineStore('example', () => {
  const items = ref<ExampleItem[]>([]);
  const isLoading = ref(false);

  async function fetchItems(): Promise<void> {
    isLoading.value = true;
    items.value = await getExampleItems();
    isLoading.value = false;
    console.log('Items fetched:', items.value);
  }

  return { items, isLoading, fetchItems };
});
