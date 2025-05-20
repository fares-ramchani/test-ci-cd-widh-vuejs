<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { service } from '@/core/services/axios/service';
const users = ref([]);

onMounted(async () => {
  try {
    const response = await service.users.userControllerGetAllUsers();
    const data = response?.data;
    if (data !== undefined && data !== null) {
      users.value = data;
    } else {
      console.error('No data found');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h2 class="text-2xl font-bold mb-4">Utilisateurs</h2>
    <ul class="space-y-2">
      <li
        v-for="user in users"
        :key="user.id"
        class="border border-gray-200 p-3 rounded-md"
      >
        <p><strong>Nom :</strong> {{ user?.name }}</p>
        <p><strong>Email :</strong> {{ user?.email }}</p>
        <p class="text-sm text-gray-500">
          Créé le : {{ new Date(user?.createdAt).toLocaleString() }}
        </p>
      </li>
    </ul>
  </div>
</template>
