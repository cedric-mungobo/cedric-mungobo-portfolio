import { watch, nextTick } from 'vue'

export const useModal = (isOpen) => {
  // Empêcher le scroll du body quand la modale est ouverte
  const toggleBodyScroll = (disable) => {
    if (typeof document === 'undefined') return
    
    if (disable) {
      // Sauvegarder la position de scroll actuelle
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      // Restaurer la position de scroll
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
  }

  // Watcher pour gérer l'ouverture/fermeture de la modale
  watch(isOpen, async (newValue) => {
    await nextTick()
    toggleBodyScroll(newValue)
  }, { immediate: true })

  // Fonction pour fermer la modale avec Escape
  const handleEscape = (event) => {
    if (event.key === 'Escape' && isOpen.value) {
      isOpen.value = false
    }
  }

  // Ajouter/supprimer l'écouteur d'événement Escape
  const setupEscapeListener = () => {
    if (typeof document === 'undefined') return
    
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      toggleBodyScroll(false) // S'assurer que le scroll est restauré
    }
  }

  return {
    toggleBodyScroll,
    setupEscapeListener
  }
}
