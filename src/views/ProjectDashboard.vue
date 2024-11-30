<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <!-- Dashboard Header -->
      <h2 class="dashboard-title">
        <span class="gradient-text">Aeroponics System Dashboard</span>
        <div class="title-underline"></div>
      </h2>

      <!-- Dashboard Layout -->
      <div class="dashboard-layout">
        <!-- Top Row - Analytics and Alerts -->
        <div class="top-row">
          <!-- Data Visualization -->
          <div class="dashboard-card analytics-card">
            <div class="card-glow blue"></div>
            <div class="card-content">
              <DataVisualization />
            </div>
            <div class="card-border blue"></div>
          </div>

          <!-- Alerts & Notifications -->
          <div class="dashboard-card alerts-card">
            <div class="card-glow red"></div>
            <div class="card-content">
              <AlertsNotifications />
            </div>
            <div class="card-border red"></div>
          </div>
        </div>

        <!-- Bottom Grid - 2x2 Monitoring Cards -->
        <div class="monitoring-grid">
          <!-- Environmental Monitor -->
          <div class="dashboard-card">
            <div class="card-glow green"></div>
            <div class="card-content">
              <EnvironmentalMonitor />
            </div>
            <div class="card-border green"></div>
          </div>

          <!-- Water & Nutrient Monitor -->
          <div class="dashboard-card">
            <div class="card-glow blue"></div>
            <div class="card-content">
              <WaterNutrientMonitor />
            </div>
            <div class="card-border blue"></div>
          </div>

          <!-- Solar Power Status -->
          <div class="dashboard-card">
            <div class="card-glow yellow"></div>
            <div class="card-content">
              <SolarPowerStatus />
            </div>
            <div class="card-border yellow"></div>
          </div>

          <!-- Crop Recommendations -->
          <div class="dashboard-card">
            <div class="card-glow purple"></div>
            <div class="card-content">
              <CropRecommendations />
            </div>
            <div class="card-border purple"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EnvironmentalMonitor from '../components/EnvironmentalMonitor.vue';
import WaterNutrientMonitor from '../components/WaterNutrientMonitor.vue';
import SolarPowerStatus from '../components/SolarPowerStatus.vue';
import AlertsNotifications from '../components/AlertsNotifications.vue';
import CropRecommendations from '../components/CropRecommendations.vue';
import DataVisualization from '../components/DataVisualization.vue';
</script>

<style scoped>
.dashboard {
  min-height: calc(100vh - 64px);
  background: linear-gradient(135deg, var(--background-dark), var(--background-light));
  padding: 24px;
  position: relative;
  overflow: hidden;
}

.dashboard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.dashboard-container {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.dashboard-title {
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

/* Layout Styles */
.dashboard-layout {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.top-row {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.monitoring-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

/* Card Styles */
.dashboard-card {
  position: relative;
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  transition: all 0.3s ease;
  overflow: hidden;
  height: 100%;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-glow.green { background: radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.15), transparent 70%); }
.card-glow.blue { background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 70%); }
.card-glow.yellow { background: radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.15), transparent 70%); }
.card-glow.red { background: radial-gradient(circle at 50% 0%, rgba(239, 68, 68, 0.15), transparent 70%); }
.card-glow.purple { background: radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15), transparent 70%); }

.dashboard-card:hover .card-glow {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 24px;
  height: 100%;
}

.card-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  pointer-events: none;
  transition: all 0.3s ease;
}

.card-border.green { border-color: rgba(16, 185, 129, 0.2); }
.card-border.blue { border-color: rgba(59, 130, 246, 0.2); }
.card-border.yellow { border-color: rgba(245, 158, 11, 0.2); }
.card-border.red { border-color: rgba(239, 68, 68, 0.2); }
.card-border.purple { border-color: rgba(139, 92, 246, 0.2); }

.dashboard-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.dashboard-card:hover .card-border {
  border-width: 2px;
}

.dashboard-card:hover .card-border.green { border-color: rgba(16, 185, 129, 0.4); }
.dashboard-card:hover .card-border.blue { border-color: rgba(59, 130, 246, 0.4); }
.dashboard-card:hover .card-border.yellow { border-color: rgba(245, 158, 11, 0.4); }
.dashboard-card:hover .card-border.red { border-color: rgba(239, 68, 68, 0.4); }
.dashboard-card:hover .card-border.purple { border-color: rgba(139, 92, 246, 0.4); }

/* Animation for cards */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dashboard-card {
  animation: fadeInUp 0.5s ease-out forwards;
}

.analytics-card { animation-delay: 0.1s; }
.alerts-card { animation-delay: 0.2s; }
.monitoring-grid .dashboard-card:nth-child(1) { animation-delay: 0.3s; }
.monitoring-grid .dashboard-card:nth-child(2) { animation-delay: 0.4s; }
.monitoring-grid .dashboard-card:nth-child(3) { animation-delay: 0.5s; }
.monitoring-grid .dashboard-card:nth-child(4) { animation-delay: 0.6s; }

@media (max-width: 1024px) {
  .top-row {
    grid-template-columns: 1fr;
  }

  .monitoring-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .dashboard {
    padding: 16px;
  }

  .dashboard-title {
    font-size: 2rem;
  }
}
</style>
