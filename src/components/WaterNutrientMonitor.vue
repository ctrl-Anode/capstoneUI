<template>
  <div class="monitor">
    <h3 class="monitor-title">
      <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </span>
      Water & Nutrient Monitor
    </h3>

    <div class="monitor-content">
      <!-- Water Level -->
      <div class="water-level">
        <div class="level-header">
          <span class="level-label">Water Level</span>
          <span class="level-value">{{ waterLevel }}%</span>
        </div>
        <div class="level-bar">
          <div class="level-fill" :style="{ width: `${waterLevel}%` }">
            <div class="level-animation"></div>
          </div>
        </div>
      </div>

      <!-- Nutrient Levels -->
      <div class="nutrient-grid">
        <!-- Nitrogen -->
        <div class="nutrient-panel">
          <div class="nutrient-header">
            <span class="nutrient-label">Nitrogen (N)</span>
            <div class="nutrient-value">
              <span>{{ nutrients.nitrogen }}</span>
              <span class="unit">ppm</span>
            </div>
          </div>
          <div class="nutrient-bar">
            <div class="nutrient-fill nitrogen" 
                 :style="{ width: `${(nutrients.nitrogen / 200) * 100}%` }"></div>
          </div>
        </div>

        <!-- Phosphorus -->
        <div class="nutrient-panel">
          <div class="nutrient-header">
            <span class="nutrient-label">Phosphorus (P)</span>
            <div class="nutrient-value">
              <span>{{ nutrients.phosphorus }}</span>
              <span class="unit">ppm</span>
            </div>
          </div>
          <div class="nutrient-bar">
            <div class="nutrient-fill phosphorus" 
                 :style="{ width: `${(nutrients.phosphorus / 50) * 100}%` }"></div>
          </div>
        </div>

        <!-- Potassium -->
        <div class="nutrient-panel">
          <div class="nutrient-header">
            <span class="nutrient-label">Potassium (K)</span>
            <div class="nutrient-value">
              <span>{{ nutrients.potassium }}</span>
              <span class="unit">ppm</span>
            </div>
          </div>
          <div class="nutrient-bar">
            <div class="nutrient-fill potassium" 
                 :style="{ width: `${(nutrients.potassium / 150) * 100}%` }"></div>
          </div>
        </div>

        <!-- EC Level -->
        <div class="nutrient-panel">
          <div class="nutrient-header">
            <span class="nutrient-label">EC Level</span>
            <div class="nutrient-value">
              <span>{{ ecLevel }}</span>
              <span class="unit">mS/cm</span>
            </div>
          </div>
          <div class="nutrient-bar">
            <div class="nutrient-fill ec" 
                 :style="{ width: `${(ecLevel / 3) * 100}%` }"></div>
          </div>
        </div>
      </div>

      <!-- Status Indicators -->
      <div class="status-grid">
        <div class="status-item">
          <div class="status-dot active"></div>
          <span class="status-label">Pump Active</span>
        </div>
        <div class="status-item">
          <div class="status-dot flow"></div>
          <span class="status-label">Flow Normal</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';

const waterLevel = ref(85);
const ecLevel = ref(1.8);
const nutrients = reactive({
  nitrogen: 150,
  phosphorus: 35,
  potassium: 120
});

onMounted(() => {
  // Simulate real-time updates
  setInterval(() => {
    waterLevel.value = Math.max(0, Math.min(100, waterLevel.value + (Math.random() - 0.5) * 2));
    ecLevel.value = Math.max(1.0, Math.min(2.5, ecLevel.value + (Math.random() - 0.5) * 0.1));
    nutrients.nitrogen = Math.max(100, Math.min(200, nutrients.nitrogen + (Math.random() - 0.5) * 5));
    nutrients.phosphorus = Math.max(20, Math.min(50, nutrients.phosphorus + (Math.random() - 0.5) * 2));
    nutrients.potassium = Math.max(80, Math.min(150, nutrients.potassium + (Math.random() - 0.5) * 4));
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
  color: var(--accent-color);
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

/* Water Level Styles */
.water-level {
  background: rgba(17, 24, 39, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
}

.level-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.level-label {
  color: var(--primary-color);
  font-size: 0.875rem;
}

.level-value {
  font-size: 0.875rem;
}

.level-bar {
  height: 1rem;
  background: rgba(75, 85, 99, 0.2);
  border-radius: 0.5rem;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  transition: width 0.3s ease;
  position: relative;
}

.level-animation {
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
  animation: wave 2s infinite linear;
}

/* Nutrient Grid Styles */
.nutrient-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.nutrient-panel {
  background: rgba(17, 24, 39, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
}

.nutrient-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.nutrient-label {
  color: var(--accent-color);
  font-size: 0.875rem;
}

.nutrient-value {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.unit {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.nutrient-bar {
  height: 0.5rem;
  background: rgba(75, 85, 99, 0.2);
  border-radius: 0.25rem;
  overflow: hidden;
}

.nutrient-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.nutrient-fill.nitrogen {
  background: linear-gradient(to right, #10b981, #059669);
}

.nutrient-fill.phosphorus {
  background: linear-gradient(to right, #f59e0b, #d97706);
}

.nutrient-fill.potassium {
  background: linear-gradient(to right, #8b5cf6, #7c3aed);
}

.nutrient-fill.ec {
  background: linear-gradient(to right, #ef4444, #dc2626);
}

/* Status Grid Styles */
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
}

.status-dot.active {
  background: #10b981;
  animation: pulse 2s infinite;
}

.status-dot.flow {
  background: var(--primary-color);
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

@keyframes wave {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (max-width: 640px) {
  .nutrient-grid {
    grid-template-columns: 1fr;
  }
}
</style>
