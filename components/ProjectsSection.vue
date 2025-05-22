<template>
  <div id="projects" class="p-2 sm:p-6">
    <!-- Titre et barre de filtre -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
      <h2 class="text-3xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-0">Mes projets</h2>
      <div class="flex flex-wrap gap-2">
        <button
          :class="[
            'px-3 py-1.5 rounded-full text-base sm:text-sm font-medium transition-colors',
            selectedCategory === 'tous'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
          @click="selectedCategory = 'tous'"
        >
          Tous
        </button>
        <button
          v-for="category in categories"
          :key="category"
          :class="[
            'px-3 py-1.5 rounded-full text-base sm:text-sm font-medium transition-colors',
            selectedCategory === category
              ? 'bg-purple-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 projects-grid">
      <ProjectCard
        v-for="(project, index) in filteredProjects"
        :key="index"
        :project="project"
        :style="{ animationDelay: (index * 0.1) + 's' }"
        class="project-item"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'

// Catégorie sélectionnée (par défaut: tous)
const selectedCategory = ref('tous')

// Liste des projets avec leurs catégories
const projectsList = ref([
  {
    emoji: '🎲',
    title: 'Lunabetting',
    subtitle: 'Site web & App mobile',
    description: 'Une plateforme de paris en ligne complète avec système de gestion des cotes en temps réel, paiements sécurisés et interface intuitive pour les parieurs.',
    technologies: 'Nuxt.js · Vue.js · App mobile · Auth sécurisée · Flutter',
    image: 'https://via.placeholder.com/200',
    bgClass: 'bg-blue-600',
    descriptionClass: 'text-blue-200',
    category: 'Web & Mobile',
    link: 'https://preprod.lunabetting.com/',
    linkType: 'site'
  },
  {
    emoji: '🚚',
    title: 'MDL Trans',
    subtitle: 'Application de gestion de flotte',
    description: 'App métier pour une société de transport : gestion des véhicules, suivi des chauffeurs, carburant, rapports automatiques.',
    technologies: 'Laravel · Vue.js · Dashboard temps réel',
    image: 'https://via.placeholder.com/200',
    bgClass: 'bg-gray-800',
    descriptionClass: 'text-gray-400',
    category: 'Web App',
    link: 'https://mdltrans.com', // Remplacez par l'URL réelle
    linkType: 'site'
  },
  {
    emoji: '💳',
    title: 'Cartes de visite digitales',
    subtitle: 'GIIS One Card',
    description: 'Des cartes de visite sans contact pour le réseautage avec la technologie de partage de contact par onde radio NFC.',
    technologies: 'QR Code & NFC · Laravel · Responsive design',
    image: 'https://via.placeholder.com/200',
    bgClass: 'bg-purple-600',
    descriptionClass: 'text-purple-200',
    category: 'Web App',
    link: 'https://giisrdc.com/', // Remplacez par l'URL réelle
    linkType: 'site'
  },
  {
    emoji: '🎟️',
    title: 'Biso Ticket',
    subtitle: 'Billetterie intelligente',
    description: 'Biso Ticket est une solution congolaise de billetterie électronique qui sécurise vos événements avec des QR codes uniques et anti-fraude.',
    technologies: 'Laravel · Vue.js · App mobile scan',
    image: 'https://via.placeholder.com/200',
    bgClass: 'bg-green-700',
    descriptionClass: 'text-green-200',
    category: 'Web App',
    link: 'https://bisoticket.com', // Remplacez par l'URL réelle
    linkType: 'site'
  },
  {
    emoji: '📄',
    title: 'Facteplus',
    subtitle: 'SaaS de facturation PME',
    description: 'Application SaaS pour gérer clients, produits, devis et factures avec génération de PDF et interface claire.',
    technologies: 'Laravel · PDF dynamique · Dashboard',
    image: 'https://via.placeholder.com/200',
    bgClass: 'bg-indigo-600',
    descriptionClass: 'text-indigo-200',
    category: 'SaaS',
    link: 'https://facteplus.com', // Remplacez par l'URL réelle
    linkType: 'site'
  },
  {
    emoji: '🏥',
    title: 'Centre Nganda',
    subtitle: 'Site institutionnel',
    description: 'Refonte complète du site du Centre Nganda : infos médicales, prise de contact, formulaire interactif.',
    technologies: 'Vue.js · Design responsive · CMS custom',
    image: 'https://via.placeholder.com/200',
    bgClass: 'bg-teal-600',
    descriptionClass: 'text-teal-200',
    category: 'Site Web',
    link: 'https://centrehospitaliernganda.com/', // Remplacez par l'URL réelle
    linkType: 'site'
  },
  {
    emoji: '🎨',
    title: 'Cliniques du Coeur',
    subtitle: 'UI Design médical',
    description: 'Design UI/UX complet pour un centre médical : interface de prise de RDV, espace patient et consultation des résultats.',
    technologies: 'Figma · Wireframing · Design System · Prototype',
    image: 'https://via.placeholder.com/200',
    bgClass: 'bg-pink-600',
    descriptionClass: 'text-pink-200',
    category: 'UI/UX Design',
    link: 'https://figma.com/file/cliniquesducoeur', // Remplacez par votre lien Figma
    linkType: 'figma'
  },
  {
    emoji: '🎓',
    title: 'ISIPA Design System',
    subtitle: 'UI/UX Universitaire',
    description: 'Design système complet pour le site web de l\'université ISIPA : interface étudiants, portail académique, et système de gestion des cours.',
    technologies: 'Figma · Design System · Wireframing · UI Components',
    image: 'https://via.placeholder.com/200',
    bgClass: 'bg-orange-600',
    descriptionClass: 'text-orange-200',
    category: 'UI/UX Design',
    link: 'https://figma.com/file/isipa-design', // Remplacez par votre lien Figma
    linkType: 'figma'
  }
])

// Extraire les catégories uniques des projets
const categories = computed(() => {
  const uniqueCategories = new Set(projectsList.value.map(project => project.category))
  return Array.from(uniqueCategories)
})

// Filtrer les projets en fonction de la catégorie sélectionnée
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'tous') {
    return projectsList.value
  }
  return projectsList.value.filter(project => project.category === selectedCategory.value)
})
</script>

<style scoped>
/* Animation d'entrée pour la section projets */
#projects {
  animation: fadeInUp 1s ease-out 0.3s both;
}

/* Animation en cascade pour les cartes de projets */
.project-item {
  animation: slideInUp 0.6s ease-out both;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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

/* Animation des boutons de filtre */
.flex.flex-wrap button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.flex.flex-wrap button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
  transition: all 0.3s ease;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.flex.flex-wrap button:hover::before {
  width: 100px;
  height: 100px;
}

.flex.flex-wrap button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}

/* Animation du titre */
h2 {
  animation: slideInLeft 0.8s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Effet de transition lors du changement de filtre */
.projects-grid {
  transition: all 0.3s ease;
}

/* Animation de morphing pour les boutons actifs */
.bg-purple-600 {
  position: relative;
  overflow: hidden;
}

.bg-purple-600::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-item {
    animation-duration: 0.4s;
  }
}
</style>
