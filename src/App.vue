<template>
  <div id="app">
    <ProjectHeader />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import ProjectHeader from './components/ProjectHeader.vue';
</script>

<style>
:root {
  --primary-color: #3b82f6;
  --secondary-color: #06b6d4;
  --accent-color: #8b5cf6;
  --background-dark: #111827;
  --background-light: #1f2937;
  --text-primary: #ffffff;
  --text-secondary: #9ca3af;
  --border-color: rgba(75, 85, 99, 0.3);
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', Arial, sans-serif;
  background-color: var(--background-dark);
  color: var(--text-primary);
}

#app {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--background-dark), var(--background-light));
}

main {
  padding: 20px;
}

.card {
  background: rgba(31, 41, 55, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
}

.gradient-text {
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.button {
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.button:hover {
  opacity: 0.9;
}

.grid {
  display: grid;
  gap: 20px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--background-light);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}

/* Animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Form Elements */
input, textarea {
  background: rgba(31, 41, 55, 0.7);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 10px;
  color: var(--text-primary);
  width: 100%;
  margin-bottom: 10px;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

/* Status Indicators */
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}

.status-active {
  background-color: #10b981;
  animation: pulse 2s infinite;
}

.status-warning {
  background-color: #f59e0b;
}

.status-error {
  background-color: #ef4444;
}
</style>
