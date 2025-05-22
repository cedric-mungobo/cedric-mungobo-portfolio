<template>
  <div
    v-show="showBottomNav"
    class="fixed bottom-4 left-4 right-4 z-40 md:hidden bottom-nav-container"
  >
    <!-- Bottom Navigation Glass -->
    <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-1 bottom-nav-glass">
      <div class="flex justify-around items-center">
        <!-- GitHub -->
        <a
          href="https://github.com/cedricmungobo"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center gap-1 p-2 rounded-xl nav-item transition-all duration-200 active:scale-95"
          title="GitHub"
        >
          <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center icon-container">
            <GithubIcon class="w-4 h-4 text-gray-700" />
          </div>
          <span class="text-sm text-gray-800 font-semibold">GitHub</span>
        </a>

        <!-- Téléphone -->
        <a
          href="tel:+243826785727"
          class="flex flex-col items-center gap-1 p-2 rounded-xl nav-item transition-all duration-200 active:scale-95"
          title="Appeler"
        >
          <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center icon-container">
            <PhoneIcon class="w-4 h-4 text-blue-600" />
          </div>
          <span class="text-sm text-gray-800 font-semibold">Appeler</span>
        </a>

        <!-- WhatsApp -->
        <a
          href="https://wa.me/243826785727?text=Bonjour%20Cedric,%20je%20vous%20contacte%20depuis%20votre%20portfolio..."
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center gap-1 p-2 rounded-xl nav-item transition-all duration-200 active:scale-95"
          title="WhatsApp"
        >
          <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center icon-container">
            <MessageCircleIcon class="w-4 h-4 text-green-600" />
          </div>
          <span class="text-sm text-gray-800 font-semibold">WhatsApp</span>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://linkedin.com/in/cedricmungobo"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center gap-1 p-2 rounded-xl nav-item transition-all duration-200 active:scale-95"
          title="LinkedIn"
        >
          <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center icon-container">
            <LinkedinIcon class="w-4 h-4 text-blue-700" />
          </div>
          <span class="text-sm text-gray-800 font-semibold">LinkedIn</span>
        </a>

        <!-- Email -->
        <a
          href="mailto:sedrickmungobo1@gmail.com"
          class="flex flex-col items-center gap-1 p-2 rounded-xl nav-item transition-all duration-200 active:scale-95"
          title="Email"
        >
          <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center icon-container">
            <MailIcon class="w-4 h-4 text-purple-600" />
          </div>
          <span class="text-sm text-gray-800 font-semibold">Email</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  Phone as PhoneIcon
} from 'lucide-vue-next'

// État de la navigation bottom
const showBottomNav = ref(false)
const scrollThreshold = 200 // Pixels à scroller avant d'afficher la nav

// Fonction pour gérer le scroll
const handleScroll = () => {
  const scrollY = window.scrollY
  showBottomNav.value = scrollY > scrollThreshold
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Animation d'entrée pour la navigation bottom */
.bottom-nav-container {
  animation: slideUpFade 0.5s ease-out;
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Effet glass futuriste */
.bottom-nav-glass {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 20px rgba(139, 92, 246, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.bottom-nav-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.05), transparent);
  border-radius: inherit;
  animation: glassShimmer 4s ease-in-out infinite;
}

@keyframes glassShimmer {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

/* Animation des éléments de navigation */
.nav-item {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
}

.nav-item:hover::before {
  opacity: 1;
}

.nav-item:hover {
  transform: translateY(-4px) scale(1.05);
  background: rgba(255, 255, 255, 0.2);
}

/* Animation des icônes */
.icon-container {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.icon-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: translateX(-100%) skewX(-15deg);
  transition: transform 0.6s ease;
}

.nav-item:hover .icon-container::before {
  transform: translateX(200%) skewX(-15deg);
}

.nav-item:hover .icon-container {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
}

/* Animation des icônes individuelles */
.nav-item:hover svg {
  animation: iconPulse 0.6s ease;
}

@keyframes iconPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* Animation du texte */
.nav-item:hover span {
  color: #6d28d9;
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.8);
  transform: translateY(-1px);
  transition: all 0.3s ease;
  font-weight: 700;
}

/* Effet de ripple au clic */
.nav-item:active {
  transform: translateY(-2px) scale(0.98);
}

/* Animation de pulsation périodique */
.bottom-nav-glass {
  animation: breathe 4s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% {
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.1),
      0 0 20px rgba(139, 92, 246, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.15),
      0 0 30px rgba(139, 92, 246, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .nav-item:hover {
    transform: translateY(-2px) scale(1.02);
  }

  .nav-item:hover .icon-container {
    transform: scale(1.05) rotate(3deg);
  }
}
</style>
