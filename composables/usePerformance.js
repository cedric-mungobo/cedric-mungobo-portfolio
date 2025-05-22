import { ref, onMounted } from 'vue'

export const usePerformance = () => {
  const isLowPerformanceDevice = ref(false)
  const prefersReducedMotion = ref(false)

  const detectPerformance = () => {
    // Détecter si l'utilisateur préfère les animations réduites
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = mediaQuery.matches

    // Détecter les appareils moins puissants
    const isLowEnd = 
      // Moins de 4 cœurs CPU
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) ||
      // Connexion lente
      (navigator.connection && (
        navigator.connection.effectiveType === 'slow-2g' ||
        navigator.connection.effectiveType === '2g' ||
        navigator.connection.effectiveType === '3g'
      )) ||
      // Mémoire limitée (moins de 4GB)
      (navigator.deviceMemory && navigator.deviceMemory < 4) ||
      // User agent mobile ancien
      /Android [1-6]|iPhone OS [1-9]|iPad OS [1-9]/.test(navigator.userAgent)

    isLowPerformanceDevice.value = isLowEnd || prefersReducedMotion.value

    // Écouter les changements de préférence
    mediaQuery.addEventListener('change', (e) => {
      prefersReducedMotion.value = e.matches
      isLowPerformanceDevice.value = isLowEnd || e.matches
    })
  }

  onMounted(() => {
    detectPerformance()
  })

  return {
    isLowPerformanceDevice,
    prefersReducedMotion
  }
}
