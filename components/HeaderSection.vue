<template>
  <header class="flex flex-col sm:flex-row justify-between items-center p-2 sm:p-6 header-section">
    <div class="flex items-center mb-2 sm:mb-0 logo-container">
      <div class="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 p-1 logo-icon">
        <CodeIcon class="w-16 h-16 sm:w-24 sm:h-24 text-white" />
      </div>
      <span class="font-bold logo-text">CM</span>
    </div>
    <!-- Navigation (visible sur tous les appareils) -->
    <nav class="flex space-x-3 sm:space-x-8 text-sm sm:text-base nav-container">
      <a href="#hero" class="nav-link text-black hover:text-gray-600 transition-colors">Accueil</a>
      <button
        class="nav-link text-gray-500 hover:text-gray-600 transition-colors cursor-pointer"
        @click="openSkillsModal"
      >
        Compétences
      </button>
      <a href="#projects" class="nav-link text-gray-500 hover:text-gray-600 transition-colors">Projets</a>
      <button
        class="nav-link text-gray-500 hover:text-gray-600 transition-colors cursor-pointer"
        @click="openEducationModal"
      >
        Éducation
      </button>
    </nav>

    <!-- Modal des compétences -->
    <Dialog
      v-model:visible="isSkillsModalOpen"
      modal
      header="Compétences Techniques"
      :style="{ width: '90vw', maxWidth: '800px' }"
      :breakpoints="{ '960px': '75vw', '641px': '95vw' }"
      class="skills-modal"
    >
      <SkillsContent />
      <template #footer>
        <div class="flex justify-center">
          <Button
            label="Fermer"
            severity="secondary"
            class="px-6 py-2"
            @click="closeSkillsModal"
          />
        </div>
      </template>
    </Dialog>

    <!-- Modal de l'éducation -->
    <Dialog
      v-model:visible="isEducationModalOpen"
      modal
      header="Formation & Éducation"
      :style="{ width: '90vw', maxWidth: '700px' }"
      :breakpoints="{ '960px': '75vw', '641px': '95vw' }"
      class="education-modal"
    >
      <EducationContent />
      <template #footer>
        <div class="flex justify-center">
          <Button
            label="Fermer"
            severity="secondary"
            class="px-6 py-2"
            @click="closeEducationModal"
          />
        </div>
      </template>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Code as CodeIcon } from 'lucide-vue-next'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import SkillsContent from './SkillsContent.vue'
import EducationContent from './EducationContent.vue'

// État du modal des compétences
const isSkillsModalOpen = ref(false)

const openSkillsModal = () => {
  console.log('Opening skills modal')
  isSkillsModalOpen.value = true
}

const closeSkillsModal = () => {
  console.log('Closing skills modal')
  isSkillsModalOpen.value = false
}

// État du modal de l'éducation
const isEducationModalOpen = ref(false)

const openEducationModal = () => {
  console.log('Opening education modal')
  isEducationModalOpen.value = true
}

const closeEducationModal = () => {
  console.log('Closing education modal')
  isEducationModalOpen.value = false
}
</script>

<style scoped>
/* Animation d'entrée pour le header */
.header-section {
  animation: slideDown 0.8s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation du logo */
.logo-container {
  animation: fadeInLeft 1s ease-out 0.2s both;
}

.logo-icon {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.logo-icon::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: translateX(-100%) skewX(-15deg);
  animation: logoShine 3s ease-in-out infinite;
}

@keyframes logoShine {
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
}

.logo-icon:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

.logo-text {
  animation: fadeIn 1s ease-out 0.4s both;
  transition: all 0.3s ease;
}

.logo-text:hover {
  color: #8b5cf6;
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

/* Animation de la navigation */
.nav-container {
  animation: fadeInRight 1s ease-out 0.3s both;
}

.nav-link {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #8b5cf6, #06b6d4);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::before {
  width: 80%;
}

.nav-link::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
}

.nav-link:hover::after {
  opacity: 1;
}

.nav-link:hover {
  transform: translateY(-2px);
  color: #8b5cf6 !important;
  text-shadow: 0 0 8px rgba(139, 92, 246, 0.3);
}

/* Animations d'entrée */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .nav-link {
    padding: 0.25rem 0.5rem;
  }

  .logo-icon:hover {
    transform: scale(1.05) rotate(3deg);
  }
}
</style>
