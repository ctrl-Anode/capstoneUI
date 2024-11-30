<template>
  <div class="support">
    <div class="support-container">
      <!-- Support Header -->
      <h2 class="support-title">
        <span class="gradient-text">Support Center</span>
        <div class="title-underline"></div>
      </h2>

      <!-- Quick Help Section -->
      <div class="help-grid">
        <div v-for="(category, index) in helpCategories" 
             :key="index"
             class="help-card">
          <div class="help-icon">
            <component :is="category.icon" class="icon-svg" />
          </div>
          <h3 class="help-title">{{ category.name }}</h3>
          <p class="help-description">{{ category.description }}</p>
          <button class="help-button">Learn More</button>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="faq-section">
        <h3 class="section-title">Frequently Asked Questions</h3>
        <div class="faq-list">
          <div v-for="(faq, index) in faqs" 
               :key="index"
               class="faq-item">
            <button @click="faq.isOpen = !faq.isOpen"
                    class="faq-question"
                    :class="{ 'active': faq.isOpen }">
              <span>{{ faq.question }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" 
                   class="chevron-icon"
                   :class="{ 'rotate': faq.isOpen }"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="faq.isOpen" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Support -->
      <div class="contact-section">
        <h3 class="section-title">Contact Support</h3>
        <form class="contact-form">
          <div class="form-group">
            <label class="form-label">Subject</label>
            <input type="text" 
                   class="form-input"
                   placeholder="How can we help you?">
          </div>
          <div class="form-group">
            <label class="form-label">Message</label>
            <textarea class="form-input" 
                      rows="4"
                      placeholder="Describe your issue or question"></textarea>
          </div>
          <button type="submit" class="submit-button">Submit Request</button>
        </form>
      </div>

      <!-- Support Status -->
      <div class="support-status">
        <div class="status-item">
          <div class="status-icon online"></div>
          <span class="status-text">Support Team Online</span>
          <span class="status-detail">Average Response Time: 15 minutes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, h } from 'vue';

// Icon Components
const GuideIcon = {
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      class: 'icon-svg'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
      })
    ]);
  }
};

const TroubleshootIcon = {
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      class: 'icon-svg'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
      }),
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'
      })
    ]);
  }
};

const ContactIcon = {
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      class: 'icon-svg'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
      })
    ]);
  }
};

const helpCategories = ref([
  {
    name: 'User Guides',
    description: 'Comprehensive guides and tutorials for system operation',
    icon: GuideIcon
  },
  {
    name: 'Troubleshooting',
    description: 'Common issues and their solutions',
    icon: TroubleshootIcon
  },
  {
    name: 'Contact Us',
    description: 'Get in touch with our support team',
    icon: ContactIcon
  }
]);

const faqs = ref([
  {
    question: 'How do I optimize my system\'s performance?',
    answer: 'Regular maintenance, monitoring environmental conditions, and following recommended settings will help optimize your system\'s performance.',
    isOpen: false
  },
  {
    question: 'What should I do if the sensors stop working?',
    answer: 'First, check all connections and power supply. If the issue persists, try resetting the system. Contact support if problems continue.',
    isOpen: false
  },
  {
    question: 'How often should I calibrate the sensors?',
    answer: 'We recommend calibrating sensors every 30 days or when you notice significant deviations in readings.',
    isOpen: false
  }
]);
</script>

<style scoped>
.support {
  min-height: calc(100vh - 64px);
  background: linear-gradient(135deg, var(--background-dark), var(--background-light));
  padding: 24px;
}

.support-container {
  max-width: 1280px;
  margin: 0 auto;
}

.support-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  position: relative;
}

.gradient-text {
  background: linear-gradient(to right, #8b5cf6, #6366f1);
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
  background: linear-gradient(to right, #8b5cf6, #6366f1);
  border-radius: 2px;
}

/* Help Categories */
.help-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.help-card {
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  transition: transform 0.3s ease;
}

.help-card:hover {
  transform: translateY(-4px);
}

.help-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b5cf6;
}

.icon-svg {
  width: 24px;
  height: 24px;
}

.help-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.help-description {
  color: var(--text-secondary);
  margin-bottom: 16px;
  font-size: 0.875rem;
}

.help-button {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.help-button:hover {
  background: rgba(139, 92, 246, 0.2);
}

/* FAQ Section */
.faq-section {
  margin-bottom: 48px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
  color: var(--text-primary);
}

.faq-list {
  max-width: 768px;
  margin: 0 auto;
}

.faq-item {
  background: rgba(17, 24, 39, 0.7);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: var(--text-primary);
  font-weight: 500;
  cursor: pointer;
  text-align: left;
}

.faq-question.active {
  border-bottom: 1px solid var(--border-color);
}

.chevron-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.chevron-icon.rotate {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 16px;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* Contact Form */
.contact-section {
  max-width: 768px;
  margin: 0 auto 48px;
}

.contact-form {
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.form-input {
  width: 100%;
  padding: 12px;
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #8b5cf6;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background: #8b5cf6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background: #7c3aed;
}

/* Support Status */
.support-status {
  max-width: 768px;
  margin: 0 auto;
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 16px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.status-icon {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-icon.online {
  background: #10b981;
  animation: pulse 2s infinite;
}

.status-text {
  color: var(--text-primary);
  font-weight: 500;
}

.status-detail {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-left: auto;
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

@media (max-width: 768px) {
  .support {
    padding: 16px;
  }

  .help-grid {
    grid-template-columns: 1fr;
  }

  .status-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .status-detail {
    margin-left: 0;
  }
}
</style>
