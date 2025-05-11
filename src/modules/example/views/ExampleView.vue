<template>
  <div class="h-screen w-screen flex items-center justify-center bg-gray-100">
    <div class="flex flex-col items-center justify-center gap-4">
      <ExampleButton @click="toggleActive()">{{ isActiveText }}</ExampleButton>
      {{ isActive }}

      <ExampleButton @click="fetchItems()">Load Items</ExampleButton>
      {{ items }}
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.title }}</li>
      </ul>

      <ExampleButton @click="resetItems()">reset Items</ExampleButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import ExampleButton from '../components/ExampleButton.vue';

import { useExampleToggle } from '../composables/useExampleToggle';
import { useExampleStore } from '../stores/exampleStore';

const { isActiveText, toggleActive, isActive } = useExampleToggle();
const { fetchItems } = useExampleStore();

const { items } = storeToRefs(useExampleStore());

function resetItems(): void {
  items.value = [];
}
</script>
