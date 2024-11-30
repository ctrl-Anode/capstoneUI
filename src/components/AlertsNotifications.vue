<template>
  <div class="alerts">
    <h3 class="alerts-title">
      <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </span>
      Alerts & Notifications
      <span class="alert-count">{{ activeAlerts.length }}</span>
    </h3>

    <div class="alerts-container">
      <!-- Active Alerts -->
      <div v-for="(alert, index) in activeAlerts" 
           :key="index"
           class="alert-card"
           :class="getSeverityClass(alert.severity)">
        
        <!-- Alert Header -->
        <div class="alert-header">
          <div class="alert-severity">
            <div class="severity-dot" :class="getSeverityDotClass(alert.severity)"></div>
            <span class="severity-text">{{ alert.title }}</span>
          </div>
          <span class="alert-time">{{ alert.time }}</span>
        </div>

        <!-- Alert Message -->
        <p class="alert-message">{{ alert.message }}</p>

        <!-- Alert Footer -->
        <div class="alert-footer">
          <span class="severity-badge" :class="getSeverityBadgeClass(alert.severity)">
            {{ alert.severity }}
          </span>
          <button @click="dismissAlert(index)" class="dismiss-btn">
            Dismiss
          </button>
        </div>
      </div>

      <!-- No Alerts Message -->
      <div v-if="activeAlerts.length === 0" class="no-alerts">
        <span>No active alerts</span>
      </div>

      <!-- System Status Indicators -->
      <div class="status-grid">
        <div v-for="status in systemStatuses" 
             :key="status.name"
             class="status-item">
          <div class="status-info">
            <span class="status-label">{{ status.name }}</span>
            <div class="status-indicator">
              <div class="status-dot" :class="{ 'active': status.active }"></div>
              <span class="status-text" :class="{ 'active': status.active }">
                {{ status.active ? 'Active' : 'Inactive' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

const activeAlerts = ref([
  {
    severity: 'Critical',
    title: 'High Temperature Alert',
    message: 'System temperature exceeding normal parameters',
    time: '2 min ago'
  },
  {
    severity: 'Warning',
    title: 'Low Water Level',
    message: 'Water reservoir below 20% capacity',
    time: '5 min ago'
  },
  {
    severity: 'Info',
    title: 'System Update',
    message: 'New firmware update available',
    time: '10 min ago'
  }
]);

const systemStatuses = ref([
  { name: 'Alert System', active: true },
  { name: 'Notifications', active: true },
  { name: 'SMS Alerts', active: false },
  { name: 'Email Notifications', active: true }
]);

const getSeverityClass = (severity) => {
  const classes = {
    'Critical': 'alert-critical',
    'Warning': 'alert-warning',
    'Info': 'alert-info'
  };
  return classes[severity] || '';
};

const getSeverityDotClass = (severity) => {
  const classes = {
    'Critical': 'dot-critical',
    'Warning': 'dot-warning',
    'Info': 'dot-info'
  };
  return classes[severity] || '';
};

const getSeverityBadgeClass = (severity) => {
  const classes = {
    'Critical': 'badge-critical',
    'Warning': 'badge-warning',
    'Info': 'badge-info'
  };
  return classes[severity] || '';
};

const dismissAlert = (index) => {
  activeAlerts.value.splice(index, 1);
};

// Simulate new alerts
onMounted(() => {
  setInterval(() => {
    if (Math.random() > 0.8 && activeAlerts.value.length < 5) {
      const newAlerts = [
        {
          severity: 'Warning',
          title: 'Nutrient Level Alert',
          message: 'Phosphorus levels dropping below optimal range',
          time: 'Just now'
        },
        {
          severity: 'Critical',
          title: 'Power Fluctuation',
          message: 'Unstable power supply detected',
          time: 'Just now'
        },
        {
          severity: 'Info',
          title: 'Maintenance Reminder',
          message: 'Schedule routine system check',
          time: 'Just now'
        }
      ];
      
      activeAlerts.value.unshift(newAlerts[Math.floor(Math.random() * newAlerts.length)]);
    }
  }, 10000);
});
</script>

<style scoped>
.alerts {
  color: var(--text-primary);
}

.alerts-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.icon {
  color: #ef4444;
  margin-right: 0.5rem;
}

.icon-svg {
  width: 1.5rem;
  height: 1.5rem;
}

.alert-count {
  background: #ef4444;
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  margin-left: 0.5rem;
  animation: pulse 2s infinite;
}

.alerts-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.alert-card {
  background: rgba(17, 24, 39, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;
}

.alert-card:hover {
  transform: translateY(-2px);
}

.alert-critical { border-color: rgba(239, 68, 68, 0.3); }
.alert-warning { border-color: rgba(245, 158, 11, 0.3); }
.alert-info { border-color: rgba(59, 130, 246, 0.3); }

.alert-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 0.5rem;
}

.alert-severity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.severity-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.dot-critical { background: #ef4444; }
.dot-warning { background: #f59e0b; }
.dot-info { background: #3b82f6; }

.severity-text {
  font-weight: 500;
}

.alert-time {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.alert-message {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-left: 1rem;
}

.alert-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
}

.severity-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
}

.badge-critical {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.badge-warning {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
}

.badge-info {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
}

.dismiss-btn {
  font-size: 0.75rem;
  color: var(--text-secondary);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.dismiss-btn:hover {
  color: var(--text-primary);
}

.no-alerts {
  background: rgba(17, 24, 39, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: center;
  color: var(--text-secondary);
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.status-item {
  background: rgba(17, 24, 39, 0.5);
  border-radius: 0.75rem;
  padding: 0.75rem;
}

.status-info {
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
  background: var(--text-secondary);
}

.status-dot.active {
  background: #10b981;
  animation: pulse 2s infinite;
}

.status-text {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.status-text.active {
  color: #10b981;
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
  .status-grid {
    grid-template-columns: 1fr;
  }
}
</style>
