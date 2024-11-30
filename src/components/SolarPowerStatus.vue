<template>
  <div class="solar-monitor">
    <h3 class="monitor-title">
      <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </span>
      Solar Power Status
    </h3>

    <div class="monitor-content">
      <!-- Power Output -->
      <div class="power-output">
        <div class="metric-header">
          <span class="metric-label">Current Output</span>
          <div class="metric-value">
            <span class="value">{{ currentOutput }}</span>
            <span class="unit">kW</span>
          </div>
        </div>
        <div class="power-bar">
          <div class="power-fill" :style="{ width: `${(currentOutput / maxOutput) * 100}%` }">
            <div class="power-animation"></div>
          </div>
        </div>
      </div>

      <!-- Battery Status -->
      <div class="battery-status">
        <div class="metric-header">
          <span class="metric-label">Battery Level</span>
          <div class="metric-value">
            <span class="value">{{ batteryLevel }}</span>
            <span class="unit">%</span>
          </div>
        </div>
        <div class="battery-bar">
          <div class="battery-fill" :style="{ width: `${batteryLevel}%` }">
            <div class="battery-animation"></div>
          </div>
        </div>
      </div>

      <!-- Daily Stats -->
      <div class="stats-grid">
        <!-- Energy Generated -->
        <div class="stat-panel">
          <div class="stat-label">Energy Generated</div>
          <div class="stat-value">
            <span class="value">{{ dailyGeneration }}</span>
            <span class="unit">kWh</span>
          </div>
          <div class="stat-subtitle">Today</div>
        </div>

        <!-- Peak Power -->
        <div class="stat-panel">
          <div class="stat-label">Peak Power</div>
          <div class="stat-value">
            <span class="value">{{ peakPower }}</span>
            <span class="unit">kW</span>
          </div>
          <div class="stat-subtitle">Today's Peak</div>
        </div>
      </div>

      <!-- System Status -->
      <div class="status-grid">
        <div class="status-item" :class="{ 'active': systemStatus === 'Online' }">
          <div class="status-dot" :class="{ 'active': systemStatus === 'Online' }"></div>
          <span class="status-label">System {{ systemStatus }}</span>
        </div>
        <div class="status-item" :class="{ 'active': isCharging }">
          <div class="status-dot" :class="{ 'active': isCharging }"></div>
          <span class="status-label">{{ chargingStatus }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const currentOutput = ref(3.5);
const maxOutput = ref(5.0);
const batteryLevel = ref(75);
const dailyGeneration = ref(15.7);
const peakPower = ref(4.2);
const systemStatus = ref('Online');
const isCharging = ref(true);

const chargingStatus = computed(() => {
  return isCharging.value ? 'Charging' : 'Standby';
});

onMounted(() => {
  // Simulate real-time updates
  setInterval(() => {
    currentOutput.value = Math.max(3.0, Math.min(4.0, currentOutput.value + (Math.random() - 0.5) * 0.2));
    batteryLevel.value = Math.max(60, Math.min(90, batteryLevel.value + (Math.random() - 0.5) * 2));
    dailyGeneration.value = Math.max(15, Math.min(20, dailyGeneration.value + (Math.random() - 0.5) * 0.1));
    
    if (currentOutput.value > peakPower.value) {
      peakPower.value = currentOutput.value;
    }
    
    if (Math.random() > 0.95) {
      isCharging.value = !isCharging.value;
    }
  }, 3000);
});
</script>

<style scoped>
.solar-monitor {
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
  color: #f59e0b;
  margin-right: 0.5rem;
}

.icon-svg {
  width: 1.5rem;
  height: 1.5rem;
}

.monitor-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Power Output & Battery Status */
.power-output,
.battery-status {
  background: rgba(17, 24, 39, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
}

.metric-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.metric-label {
  color: #f59e0b;
  font-size: 0.875rem;
}

.metric-value {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.value {
  font-size: 1.5rem;
  font-weight: 600;
}

.unit {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Progress Bars */
.power-bar,
.battery-bar {
  height: 0.75rem;
  background: rgba(75, 85, 99, 0.2);
  border-radius: 0.375rem;
  overflow: hidden;
}

.power-fill {
  height: 100%;
  background: linear-gradient(to right, #f59e0b, #d97706);
  transition: width 0.3s ease;
  position: relative;
}

.battery-fill {
  height: 100%;
  background: linear-gradient(to right, #10b981, #059669);
  transition: width 0.3s ease;
  position: relative;
}

.power-animation,
.battery-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: shine 2s infinite linear;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-panel {
  background: rgba(17, 24, 39, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
}

.stat-label {
  color: #f59e0b;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.stat-subtitle {
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
}

/* Status Grid */
.status-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(17, 24, 39, 0.5);
  padding: 0.75rem;
  border-radius: 0.5rem;
}

.status-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--text-secondary);
}

.status-dot.active {
  background: #10b981;
  animation: pulse 2s infinite;
}

.status-label {
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

@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (max-width: 640px) {
  .stats-grid,
  .status-grid {
    grid-template-columns: 1fr;
  }
}
</style>
