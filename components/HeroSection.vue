<template>
  <div id="hero" class="grid md:grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-6 hero-section">
    <div class="rounded-xl md:col-span-2 sm:rounded-3xl p-4 sm:p-10 bg-gradient-to-br from-purple-100 via-purple-50 to-blue-50 flex flex-col justify-center relative overflow-hidden hero-content">
      <!-- Effet de particules en arrière-plan (désactivé sur appareils moins puissants) -->
      <div v-if="!isLowPerformanceDevice" class="absolute inset-0 pointer-events-none">
        <div
          v-for="particle in heroParticles"
          :key="particle.id"
          class="hero-particle"
          :style="{
            left: particle.x + '%',
            top: particle.y + '%',
            animationDelay: particle.delay + 's',
            animationDuration: particle.duration + 's'
          }"
        ></div>
      </div>

      <div class="max-w-xl relative z-10">
        <h1 class="text-3xl sm:text-5xl font-bold leading-tight mb-2 sm:mb-3 text-gray-900 hero-title">
          <span class="typing-text">{{ displayedText }}</span>
          <span class="cursor-blink">|</span>
        </h1>
        <h3 class="text-2xl sm:text-3xl font-bold leading-tight mb-4 sm:mb-6 text-purple-700 hero-subtitle glow-text">— digital problem solver man</h3>
        <p class="text-gray-700 mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed">
          Je conçois des applications web & mobiles puissantes, scalables et élégantes, adaptées aux besoins réels des entreprises.
        </p>
        <p class="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
          je code des solutions qui font la différence. Mon outil, c'est le code. Mon moteur, c'est l'impact.
        </p>
        <div class="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="https://github.com/cedric-mungobo"
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            title="GitHub"
          >
            <GithubIcon class="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </a>
          <a
            href="tel:+243826785727"
            class="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            title="Appeler: +243 826 785 727"
          >
            <PhoneIcon class="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </a>
          <a
            href="https://wa.me/243826785727?text=Bonjour%20Cedric,%20je%20vous%20contacte%20depuis%20votre%20portfolio..."
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            title="WhatsApp: +243 826 785 727"
          >
            <MessageCircleIcon class="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/cedric-mungobo-ab7728215"
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            title="LinkedIn"
          >
            <LinkedinIcon class="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </a>
          <a
            href="mailto:sedrickmungobo1@gmail.com"
            class="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            title="Email: sedrickmungobo1@gmail.com"
          >
            <MailIcon class="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </a>
        </div>
      </div>
    </div>
    <div class="rounded-xl sm:rounded-3xl overflow-hidden bg-purple-600 mt-4 md:mt-0">
      <!-- Mobile: Image en pleine largeur -->
      <div class="md:hidden">
        <div class="w-full h-80 sm:h-80">
          <img src="/images/me.JPG" class=" object-cover" alt="Photo de Cedric Mungobo">
        </div>
      </div>
      <!-- Desktop: Image plus grande avec plus d'espace -->
      <div class="hidden md:flex items-center justify-center min-h-full p-8 lg:p-12">
        <div class="w-56 h-56 lg:w-64 lg:h-80 rounded-2xl overflow-hidden bg-purple-500">
          <img src="/images/me.JPG" class="w-full h-full object-cover" alt="Photo de Cedric Mungobo">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  Phone as PhoneIcon
} from 'lucide-vue-next'
import { usePerformance } from '~/composables/usePerformance'

// Détection des performances
const { isLowPerformanceDevice } = usePerformance()

// Animation de typing pour le titre
const fullText = "Hey, moi c'est Cedric Mungobo"
const displayedText = ref("")
const typingSpeed = 100 // millisecondes

// Particules pour la hero section
const heroParticles = ref([])

// Fonction de typing
const typeText = async () => {
  for (let i = 0; i <= fullText.length; i++) {
    displayedText.value = fullText.slice(0, i)
    await new Promise(resolve => setTimeout(resolve, typingSpeed))
  }
}

// Génération des particules pour la hero (réduit pour les performances)
const generateHeroParticles = () => {
  const particleCount = window.innerWidth < 768 ? 6 : 10
  for (let i = 0; i < particleCount; i++) {
    heroParticles.value.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 5 + Math.random() * 3
    })
  }
}

onMounted(() => {
  generateHeroParticles()
  // Démarrer l'animation de typing après un petit délai
  setTimeout(() => {
    typeText()
  }, 500)
})
</script>

<style scoped>
/* Animation d'entrée pour la section hero */
.hero-section {
  animation: fadeInUp 1s ease-out;
}

.hero-content {
  animation: slideInLeft 1.2s ease-out;
}

/* Animation de typing */
.typing-text {
  display: inline-block;
}

.cursor-blink {
  animation: blink 1s infinite;
  color: #8b5cf6;
  font-weight: normal;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Effet de glow sur le sous-titre (optimisé) */
.glow-text {
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
  animation: glow 4s ease-in-out infinite alternate;
  will-change: text-shadow;
}

@keyframes glow {
  from { text-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
  to { text-shadow: 0 0 30px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.4); }
}

/* Particules de la hero section (optimisées) */
.hero-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: linear-gradient(45deg, #8b5cf6, #06b6d4);
  border-radius: 50%;
  animation: heroFloat infinite ease-in-out;
  box-shadow: 0 0 8px rgba(139, 92, 246, 0.7);
  will-change: transform, opacity;
  transform: translateZ(0);
}

@keyframes heroFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg) scale(1);
    opacity: 0.6;
  }
  33% {
    transform: translateY(-15px) rotate(120deg) scale(1.1);
    opacity: 1;
  }
  66% {
    transform: translateY(-5px) rotate(240deg) scale(0.9);
    opacity: 0.8;
  }
}

/* Animations d'entrée */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animation des icônes sociales */
.hero-section a {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.hero-section a::before {
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

.hero-section a:hover::before {
  width: 100px;
  height: 100px;
}

.hero-section a:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-particle {
    width: 2px;
    height: 2px;
  }

  .glow-text {
    text-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
  }
}

/* Respect des préférences utilisateur pour les animations réduites */
@media (prefers-reduced-motion: reduce) {
  .hero-section,
  .hero-content,
  .cursor-blink,
  .glow-text,
  .hero-particle {
    animation: none !important;
  }

  .hero-section a {
    transition: none !important;
  }

  .hero-section a::before {
    display: none !important;
  }
}
</style>
