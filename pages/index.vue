<template>
  <div class="min-h-screen bg-gray-100 py-0 sm:py-2 px-0 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
    <!-- Arrière-plan futuriste -->
    <FuturisticBackground />

    <!-- Curseur personnalisé -->
    <CustomCursor />

    <div class="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-none sm:rounded-3xl overflow-hidden shadow-sm relative z-10">
      <!-- Header/Navigation -->
      <HeaderSection />

      <!-- Hero Section -->
      <HeroSection />

      <!-- Projects Section -->
      <ProjectsSection />
    </div>

    <!-- Bottom Navigation Mobile -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import HeaderSection from '~/components/HeaderSection.vue'
import HeroSection from '~/components/HeroSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import BottomNavigation from '~/components/BottomNavigation.vue'
import FuturisticBackground from '~/components/FuturisticBackground.vue'
import CustomCursor from '~/components/CustomCursor.vue'

// Métadonnées de la page
useHead({
  title: 'Cedric Mungobo - Développeur Full Stack',
  meta: [
    { name: 'description', content: 'Portfolio de Cedric Mungobo, développeur full stack spécialisé en Vue.js, Laravel et applications mobiles.' }
  ]
})
</script>

<style>
/* Styles globaux pour les animations futuristes */
html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

/* Animation de scroll personnalisée */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(139, 92, 246, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #8b5cf6, #06b6d4);
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #7c3aed, #0891b2);
}

/* Effet de parallax subtil */
.parallax-element {
  transform: translateZ(0);
  will-change: transform;
}

/* Animation de révélation au scroll */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Effet de glow global */
.glow-on-hover:hover {
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
  transition: box-shadow 0.3s ease;
}

/* Animation de chargement */
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.fade-in-scale {
  animation: fadeInScale 0.6s ease-out;
}

/* Effet de focus amélioré */
*:focus {
  outline: 2px solid rgba(139, 92, 246, 0.5);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Transition globale pour les éléments interactifs */
a, button, [role="button"] {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Optimisations pour les appareils moins puissants */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .reveal-on-scroll {
    opacity: 1 !important;
    transform: none !important;
  }
}

/* Effet de sélection personnalisé */
::selection {
  background: rgba(139, 92, 246, 0.3);
  color: #1f2937;
}

::-moz-selection {
  background: rgba(139, 92, 246, 0.3);
  color: #1f2937;
}
</style>