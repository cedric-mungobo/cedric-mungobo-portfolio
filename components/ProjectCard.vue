<template>
  <a
    :href="project.link"
    target="_blank"
    rel="noopener noreferrer"
    :class="['rounded-3xl p-4 sm:p-6 text-white relative block project-card overflow-hidden', project.bgClass]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Effet de particules au hover -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        v-for="particle in hoverParticles"
        :key="particle.id"
        class="hover-particle"
        :style="{
          left: particle.x + '%',
          top: particle.y + '%',
          animationDelay: particle.delay + 's',
          opacity: showParticles ? 1 : 0
        }"
      />
    </div>

    <!-- Effet de scan au hover -->
    <div class="scan-effect" :class="{ active: isHovered }" />

    <!-- Contenu principal -->
    <div class="relative z-10">
      <div class="mb-6 sm:mb-8">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-2xl">{{ project.emoji }}</span>
        <div>
          <h3 class="text-xl sm:text-xl font-bold">{{ project.title }}</h3>
          <p class="text-base sm:text-sm opacity-90">{{ project.subtitle }}</p>
        </div>
      </div>
      <p :class="['text-base sm:text-sm mb-3', project.descriptionClass]">{{ project.description }}</p>
      <div class="text-sm sm:text-xs opacity-75 font-medium">
        {{ project.technologies }}
      </div>
    </div>
    <div class="w-full">
      <div class="w-full h-80 sm:h-80 md:h-80 rounded-lg bg-white/20 overflow-hidden border border-white/30">
        <img
          :src="project.image"
          :alt="project.title + ' mockup'"
          class="w-full h-full object-cover rounded-md opacity-90 hover:opacity-100 transition-opacity duration-300"
        >
      </div>
    </div>
    <div class="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
      <ArrowUpRightIcon class="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    </div>
    <!-- Indicateur de lien -->
    <div class="absolute bottom-4 right-4 text-xs opacity-60">
      <span v-if="project.linkType === 'site'">🌐 Voir le site</span>
      <span v-else-if="project.linkType === 'demo'">👁️ Voir la démo</span>
      <span v-else-if="project.linkType === 'github'">💻 Code source</span>
      <span v-else-if="project.linkType === 'figma'">🎨 Voir le design</span>
    </div>
    </div>
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ArrowUpRight as ArrowUpRightIcon } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

// État des animations
const isHovered = ref(false)
const showParticles = ref(false)
const hoverParticles = ref([])

// Génération des particules pour l'effet hover
const generateHoverParticles = () => {
  const particleCount = 8
  for (let i = 0; i < particleCount; i++) {
    hoverParticles.value.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5
    })
  }
}

// Gestion des événements hover
const handleMouseEnter = () => {
  isHovered.value = true
  showParticles.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
  setTimeout(() => {
    showParticles.value = false
  }, 300)
}

onMounted(() => {
  generateHoverParticles()
})
</script>

<style scoped>
.project-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  position: relative;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
}

.project-card:hover {
  transform: translateY(-8px) rotateX(5deg) rotateY(5deg) scale(1.02);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(139, 92, 246, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.project-card:hover::before {
  opacity: 1;
}

/* Effet de scan */
.scan-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.6s ease;
  border-radius: inherit;
}

.scan-effect.active {
  left: 100%;
}

/* Particules au hover */
.hover-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
  border-radius: 50%;
  animation: particleBurst 0.6s ease-out forwards;
  transition: opacity 0.3s ease;
}

@keyframes particleBurst {
  0% {
    transform: scale(0) translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: scale(1) translate(var(--random-x, 20px), var(--random-y, -20px));
    opacity: 0;
  }
}

/* Animation de l'emoji */
.project-card:hover .text-2xl {
  animation: emojiPulse 0.6s ease;
}

@keyframes emojiPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2) rotate(5deg); }
}

/* Animation de l'icône de lien */
.project-card:hover .absolute.top-4 {
  animation: iconFloat 2s ease-in-out infinite;
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-3px) rotate(5deg); }
}

/* Effet de glow sur le texte au hover */
.project-card:hover h3 {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Animation de l'image */
.project-card:hover img {
  transform: scale(1.05) rotate(1deg);
  opacity: 1;
  transition: all 0.3s ease;
  filter: brightness(1.1) contrast(1.1);
}

/* Amélioration du conteneur d'image au hover */
.project-card:hover .bg-white\/20 {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-card:hover {
    transform: translateY(-4px) scale(1.02);
  }

  .hover-particle {
    width: 2px;
    height: 2px;
  }
}

/* Effet de brillance périodique */
@keyframes shine {
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
}

.project-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: translateX(-100%) skewX(-15deg);
  animation: shine 3s ease-in-out infinite;
  border-radius: inherit;
}
</style>
