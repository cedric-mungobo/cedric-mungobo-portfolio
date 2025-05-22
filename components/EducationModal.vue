<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
    @click="closeModal"
  >
    <!-- Backdrop avec effet glass -->
    <div class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
    
    <!-- Modal Content -->
    <div
      class="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
      @click.stop
    >
      <!-- Header -->
      <div class="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 p-6 rounded-t-3xl">
        <div class="flex justify-between items-center">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">Formation & Éducation</h2>
          <button
            @click="closeModal"
            class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <XIcon class="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-8">
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
      <div class="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 p-6 rounded-b-3xl">
        <div class="flex justify-center">
          <button
            @click="closeModal"
            class="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { X as XIcon } from 'lucide-vue-next'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>
