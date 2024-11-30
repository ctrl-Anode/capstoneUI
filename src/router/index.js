import { createRouter, createWebHistory } from 'vue-router';
import ProjectDashboard from '../views/ProjectDashboard.vue';
import ProjectAnalytics from '../views/ProjectAnalytics.vue';
import ProjectSettings from '../views/ProjectSettings.vue';
import ProjectSupport from '../views/ProjectSupport.vue';

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  { 
    path: '/dashboard', 
    name: 'ProjectDashboard', 
    component: ProjectDashboard,
    meta: { 
      title: 'Dashboard - AeroponicsPro',
      description: 'Monitor and control your aeroponic system'
    }
  },
  {
    path: '/analytics',
    name: 'ProjectAnalytics',
    component: ProjectAnalytics,
    meta: {
      title: 'Analytics - AeroponicsPro',
      description: 'System performance analytics and insights'
    }
  },
  {
    path: '/settings',
    name: 'ProjectSettings',
    component: ProjectSettings,
    meta: {
      title: 'Settings - AeroponicsPro',
      description: 'System configuration and preferences'
    }
  },
  {
    path: '/support',
    name: 'ProjectSupport',
    component: ProjectSupport,
    meta: {
      title: 'Support - AeroponicsPro',
      description: 'Help and support resources'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/dashboard'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// Update page title and meta description
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'AeroponicsPro';
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = to.meta.description || 'Smart Aeroponics System Management Platform';
  
  next();
});

export default router;
