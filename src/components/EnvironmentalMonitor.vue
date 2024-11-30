<template>
  <div class="monitor">
    <h3 class="monitor-title">
      <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      </span>
      Environmental Monitor
    </h3>

    <div class="monitor-grid">
      <!-- Temperature Panel -->
      <div class="monitor-panel">
        <div class="metric-badge">°C</div>
        <p class="metric-label">Temperature</p>
        <div class="metric-value">
          <span class="value">{{ temperature }}</span>
          <span class="unit">°C</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill temperature" :style="{ width: `${(temperature / 40) * 100}%` }"></div>
        </div>
      </div>

      <!-- Humidity Panel -->
      <div class="monitor-panel">
        <div class="metric-badge">%</div>
        <p class="metric-label">Humidity</p>
        <div class="metric-value">
          <span class="value">{{ humidity }}</span>
          <span class="unit">%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill humidity" :style="{ width: `${humidity}%` }"></div>
        </div>
      </div>

      <!-- pH Level Panel -->
      <div class="monitor-panel">
        <div class="metric-badge">pH</div>
        <p class="metric-label">pH Level</p>
        <div class="metric-value">
          <span class="value">{{ pH }}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill ph" :style="{ width: `${(pH / 14) * 100}%` }"></div>
        </div>
      </div>

      <!-- Misting Cycle Panel -->
      <div class="monitor-panel">
        <div class="metric-badge" :class="{ 'active': mistingCycle === 'Active' }">⚡</div>
        <p class="metric-label">Misting Cycle</p>
        <div class="metric-value">
          <span class="value">{{ mistingCycle }}</span>
          <span v-if="mistingCycle === 'Active'" class="status-dot"></span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill misting" 
               :class="{ 'active': mistingCycle === 'Active' }"
               :style="{ width: mistingCycle === 'Active' ? '100%' : '0%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const temperature = ref(0);
const humidity = ref(0);
const pH = ref(0);
const mistingCycle = ref('Off');

onMounted(() => {
  // Initial values
  temperature.value = 25;
  humidity.value = 60;
  pH.value = 6.5;
  mistingCycle.value = 'Active';

  // Simulate real-time updates
  setInterval(() => {
    temperature.value = Math.max(20, Math.min(30, temperature.value + (Math.random() - 0.5)));
    humidity.value = Math.max(40, Math.min(80, humidity.value + (Math.random() - 0.5) * 2));
    pH.value = Math.max(5.5, Math.min(7.5, pH.value + (Math.random() - 0.5) * 0.1));
  }, 3000);
});
</script>

<style scoped>
.monitor {
  color: var(--text-primary);
}

.monitor-title {
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

.monitor-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.monitor-panel {
  background: rgba(17, 24, 39, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
  position: relative;
}

.metric-badge {
  position: absolute;
  top: -0.75rem;
  right: -0.75rem;
  width: 1.5rem;
  height: 1.5rem;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: white;
}

.metric-badge.active {
  animation: pulse 2s infinite;
}

.metric-label {
  color: var(--primary-color);
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.metric-value {
  display: flex;
  align-items: baseline;
}

.value {
  font-size: 1.875rem;
  font-weight: 600;
}

.unit {
  color: var(--primary-color);
  margin-left: 0.25rem;
}

.progress-bar {
  height: 0.25rem;
  background: rgba(75, 85, 99, 0.2);
  border-radius: 0.125rem;
  margin-top: 0.5rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.progress-fill.temperature {
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
}

.progress-fill.humidity {
  background: linear-gradient(to right, var(--secondary-color), var(--accent-color));
}

.progress-fill.ph {
  background: linear-gradient(to right, var(--accent-color), #f59e0b);
}

.progress-fill.misting {
  background: linear-gradient(to right, #10b981, #059669);
}

.progress-fill.misting.active {
  animation: pulse 2s infinite;
}

.status-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #10b981;
  border-radius: 50%;
  margin-left: 0.5rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@media (max-width: 640px) {
  .monitor-grid {
    grid-template-columns: 1fr;
  }
}
</style>
