<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 pt-4 sm:pt-4"
    @click="closeModal"
  >
    <!-- Backdrop avec effet glass -->
    <div class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

    <!-- Modal Content -->
    <div
      class="relative bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border border-white/20"
      @click.stop
    >
      <!-- Header -->
      <div class="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 p-4 sm:p-6 rounded-t-2xl sm:rounded-t-3xl">
        <div class="flex justify-between items-center">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Formation & Éducation</h2>
          <button
            @click="closeModal"
            class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <XIcon class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="p-4 sm:p-6 space-y-6 sm:space-y-8">
        <!-- Licence en Sciences Informatiques -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
          <div class="flex items-start gap-4 mb-4">
            <div class="bg-blue-100 rounded-full p-3 flex-shrink-0">
              <span class="text-2xl">🎓</span>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Licence en Sciences Informatiques</h3>
              <div class="space-y-2 text-gray-700">
                <p class="font-semibold text-blue-700">Spécialisation : Administration Réseaux et Télécommunications</p>
                <p class="text-sm text-gray-600">Institut Supérieur – Kinshasa</p>
              </div>
            </div>
          </div>
          <div class="bg-white/50 rounded-xl p-4">
            <p class="text-gray-700 leading-relaxed">
              Formation axée sur l'architecture réseau, les systèmes, la cybersécurité et l'administration des infrastructures IT.
            </p>
          </div>
        </div>

        <!-- Graduat en Informatique Industrielle -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
          <div class="flex items-start gap-4 mb-4">
            <div class="bg-green-100 rounded-full p-3 flex-shrink-0">
              <span class="text-2xl">🎓</span>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Graduat en Informatique Industrielle</h3>
              <div class="space-y-2 text-gray-700">
                <p class="text-sm text-gray-600">RDC</p>
              </div>
            </div>
          </div>
          <div class="bg-white/50 rounded-xl p-4">
            <p class="text-gray-700 leading-relaxed">
              Fondations solides en algorithmique, logique de programmation, systèmes embarqués et électronique appliquée.
            </p>
          </div>
        </div>

        <!-- Certifications & Formations Complémentaires -->
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
          <div class="flex items-start gap-4 mb-6">
            <div class="bg-purple-100 rounded-full p-3 flex-shrink-0">
              <span class="text-2xl">📜</span>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Certifications & Formations Complémentaires</h3>
            </div>
          </div>

          <div class="space-y-4">
            <!-- Certification PHP -->
            <div class="bg-white/50 rounded-xl p-4 border-l-4 border-purple-400">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span class="text-sm font-bold text-purple-600">PHP</span>
                </div>
                <h4 class="font-semibold text-gray-900">Développeur PHP</h4>
              </div>
              <p class="text-sm text-gray-600">OpenClassrooms</p>
            </div>

            <!-- Certification Vue.js -->
            <div class="bg-white/50 rounded-xl p-4 border-l-4 border-green-400">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span class="text-sm font-bold text-green-600">Vue</span>
                </div>
                <h4 class="font-semibold text-gray-900">Développeur Vue.js</h4>
              </div>
              <p class="text-sm text-gray-600">OpenClassrooms</p>
            </div>

            <!-- Marketing Digital -->
            <div class="bg-white/50 rounded-xl p-4 border-l-4 border-orange-400">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span class="text-sm font-bold text-orange-600">📈</span>
                </div>
                <h4 class="font-semibold text-gray-900">Marketing Digital & Communication</h4>
              </div>
              <p class="text-sm text-gray-600">Jua ya Afrika (2024)</p>
            </div>

            <!-- Formation continue -->
            <div class="bg-white/50 rounded-xl p-4 border-l-4 border-blue-400">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-sm font-bold text-blue-600">🔄</span>
                </div>
                <h4 class="font-semibold text-gray-900">Formation Continue</h4>
              </div>
              <p class="text-sm text-gray-600">Développement mobile (Flutter), DevOps et intégration API</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 p-4 sm:p-6 rounded-b-2xl sm:rounded-b-3xl">
        <div class="flex justify-center">
          <button
            @click="closeModal"
            class="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors text-sm sm:text-base"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, toRef } from 'vue'
import { X as XIcon } from 'lucide-vue-next'
import { useModal } from '~/composables/useModal'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

// Utiliser le composable modal
const isOpenRef = toRef(props, 'isOpen')
const { setupEscapeListener } = useModal(isOpenRef)

let cleanup = null

const closeModal = () => {
  emit('close')
}

onMounted(() => {
  cleanup = setupEscapeListener()
})

onUnmounted(() => {
  if (cleanup) {
    cleanup()
  }
})
</script>

<style scoped>
/* Amélioration de l'affichage mobile */
@media (max-width: 640px) {
  /* Assurer que la modale prend toute la hauteur disponible sur mobile */
  .fixed.inset-0 {
    padding-top: env(safe-area-inset-top, 0);
    padding-bottom: env(safe-area-inset-bottom, 0);
  }

  /* Optimiser l'espace sur les petits écrans */
  .max-h-\[95vh\] {
    max-height: calc(100vh - 2rem);
  }
}

/* Animation d'entrée de la modale */
.fixed.inset-0 {
  animation: modalBackdropFadeIn 0.3s ease-out;
}

.relative.bg-white\/90 {
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalBackdropFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Améliorer le scroll sur mobile */
@media (max-width: 640px) {
  .overflow-y-auto {
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
  }
}
</style>
