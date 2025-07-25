<template>
  <div v-if="!isLowPerformanceDevice" class="hidden md:block">
    <!-- Curseur principal -->
    <div
      ref="cursor"
      class="cursor"
      :class="{ 'cursor-hover': isHovering }"
    >
      <div class="cursor-inner"></div>
    </div>

    <!-- Trail du curseur -->
    <div
      v-for="(trail, index) in trails"
      :key="index"
      class="cursor-trail"
      :style="{
        left: trail.x + 'px',
        top: trail.y + 'px',
        opacity: trail.opacity
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { usePerformance } from '~/composables/usePerformance'

// Détection des performances
const { isLowPerformanceDevice } = usePerformance()

const cursor = ref(null)
const isHovering = ref(false)
const trails = ref([])
const maxTrails = 6 // Réduire le nombre de trails

let mouseX = 0
let mouseY = 0
let animationId = null

// Throttle pour optimiser les performances
const throttle = (func, delay) => {
  let timeoutId
  let lastExecTime = 0
  return function (...args) {
    const currentTime = Date.now()

    if (currentTime - lastExecTime > delay) {
      func.apply(this, args)
      lastExecTime = currentTime
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func.apply(this, args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

// Gestion du mouvement de la souris avec throttle
const handleMouseMove = throttle((e) => {
  mouseX = e.clientX
  mouseY = e.clientY

  if (cursor.value) {
    cursor.value.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
  }

  // Ajouter un point au trail moins fréquemment
  addTrailPoint(mouseX, mouseY)
}, 16) // ~60fps

// Ajouter un point au trail
const addTrailPoint = (x, y) => {
  trails.value.unshift({
    x: x - 2,
    y: y - 2,
    opacity: 1
  })

  // Limiter le nombre de points du trail
  if (trails.value.length > maxTrails) {
    trails.value.pop()
  }

  // Diminuer l'opacité des points existants
  trails.value.forEach((trail, index) => {
    trail.opacity = 1 - (index / maxTrails)
  })
}

// Gestion du hover sur les éléments interactifs
const handleMouseEnter = () => {
  isHovering.value = true
}

const handleMouseLeave = () => {
  isHovering.value = false
}

onMounted(() => {
  // Ne pas initialiser le curseur sur les appareils moins puissants
  if (isLowPerformanceDevice.value) return

  // Événements de mouvement
  document.addEventListener('mousemove', handleMouseMove)

  // Ajouter les événements hover aux éléments interactifs
  const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-hover-target')

  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)
  })

  // Animation du trail optimisée
  const animateTrail = () => {
    trails.value = trails.value.filter(trail => trail.opacity > 0.1)
    animationId = requestAnimationFrame(animateTrail)
  }
  animateTrail()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)

  // Arrêter l'animation
  if (animationId) {
    cancelAnimationFrame(animationId)
  }

  const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-hover-target')
  interactiveElements.forEach(element => {
    element.removeEventListener('mouseenter', handleMouseEnter)
    element.removeEventListener('mouseleave', handleMouseLeave)
  })
})
</script>

<style scoped>
.cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  pointer-events: none;
  z-index: 9999;
  left: 0;
  top: 0;
  will-change: transform;
}

.cursor-inner {
  width: 100%;
  height: 100%;
  border: 2px solid rgba(139, 92, 246, 0.8);
  border-radius: 50%;
  background: rgba(139, 92, 246, 0.1);
  backdrop-filter: blur(2px);
  animation: pulse 2s infinite;
}

.cursor-hover .cursor-inner {
  transform: scale(1.5);
  background: rgba(139, 92, 246, 0.3);
  border-color: rgba(139, 92, 246, 1);
  animation: none;
}

.cursor-trail {
  position: fixed;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #8b5cf6, #06b6d4);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transition: opacity 0.2s ease-out;
  box-shadow: 0 0 6px rgba(139, 92, 246, 0.6);
  will-change: opacity;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

/* Masquer le curseur par défaut sur les éléments interactifs */
:global(a, button, [role="button"]) {
  cursor: none !important;
}

/* Responsive - masquer sur mobile */
@media (max-width: 768px) {
  .cursor,
  .cursor-trail {
    display: none !important;
  }
}
</style>
