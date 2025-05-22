# 🚀 Portfolio Futuriste - Cedric Mungobo

> Portfolio moderne et interactif d'un développeur full-stack avec des animations futuristes et des effets visuels avancés.

[![Nuxt.js](https://img.shields.io/badge/Nuxt.js-3.x-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat&logo=vue.js)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

## 🌟 Aperçu

Portfolio personnel de **Cedric Mungobo**, développeur full-stack spécialisé en Vue.js, Laravel et applications mobiles. Ce portfolio présente une expérience utilisateur futuriste avec des animations avancées, des effets visuels modernes et une interface responsive.

### 🎯 Caractéristiques Principales

- ✨ **Animations Futuristes** : Effets visuels avancés et micro-interactions
- 🎨 **Design Moderne** : Interface élégante avec glass morphism
- 📱 **Responsive Design** : Optimisé pour tous les appareils
- ⚡ **Performance Optimisée** : Animations fluides et chargement rapide
- 🎭 **Expérience Interactive** : Curseur personnalisé et effets de hover
- 🌈 **Thème Cohérent** : Palette de couleurs purple/cyan futuriste

## 🚀 Fonctionnalités Avancées

### 🎬 Animations & Effets Visuels

- **Arrière-plan Animé** : Grid futuriste avec particules flottantes
- **Curseur Personnalisé** : Trail de particules et effets de glow (desktop)
- **Typing Animation** : Effet machine à écrire pour le titre principal
- **Cartes 3D** : Transformations et effets de hover sophistiqués
- **Glass Morphism** : Navigation bottom avec effet verre
- **Révélation Progressive** : Animations en cascade au scroll

### 📋 Sections du Portfolio

1. **Hero Section**
   - Animation de typing pour le titre
   - Particules flottantes interactives
   - Liens sociaux avec effets de hover

2. **Section Projets**
   - 6 projets principaux avec filtres dynamiques
   - Cartes interactives avec effets 3D
   - Catégories : Web & Mobile, SaaS, UI/UX Design

3. **Modals Interactifs**
   - Compétences techniques détaillées
   - Parcours éducatif et certifications

4. **Navigation Responsive**
   - Header avec micro-interactions
   - Bottom navigation glass sur mobile

### 🛠️ Projets Présentés

| Projet | Type | Technologies | Statut |
|--------|------|-------------|--------|
| **Lunabetting** | Site web & App mobile | Nuxt.js, Vue.js, Flutter | ✅ En ligne |
| **MDL Trans** | Gestion de flotte | Laravel, Vue.js | ✅ En ligne |
| **Cartes GIIS** | Cartes digitales NFC | Laravel, QR/NFC | ✅ En ligne |
| **Biso Ticket** | Billetterie électronique | Laravel, Vue.js | ✅ En ligne |
| **Facteplus** | SaaS de facturation | Laravel, PDF | ✅ En ligne |
| **Centre Nganda** | Site institutionnel | Vue.js, CMS | ✅ En ligne |

## 🛠️ Technologies Utilisées

### Frontend
- **Nuxt.js 3** - Framework Vue.js full-stack
- **Vue.js 3** - Framework JavaScript réactif
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide Vue** - Icônes modernes et élégantes

### Animations & Effets
- **CSS Animations** - Keyframes et transitions avancées
- **Transform3D** - Effets 3D et perspectives
- **Backdrop Filter** - Glass morphism et blur effects
- **Custom Cursor** - Curseur personnalisé avec trail

### Outils de Développement
- **TypeScript** - Typage statique
- **ESLint** - Linting et qualité de code
- **Prettier** - Formatage automatique
- **Git** - Contrôle de version

## 🚀 Installation & Développement

### Prérequis
- Node.js 18+
- npm, yarn, pnpm ou bun

### Installation

```bash
# Cloner le repository
git clone https://github.com/cedric-mungobo/portfolio.git
cd portfolio

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

### Développement

```bash
# Démarrer le serveur de développement
npm run dev
# ou
yarn dev
# ou
pnpm dev

# Ouvrir http://localhost:3000
```

### Production

```bash
# Build pour la production
npm run build
# ou
yarn build
# ou
pnpm build

# Prévisualiser le build
npm run preview
# ou
yarn preview
# ou
pnpm preview
```

## 📁 Structure du Projet

```
portfolio/
├── components/           # Composants Vue réutilisables
│   ├── HeaderSection.vue       # Navigation principale
│   ├── HeroSection.vue         # Section d'accueil
│   ├── ProjectsSection.vue     # Galerie de projets
│   ├── ProjectCard.vue         # Carte de projet individuelle
│   ├── BottomNavigation.vue    # Navigation mobile
│   ├── FuturisticBackground.vue # Arrière-plan animé
│   ├── CustomCursor.vue        # Curseur personnalisé
│   ├── SkillsModal.vue         # Modal des compétences
│   └── EducationModal.vue      # Modal éducation
├── pages/               # Pages de l'application
│   └── index.vue             # Page d'accueil
├── assets/              # Assets statiques
│   └── css/
│       └── tailwind.css      # Styles Tailwind
├── public/              # Fichiers publics
│   └── images/              # Images du portfolio
└── nuxt.config.ts       # Configuration Nuxt
```

## 🎨 Personnalisation

### Couleurs du Thème
```css
/* Palette principale */
--primary: #8b5cf6      /* Purple */
--secondary: #06b6d4    /* Cyan */
--accent: #f59e0b       /* Amber */
--background: #f3f4f6   /* Gray-100 */
```

### Animations
Les animations peuvent être personnalisées dans les fichiers de composants :
- Durées d'animation
- Courbes de transition (cubic-bezier)
- Délais d'animation
- Effets de particules

## 📱 Responsive Design

- **Mobile First** : Design optimisé pour mobile
- **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation Adaptative** : Menu complet sur desktop, bottom nav sur mobile
- **Animations Optimisées** : Effets réduits sur mobile pour les performances

## 🔧 Configuration

### Variables d'Environnement
```env
# Optionnel : Analytics, etc.
NUXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

### SEO & Meta
- Titre et description optimisés
- Open Graph tags
- Meta viewport responsive
- Structured data pour les projets

## 📈 Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **Core Web Vitals** : Optimisé pour LCP, FID, CLS
- **Lazy Loading** : Images et composants chargés à la demande
- **Code Splitting** : Bundles optimisés par route

## 🤝 Contact & Liens

- **Email** : [sedrickmungobo1@gmail.com](mailto:sedrickmungobo1@gmail.com)
- **Téléphone** : [+243 826 785 727](tel:+243826785727)
- **WhatsApp** : [Message WhatsApp](https://wa.me/243826785727)
- **LinkedIn** : [linkedin.com/in/cedricmungobo](https://linkedin.com/in/cedricmungobo)
- **GitHub** : [github.com/cedric-mungobo](https://github.com/cedric-mungobo)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**Développé avec ❤️ par Cedric Mungobo** - *Digital Problem Solver*
