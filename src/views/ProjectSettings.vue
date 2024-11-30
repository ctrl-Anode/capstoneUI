<template>
  <div class="settings">
    <div class="settings-container">
      <!-- Settings Header -->
      <h2 class="settings-title">
        <span class="gradient-text">System Settings</span>
        <div class="title-underline"></div>
      </h2>

      <!-- Settings Grid -->
      <div class="settings-grid">
        <!-- System Configuration -->
        <div class="settings-card main-card">
          <h3 class="card-title">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            System Configuration
          </h3>

          <div class="settings-list">
            <div v-for="setting in systemSettings" 
                 :key="setting.name"
                 class="setting-item">
              <div class="setting-info">
                <h4 class="setting-name">{{ setting.name }}</h4>
                <p class="setting-description">{{ setting.description }}</p>
              </div>
              <div class="setting-control">
                <span class="setting-value">{{ setting.value }}</span>
                <button class="edit-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" class="edit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Notification Preferences -->
        <div class="settings-card">
          <h3 class="card-title">
            <span class="icon notification-icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </span>
            Notification Preferences
          </h3>

          <div class="notification-list">
            <div v-for="pref in notificationPreferences" 
                 :key="pref.name"
                 class="notification-item">
              <div class="notification-info">
                <h4 class="notification-name">{{ pref.name }}</h4>
                <p class="notification-description">{{ pref.description }}</p>
              </div>
              <label class="toggle-switch">
                <input type="checkbox" :checked="pref.enabled">
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="settings-card">
          <h3 class="card-title">
            <span class="icon action-icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Quick Actions
          </h3>

          <div class="actions-list">
            <button v-for="action in quickActions"
                    :key="action.name"
                    class="action-button">
              <div class="action-info">
                <h4 class="action-name">{{ action.name }}</h4>
                <p class="action-description">{{ action.description }}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const systemSettings = ref([
  {
    name: 'System Update Interval',
    description: 'Frequency of system data updates',
    value: '30 seconds'
  },
  {
    name: 'Data Retention',
    description: 'How long to keep historical data',
    value: '90 days'
  },
  {
    name: 'Backup Schedule',
    description: 'Frequency of system backups',
    value: 'Daily'
  }
]);

const notificationPreferences = ref([
  {
    name: 'System Alerts',
    description: 'Critical system notifications',
    enabled: true
  },
  {
    name: 'Performance Updates',
    description: 'Regular system performance reports',
    enabled: true
  },
  {
    name: 'Maintenance Reminders',
    description: 'Scheduled maintenance notifications',
    enabled: true
  }
]);

const quickActions = ref([
  {
    name: 'System Backup',
    description: 'Create a manual backup of system data'
  },
  {
    name: 'Reset Preferences',
    description: 'Restore default system settings'
  },
  {
    name: 'Export Data',
    description: 'Download system data as CSV'
  }
]);
</script>

<style scoped>
.settings {
  min-height: calc(100vh - 64px);
  background: linear-gradient(135deg, var(--background-dark), var(--background-light));
  padding: 24px;
}

.settings-container {
  max-width: 1280px;
  margin: 0 auto;
}

.settings-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  position: relative;
}

.gradient-text {
  background: linear-gradient(to right, #10b981, #059669);
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
  background: linear-gradient(to right, #10b981, #059669);
  border-radius: 2px;
}

.settings-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.settings-card {
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.3s ease;
}

.settings-card:hover {
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
  color: #10b981;
}

.icon-svg {
  width: 1.5rem;
  height: 1.5rem;
}

/* System Settings */
.settings-list {
  display: grid;
  gap: 1rem;
}

.setting-item {
  background: rgba(17, 24, 39, 0.5);
  padding: 1rem;
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.setting-info {
  flex: 1;
}

.setting-name {
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.setting-description {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.setting-control {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.setting-value {
  color: #10b981;
  font-weight: 500;
}

.edit-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.edit-btn:hover {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.edit-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Notification Preferences */
.notification-list {
  display: grid;
  gap: 1rem;
}

.notification-item {
  background: rgba(17, 24, 39, 0.5);
  padding: 1rem;
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notification-info {
  flex: 1;
}

.notification-name {
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.notification-description {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* Toggle Switch */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(75, 85, 99, 0.5);
  transition: 0.3s;
  border-radius: 24px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: #10b981;
}

input:checked + .toggle-slider:before {
  transform: translateX(24px);
}

/* Quick Actions */
.actions-list {
  display: grid;
  gap: 1rem;
}

.action-button {
  background: rgba(17, 24, 39, 0.5);
  border: none;
  padding: 1rem;
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.action-button:hover {
  background: rgba(16, 185, 129, 0.1);
}

.action-info {
  flex: 1;
}

.action-name {
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.action-description {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #10b981;
  transition: transform 0.3s ease;
}

.action-button:hover .arrow-icon {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .settings {
    padding: 16px;
  }

  .settings-grid {
    grid-template-columns: 1fr;
  }
}
</style>
