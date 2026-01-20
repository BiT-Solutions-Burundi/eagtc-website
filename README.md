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

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

Ou connectez directement votre dépôt GitHub à [Vercel](https://vercel.com) pour un déploiement automatique.

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
