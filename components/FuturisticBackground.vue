<template>
  <div class="fixed inset-0 pointer-events-none z-0">
    <!-- Grid futuriste animé -->
    <div class="absolute inset-0 opacity-20">
      <div class="grid-pattern"></div>
    </div>
    
    <!-- Particules flottantes -->
    <div class="absolute inset-0">
      <div
        v-for="particle in particles"
        :key="particle.id"
        class="particle"
        :style="{
          left: particle.x + '%',
          top: particle.y + '%',
          animationDelay: particle.delay + 's',
          animationDuration: particle.duration + 's'
        }"
      ></div>
    </div>
    
    <!-- Effet de scan horizontal -->
    <div class="scan-line"></div>
    
    <!-- Gradient animé -->
    <div class="gradient-overlay"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Génération des particules
const particles = ref([])

const generateParticles = () => {
  const particleCount = 50
  for (let i = 0; i < particleCount; i++) {
    particles.value.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    })
  }
}

onMounted(() => {
  generateParticles()
})
</script>

<style scoped>
.grid-pattern {
  background-image: 
    linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  width: 100%;
  height: 100%;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: linear-gradient(45deg, #8b5cf6, #06b6d4);
  border-radius: 50%;
  animation: float infinite ease-in-out;
  box-shadow: 0 0 6px rgba(139, 92, 246, 0.6);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 1;
  }
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(139, 92, 246, 0.8), 
    rgba(6, 182, 212, 0.8), 
    transparent
  );
  animation: scan 8s linear infinite;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

@keyframes scan {
  0% { transform: translateY(0vh); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 20% 80%,
    rgba(139, 92, 246, 0.05) 0%,
    transparent 50%
  ),
  radial-gradient(
    circle at 80% 20%,
    rgba(6, 182, 212, 0.05) 0%,
    transparent 50%
  );
  animation: gradientShift 10s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-pattern {
    background-size: 30px 30px;
  }
  
  .particle {
    width: 1px;
    height: 1px;
  }
}
</style>
