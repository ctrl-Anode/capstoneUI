<template>
  <div class="analytics">
    <div class="analytics-container">
      <!-- Analytics Header -->
      <h2 class="analytics-title">
        <span class="gradient-text">System Analytics</span>
        <div class="title-underline"></div>
      </h2>

      <!-- Analytics Grid -->
      <div class="analytics-grid">
        <!-- Performance Overview -->
        <div class="analytics-card main-card">
          <h3 class="card-title">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </span>
            Performance Overview
          </h3>
          <div class="performance-stats">
            <div v-for="(stat, index) in performanceStats" 
                 :key="index"
                 class="stat-item">
              <div class="stat-header">
                <span class="stat-label">{{ stat.label }}</span>
                <span class="stat-value">{{ stat.value }}</span>
              </div>
              <div class="stat-bar">
                <div class="stat-fill" 
                     :style="{ width: `${stat.percentage}%`, background: stat.color }">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- System Health -->
        <div class="analytics-card">
          <h3 class="card-title">
            <span class="icon health-icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            System Health
          </h3>
          <div class="health-metrics">
            <div class="health-score">
              <svg viewBox="0 0 36 36" class="health-chart">
                <path d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#2d3748"
                  stroke-width="3"
                />
                <path d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10b981"
                  stroke-width="3"
                  :stroke-dasharray="`${healthScore}, 100`"
                />
                <text x="18" y="20.35" class="health-percentage">{{ healthScore }}%</text>
              </svg>
              <span class="health-label">Overall Health</span>
            </div>
            <div class="health-details">
              <div v-for="(metric, index) in healthMetrics"
                   :key="index"
                   class="health-metric">
                <span class="metric-name">{{ metric.name }}</span>
                <span class="metric-value" :class="metric.status">{{ metric.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Resource Usage -->
        <div class="analytics-card">
          <h3 class="card-title">
            <span class="icon resource-icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Resource Usage
          </h3>
          <div class="resource-metrics">
            <div v-for="(resource, index) in resourceUsage"
                 :key="index"
                 class="resource-item">
              <div class="resource-info">
                <span class="resource-name">{{ resource.name }}</span>
                <span class="resource-value">{{ resource.value }}</span>
              </div>
              <div class="resource-bar">
                <div class="resource-fill"
                     :style="{ width: `${resource.usage}%`, background: resource.color }">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Real-time Monitoring -->
      <div class="monitoring-section">
        <h3 class="section-title">Real-time Monitoring</h3>
        <div class="monitoring-grid">
          <div v-for="(monitor, index) in monitoringData"
               :key="index"
               class="monitor-card">
            <div class="monitor-header">
              <span class="monitor-name">{{ monitor.name }}</span>
              <span class="monitor-status" :class="monitor.status">● {{ monitor.status }}</span>
            </div>
            <div class="monitor-value">{{ monitor.value }}</div>
            <div class="monitor-trend" :class="monitor.trend">
              <span class="trend-arrow">{{ monitor.trend === 'up' ? '↑' : '↓' }}</span>
              <span class="trend-value">{{ monitor.trendValue }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const performanceStats = ref([
  { label: 'System Efficiency', value: '94%', percentage: 94, color: 'linear-gradient(to right, #10b981, #059669)' },
  { label: 'Resource Optimization', value: '87%', percentage: 87, color: 'linear-gradient(to right, #3b82f6, #2563eb)' },
  { label: 'Growth Rate', value: '92%', percentage: 92, color: 'linear-gradient(to right, #8b5cf6, #7c3aed)' }
]);

const healthScore = ref(95);

const healthMetrics = ref([
  { name: 'CPU Usage', value: '32%', status: 'good' },
  { name: 'Memory', value: '45%', status: 'good' },
  { name: 'Storage', value: '78%', status: 'warning' },
  { name: 'Network', value: '92%', status: 'good' }
]);

const resourceUsage = ref([
  { name: 'Water Consumption', value: '2.3L/hr', usage: 65, color: '#3b82f6' },
  { name: 'Power Usage', value: '1.2kW', usage: 45, color: '#f59e0b' },
  { name: 'Nutrient Level', value: '820ml', usage: 82, color: '#10b981' }
]);

const monitoringData = ref([
  { name: 'Temperature', value: '23.5°C', status: 'optimal', trend: 'up', trendValue: '+0.5°C' },
  { name: 'Humidity', value: '65%', status: 'optimal', trend: 'down', trendValue: '-2%' },
  { name: 'pH Level', value: '6.2', status: 'warning', trend: 'down', trendValue: '-0.1' },
  { name: 'Light Intensity', value: '12000 lux', status: 'optimal', trend: 'up', trendValue: '+500 lux' }
]);
</script>

<style scoped>
.analytics {
  min-height: calc(100vh - 64px);
  background: linear-gradient(135deg, var(--background-dark), var(--background-light));
  padding: 24px;
}

.analytics-container {
  max-width: 1280px;
  margin: 0 auto;
}

.analytics-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  position: relative;
}

.gradient-text {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.title-underline {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 192px;
  height: 4px;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  border-radius: 2px;
}

.analytics-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-bottom: 24px;
}

.analytics-card {
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.3s ease;
}

.analytics-card:hover {
  transform: translateY(-4px);
}

.main-card {
  grid-column: 1 / -1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  color: var(--text-primary);
}

.icon {
  margin-right: 0.75rem;
  color: #3b82f6;
}

.icon-svg {
  width: 1.5rem;
  height: 1.5rem;
}

/* Performance Stats */
.performance-stats {
  display: grid;
  gap: 1.5rem;
}

.stat-item {
  background: rgba(17, 24, 39, 0.5);
  padding: 1rem;
  border-radius: 0.75rem;
}

.stat-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.stat-label {
  color: var(--text-secondary);
}

.stat-value {
  color: var(--text-primary);
  font-weight: 600;
}

.stat-bar {
  height: 0.5rem;
  background: rgba(75, 85, 99, 0.2);
  border-radius: 0.25rem;
  overflow: hidden;
}

.stat-fill {
  height: 100%;
  transition: width 0.3s ease;
}

/* Health Metrics */
.health-metrics {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.health-score {
  text-align: center;
}

.health-chart {
  width: 100px;
  height: 100px;
  transform: rotate(-90deg);
}

.health-percentage {
  transform: rotate(90deg);
  font-size: 0.875rem;
  fill: var(--text-primary);
  text-anchor: middle;
  dominant-baseline: middle;
}

.health-label {
  display: block;
  margin-top: 0.5rem;
  color: var(--text-secondary);
}

.health-details {
  flex: 1;
  display: grid;
  gap: 1rem;
}

.health-metric {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.metric-name {
  color: var(--text-secondary);
}

.metric-value {
  font-weight: 500;
}

.metric-value.good { color: #10b981; }
.metric-value.warning { color: #f59e0b; }
.metric-value.critical { color: #ef4444; }

/* Resource Usage */
.resource-metrics {
  display: grid;
  gap: 1rem;
}

.resource-item {
  background: rgba(17, 24, 39, 0.5);
  padding: 1rem;
  border-radius: 0.75rem;
}

.resource-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.resource-name {
  color: var(--text-secondary);
}

.resource-value {
  color: var(--text-primary);
  font-weight: 500;
}

.resource-bar {
  height: 0.5rem;
  background: rgba(75, 85, 99, 0.2);
  border-radius: 0.25rem;
  overflow: hidden;
}

.resource-fill {
  height: 100%;
  transition: width 0.3s ease;
}

/* Monitoring Section */
.monitoring-section {
  margin-top: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.monitoring-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.monitor-card {
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 1.5rem;
}

.monitor-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.monitor-name {
  color: var(--text-secondary);
}

.monitor-status {
  font-size: 0.875rem;
}

.monitor-status.optimal { color: #10b981; }
.monitor-status.warning { color: #f59e0b; }
.monitor-status.critical { color: #ef4444; }

.monitor-value {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.monitor-trend {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.monitor-trend.up { color: #10b981; }
.monitor-trend.down { color: #ef4444; }

@media (max-width: 768px) {
  .analytics {
    padding: 16px;
  }

  .health-metrics {
    flex-direction: column;
    gap: 1rem;
  }

  .monitoring-grid {
    grid-template-columns: 1fr;
  }
}
</style>
