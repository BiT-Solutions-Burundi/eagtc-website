# EAGTC - East African General Trade Company

Site web corporate pour East African General Trade Company SPRL, une entreprise burundaise spécialisée dans le commerce général, l'électrification, les énergies renouvelables et la construction.

## Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **React Hook Form** + **Zod** pour la validation des formulaires

## Installation

```bash
# Cloner le projet
git clone <repository-url>
cd eagtc

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Déploiement sur Vercel

### Méthode recommandée: Déploiement automatique depuis GitHub

1. Connectez votre dépôt GitHub à [Vercel](https://vercel.com)
2. Vercel détectera automatiquement la configuration Next.js
3. Le déploiement se déclenchera automatiquement à chaque push sur la branche `main`

### Déploiement manuel avec Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Pour un déploiement en production
vercel --prod
```

### Configuration Vercel

Le fichier `vercel.json` est configuré avec:
- Région de déploiement: Europe (fra1) pour une meilleure performance
- Runtime Node.js 20.x pour les API
- Headers CORS pour les routes API
- Optimisations de build automatiques

### Variables d'environnement (optionnel)

Pour une intégration email future, créez ces variables dans le dashboard Vercel:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_EMAIL`
- `ADMIN_EMAIL`

Voir `.env.example` pour tous les variables disponibles.

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx          # Layout racine avec métadonnées
│   ├── page.tsx            # Page principale
│   ├── globals.css         # Styles Tailwind + thème
│   └── api/contact/        # API de contact
├── components/
│   ├── Navbar.tsx          # Navigation avec ancres
│   ├── Hero.tsx            # Section héro
│   ├── Stats.tsx           # Statistiques animées
│   ├── About.tsx           # À propos
│   ├── Services.tsx        # Grille de services
│   ├── Projects.tsx        # Carrousel de projets
│   ├── CTABanner.tsx       # Bannière d'appel à l'action
│   ├── Footer.tsx          # Pied de page
│   └── ContactModal.tsx    # Modal de contact
└── public/images/          # Images du site
```

## Images requises

Placer les images suivantes dans `/public/images/`:

- `hero-tanganyika.webp` - Image de fond pour le héro (lac Tanganyika)
- `vision-building.webp` - Photo du siège social
- `electricity-work.webp` - Travaux d'électrification
- `construction.webp` - Travaux de construction
- `logistics.webp` - Logistique/import-export

## Contact

- **Entreprise**: East African General Trade Company SPRL
- **CEO**: Déo RUKERANDANGA
- **Téléphone**: +257 69 780 222
- **Email**: deo.rukerandanga@eagtc.bi
- **Adresse**: Vision Building, Chaussée de l'Agriculture n°5, Quartier Industriel, Bujumbura, Burundi

## Licence

© 2025 East African General Trade Company SPRL. Tous droits réservés.
