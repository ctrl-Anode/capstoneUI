<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo and Title -->
      <div class="logo-section">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" class="logo-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div class="title-container">
          <h1 class="title">AeroponicsPro</h1>
          <p class="subtitle">Intelligent Growing System</p>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="nav-menu">
        <router-link 
          v-for="item in navigation" 
          :key="item.name"
          :to="item.href"
          class="nav-link"
          :class="{ active: item.current }">
          {{ item.name }}
        </router-link>
      </nav>

      <!-- Right Section -->
      <div class="right-section">
        <!-- System Status -->
        <div class="system-status">
          <div class="status-dot status-active"></div>
          <span>System Online</span>
        </div>

        <!-- Notifications -->
        <button class="notification-btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="notification-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span class="notification-badge"></span>
        </button>

        <!-- User Menu -->
        <div class="user-menu">
          <button class="user-btn">
            <div class="user-avatar">A</div>
            <span class="user-name">Admin</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="dropdown-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const navigation = ref([
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Analytics', href: '/analytics', current: false },
  { name: 'Settings', href: '/settings', current: false },
  { name: 'Support', href: '/support', current: false },
]);
</script>

<style scoped>
.header {
  background: rgba(31, 41, 55, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo {
  width: 32px;
  height: 32px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-icon {
  width: 20px;
  height: 20px;
  color: white;
}

.title-container {
  margin-left: 16px;
}

.title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: var(--text-primary);
}

.subtitle {
  font-size: 12px;
  color: var(--text-secondary);
  margin: 0;
}

.nav-menu {
  display: flex;
  gap: 16px;
}

.nav-link {
  padding: 8px 12px;
  border-radius: 6px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(75, 85, 99, 0.2);
  color: var(--text-primary);
}

.nav-link.active {
  background: rgba(59, 130, 246, 0.1);
  color: var(--primary-color);
}

.right-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.system-status {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--text-secondary);
}

.notification-btn {
  position: relative;
  padding: 8px;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  transition: color 0.3s ease;
}

.notification-btn:hover {
  color: var(--text-primary);
}

.notification-icon {
  width: 24px;
  height: 24px;
}

.notification-badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  background: #ef4444;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.user-menu {
  position: relative;
}

.user-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: rgba(31, 41, 55, 0.7);
  border: none;
  border-radius: 20px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.user-btn:hover {
  background: rgba(55, 65, 81, 0.7);
}

.user-avatar {
  width: 32px;
  height: 32px;
  background: linear-gradient(to right, var(--accent-color), #ec4899);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}

.user-name {
  font-size: 14px;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .system-status {
    display: none;
  }
  
  .user-name {
    display: none;
  }
}
</style>
