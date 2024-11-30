<template>
  <div class="recommendations">
    <h3 class="recommendations-title">
      <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
      Crop Recommendations
    </h3>

    <!-- Optimal Conditions Panel -->
    <div class="conditions-panel">
      <h4 class="panel-title">Current Optimal Growing Conditions</h4>
      <div class="conditions-grid">
        <div v-for="condition in optimalConditions" 
             :key="condition.name"
             class="condition-item">
          <div class="condition-dot"></div>
          <span class="condition-name">{{ condition.name }}:</span>
          <span class="condition-value">{{ condition.value }}</span>
        </div>
      </div>
    </div>

    <!-- Recommended Crops -->
    <div class="crops-container">
      <div v-for="(crop, index) in recommendedCrops" 
           :key="index"
           class="crop-card">
        
        <!-- Crop Header -->
        <div class="crop-header">
          <div class="crop-title">
            <div class="crop-dot"></div>
            <span class="crop-name">{{ crop.name }}</span>
          </div>
          <span class="success-rate" :class="getSuccessRateClass(crop.successRate)">
            {{ crop.successRate }}% Success Rate
          </span>
        </div>

        <!-- Growth Timeline -->
        <div class="growth-bar">
          <div class="growth-fill" :style="{ width: `${crop.growthProgress}%` }">
            <div class="growth-animation"></div>
          </div>
        </div>

        <!-- Crop Details -->
        <div class="crop-details">
          <div class="detail-item">Growth Time: {{ crop.growthTime }}</div>
          <div class="detail-item">Yield: {{ crop.yield }}</div>
          <div class="detail-item">Difficulty: {{ crop.difficulty }}</div>
        </div>

        <!-- Requirements -->
        <div class="requirements">
          <span v-for="req in crop.requirements" 
                :key="req.name"
                class="requirement-tag"
                :class="{ 'met': req.met }">
            <span class="requirement-dot" :class="{ 'met': req.met }"></span>
            {{ req.name }}
          </span>
        </div>
      </div>
    </div>

    <!-- AI Status -->
    <div class="ai-status">
      <div class="status-content">
        <span class="status-label">AI Recommendation Engine</span>
        <div class="status-indicator">
          <div class="status-dot active"></div>
          <span class="status-text">Active</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const optimalConditions = ref([
  { name: 'Temperature', value: '22-25°C' },
  { name: 'Humidity', value: '60-70%' },
  { name: 'pH Level', value: '5.5-6.5' },
  { name: 'Light Hours', value: '14-16h' }
]);

const recommendedCrops = ref([
  {
    name: 'Lettuce',
    successRate: 95,
    growthProgress: 80,
    growthTime: '30-35 days',
    yield: 'High',
    difficulty: 'Easy',
    requirements: [
      { name: 'Temperature', met: true },
      { name: 'Humidity', met: true },
      { name: 'Nutrients', met: true },
      { name: 'pH Level', met: true }
    ]
  },
  {
    name: 'Basil',
    successRate: 85,
    growthProgress: 60,
    growthTime: '25-30 days',
    yield: 'Medium',
    difficulty: 'Medium',
    requirements: [
      { name: 'Temperature', met: true },
      { name: 'Humidity', met: true },
      { name: 'Nutrients', met: false },
      { name: 'pH Level', met: true }
    ]
  },
  {
    name: 'Cherry Tomatoes',
    successRate: 75,
    growthProgress: 40,
    growthTime: '60-70 days',
    yield: 'High',
    difficulty: 'Advanced',
    requirements: [
      { name: 'Temperature', met: true },
      { name: 'Humidity', met: false },
      { name: 'Nutrients', met: true },
      { name: 'pH Level', met: true }
    ]
  }
]);

const getSuccessRateClass = (rate) => {
  if (rate >= 90) return 'rate-high';
  if (rate >= 75) return 'rate-medium';
  return 'rate-low';
};
</script>

<style scoped>
.recommendations {
  color: var(--text-primary);
}

.recommendations-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.icon {
  color: #10b981;
  margin-right: 0.5rem;
}

.icon-svg {
  width: 1.5rem;
  height: 1.5rem;
}

/* Optimal Conditions Panel */
.conditions-panel {
  background: rgba(17, 24, 39, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.panel-title {
  color: #10b981;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.conditions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.condition-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.condition-dot {
  width: 0.25rem;
  height: 0.25rem;
  background: #10b981;
  border-radius: 50%;
}

.condition-name {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.condition-value {
  font-size: 0.875rem;
  color: #10b981;
}

/* Crop Cards */
.crops-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.crop-card {
  background: rgba(17, 24, 39, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;
}

.crop-card:hover {
  transform: translateY(-2px);
}

.crop-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.crop-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.crop-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #10b981;
  border-radius: 50%;
}

.crop-name {
  font-weight: 500;
  color: #10b981;
}

.success-rate {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
}

.rate-high {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.rate-medium {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
}

.rate-low {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

/* Growth Bar */
.growth-bar {
  height: 0.5rem;
  background: rgba(75, 85, 99, 0.2);
  border-radius: 0.25rem;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.growth-fill {
  height: 100%;
  background: linear-gradient(to right, #10b981, #059669);
  transition: width 0.3s ease;
  position: relative;
}

.growth-animation {
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

/* Crop Details */
.crop-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

/* Requirements */
.requirements {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.requirement-tag {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  background: rgba(75, 85, 99, 0.3);
  color: var(--text-secondary);
}

.requirement-tag.met {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.requirement-dot {
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background: var(--text-secondary);
}

.requirement-dot.met {
  background: #10b981;
}

/* AI Status */
.ai-status {
  background: rgba(17, 24, 39, 0.5);
  border-radius: 0.75rem;
  padding: 0.75rem;
  margin-top: 1rem;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.status-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}

.status-dot.active {
  background: #3b82f6;
  animation: pulse 2s infinite;
}

.status-text {
  font-size: 0.75rem;
  color: #3b82f6;
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
  .conditions-grid {
    grid-template-columns: 1fr;
  }

  .crop-details {
    grid-template-columns: 1fr;
  }
}
</style>
