<template>
  <div class="visualization">
    <h3 class="visualization-title">
      <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </span>
      System Analytics
    </h3>

    <div class="chart-container">
      <!-- Tech-style overlay elements -->
      <div class="tech-dot top-left"></div>
      <div class="tech-dot top-right"></div>
      <div class="tech-dot bottom-left"></div>
      <div class="tech-dot bottom-right"></div>

      <!-- Chart -->
      <div class="chart-wrapper">
        <canvas ref="chart" class="chart"></canvas>
      </div>

      <!-- Legend -->
      <div class="legend">
        <div v-for="(dataset, index) in chartData.datasets" 
             :key="index"
             class="legend-item">
          <div class="legend-color" :style="{ backgroundColor: dataset.borderColor }"></div>
          <span class="legend-label">{{ dataset.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import Chart from 'chart.js/auto';

const chart = ref(null);
const chartData = reactive({
  labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  datasets: [
    {
      label: 'Temperature (°C)',
      data: [22, 24, 27, 23, 25, 28],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true
    },
    {
      label: 'Humidity (%)',
      data: [60, 62, 58, 65, 59, 61],
      borderColor: 'rgb(14, 165, 233)',
      backgroundColor: 'rgba(14, 165, 233, 0.1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true
    }
  ]
});

onMounted(() => {
  const ctx = chart.value.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(17, 24, 39, 0.8)',
          titleColor: 'rgb(147, 197, 253)',
          bodyColor: 'rgb(229, 231, 235)',
          borderColor: 'rgb(59, 130, 246)',
          borderWidth: 1,
          padding: 10,
          bodySpacing: 5,
          titleSpacing: 10
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(107, 114, 128, 0.1)',
            tickColor: 'rgba(107, 114, 128, 0.1)'
          },
          ticks: {
            color: 'rgb(156, 163, 175)'
          }
        },
        y: {
          grid: {
            color: 'rgba(107, 114, 128, 0.1)',
            tickColor: 'rgba(107, 114, 128, 0.1)'
          },
          ticks: {
            color: 'rgb(156, 163, 175)'
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      }
    }
  });

  // Simulate real-time updates
  setInterval(() => {
    chartData.datasets[0].data = chartData.datasets[0].data.map(
      val => Math.max(20, Math.min(30, val + (Math.random() - 0.5)))
    );
    chartData.datasets[1].data = chartData.datasets[1].data.map(
      val => Math.max(40, Math.min(80, val + (Math.random() - 0.5) * 2))
    );
  }, 3000);
});
</script>

<style scoped>
.visualization {
  color: var(--text-primary);
}

.visualization-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.icon {
  color: var(--primary-color);
  margin-right: 0.5rem;
}

.icon-svg {
  width: 1.5rem;
  height: 1.5rem;
}

.chart-container {
  background: rgba(17, 24, 39, 0.5);
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  border: 1px solid var(--border-color);
}

.chart-wrapper {
  position: relative;
  height: 400px;
  margin-bottom: 1rem;
}

.chart {
  width: 100%;
  height: 100%;
}

.tech-dot {
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}

.top-left {
  top: 0;
  left: 0;
  background: var(--primary-color);
  animation: pulse 2s infinite;
}

.top-right {
  top: 0;
  right: 0;
  background: var(--secondary-color);
  animation: pulse 2s infinite 0.5s;
}

.bottom-left {
  bottom: 0;
  left: 0;
  background: var(--accent-color);
  animation: pulse 2s infinite 1s;
}

.bottom-right {
  bottom: 0;
  right: 0;
  background: #10b981;
  animation: pulse 2s infinite 1.5s;
}

.legend {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.legend-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: rgba(31, 41, 55, 0.5);
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
}

.legend-color {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.legend-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

@media (max-width: 640px) {
  .chart-wrapper {
    height: 300px;
  }

  .legend {
    grid-template-columns: 1fr;
  }
}
</style>
