<template>
  <div>
    <h2 class="text-3xl font-bold mb-6">Financial Management</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Income</h3>
        <ul class="space-y-2">
          <li v-for="(item, index) in income" :key="index" class="flex justify-between">
            <span>{{ item.description }}</span>
            <span class="font-medium text-green-600">${{ item.amount.toFixed(2) }}</span>
          </li>
        </ul>
        <p class="mt-4 text-xl font-bold">Total: ${{ totalIncome.toFixed(2) }}</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Expenses</h3>
        <ul class="space-y-2">
          <li v-for="(item, index) in expenses" :key="index" class="flex justify-between">
            <span>{{ item.description }}</span>
            <span class="font-medium text-red-600">${{ item.amount.toFixed(2) }}</span>
          </li>
        </ul>
        <p class="mt-4 text-xl font-bold">Total: ${{ totalExpenses.toFixed(2) }}</p>
      </div>
    </div>
    <div class="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-4">Profit/Loss</h3>
      <p class="text-2xl font-bold" :class="{ 'text-green-600': profitLoss > 0, 'text-red-600': profitLoss < 0 }">
        {{ profitLoss > 0 ? 'Profit' : 'Loss' }}: ${{ Math.abs(profitLoss).toFixed(2) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const income = ref([
  { description: 'Crop Sales', amount: 5000 },
  { description: 'Consulting Services', amount: 1500 },
]);

const expenses = ref([
  { description: 'Seeds and Nutrients', amount: 1000 },
  { description: 'Electricity', amount: 500 },
  { description: 'Equipment Maintenance', amount: 300 },
]);

const totalIncome = computed(() => income.value.reduce((sum, item) => sum + item.amount, 0));
const totalExpenses = computed(() => expenses.value.reduce((sum, item) => sum + item.amount, 0));
const profitLoss = computed(() => totalIncome.value - totalExpenses.value);
</script>

