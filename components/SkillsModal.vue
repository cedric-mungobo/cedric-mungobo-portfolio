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
      class="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
      @click.stop
    >
      <!-- Header -->
      <div class="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 p-6 rounded-t-3xl">
        <div class="flex justify-between items-center">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">Compétences Techniques</h2>
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
        <!-- Développement Web & Mobile -->
        <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">🧑‍💻</span>
            <h3 class="text-xl font-bold text-gray-900">Développement Web & Mobile</h3>
          </div>
          <div class="space-y-3 text-gray-700">
            <p><strong>Langages :</strong> PHP, JavaScript, HTML, CSS, SQL</p>
            <p><strong>Frameworks & outils frontend :</strong> Vue.js, Nuxt.js, TailwindCSS</p>
            <p><strong>Backend :</strong> Laravel, API REST, Authentification sécurisée</p>
            <p><strong>Mobile :</strong> Flutter (iOS & Android)</p>
          </div>
        </div>

        <!-- Conception & UX/UI -->
        <div class="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">🧠</span>
            <h3 class="text-xl font-bold text-gray-900">Conception & UX/UI</h3>
          </div>
          <div class="space-y-3 text-gray-700">
            <p>Prototypage et design d'interfaces avec <strong>Figma</strong></p>
            <p><strong>Responsive Design</strong> · Accessibilité · Expérience utilisateur</p>
          </div>
        </div>

        <!-- Bases de données -->
        <div class="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">🗃️</span>
            <h3 class="text-xl font-bold text-gray-900">Bases de données</h3>
          </div>
          <div class="space-y-3 text-gray-700">
            <p><strong>MySQL, PostgreSQL</strong></p>
            <p>Optimisation de requêtes, migrations, gestion des relations complexes</p>
          </div>
        </div>

        <!-- DevOps & Environnements -->
        <div class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">⚙️</span>
            <h3 class="text-xl font-bold text-gray-900">DevOps & Environnements</h3>
          </div>
          <div class="space-y-3 text-gray-700">
            <p><strong>Git, GitHub, Docker, Webpack</strong></p>
            <p>Déploiement sur VPS, gestion des domaines et certificats SSL</p>
            <p><strong>Intégration continue</strong> · Environnements de staging</p>
          </div>
        </div>

        <!-- Réseaux & Systèmes -->
        <div class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">🌐</span>
            <h3 class="text-xl font-bold text-gray-900">Réseaux & Systèmes</h3>
          </div>
          <div class="space-y-3 text-gray-700">
            <p><strong>Licence en Administration Réseaux & Télécommunications</strong></p>
            <p>Installation, configuration et sécurisation de réseaux informatiques</p>
            <p>Supervision, diagnostic, et résolution de pannes</p>
            <p>Configuration de routeurs, pare-feux, et VPN</p>
          </div>
        </div>

        <!-- Systèmes d'exploitation -->
        <div class="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">🖥️</span>
            <h3 class="text-xl font-bold text-gray-900">Systèmes d'exploitation</h3>
          </div>
          <div class="space-y-3 text-gray-700">
            <p><strong>Windows Server</strong> (AD, GPO, DNS, DHCP)</p>
            <p><strong>Linux</strong> (Ubuntu, Debian) – ligne de commande, configuration, hébergement web</p>
            <p>Virtualisation avec VirtualBox ou VMware</p>
          </div>
        </div>

        <!-- Outils Bureautiques & Productivité -->
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">📊</span>
            <h3 class="text-xl font-bold text-gray-900">Outils Bureautiques & Productivité</h3>
          </div>
          <div class="space-y-3 text-gray-700">
            <p>Maîtrise de <strong>Microsoft Office</strong> (Word, Excel, PowerPoint, Outlook)</p>
            <p>Création de modèles, tableaux automatisés, rapports, présentations</p>
            <p><strong>Google Workspace</strong> · Notion · Trello · Slack</p>
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
