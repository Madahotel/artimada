// src/data/produitsData.js
export const produits = [
  {
    id: 1,
    nom: "Sac Rafia Rose",
    description: "Sac tissé main en rafia naturel, teinture végétale",
    prix: 45000,
    image: "/images/sac-rafia.jpg",
    images: ["/images/sac-1.jpg", "/images/sac-2.jpg"],
    categorie: "Sacs et paniers",
    artisan: "Mme Rasoa",
    region: "Antananarivo",
    contact: "261341234567"
  },
  {
    id: 2,
    nom: "Chapeau Tressé",
    description: "Chapeau traditionnel en feuilles de pandanus",
    prix: 25000,
    image: "/images/chapeau.jpg",
    images: ["/images/chapeau-1.jpg"],
    categorie: "Chapeaux",
    artisan: "M. Rabe",
    region: "Fianarantsoa",
    contact: "261332345678"
  },
  {
    id: 3,
    nom: "Assiette en Bois",
    description: "Assiette sculptée dans du bois de palissandre",
    prix: 35000,
    image: "/images/assiette.jpg",
    categorie: "Plats et vaisselle",
    artisan: "Atelier Soa",
    region: "Majunga",
    contact: "261333456789"
  },
  {
    id: 4,
    nom: "Panier à Légumes",
    description: "Grand panier pour le marché",
    prix: 30000,
    image: "/images/panier.jpg",
    categorie: "Paniers",
    artisan: "Coopérative Faly",
    region: "Toamasina",
    contact: "261334567890"
  },
  {
    id: 5,
    nom: "Lamba Arindrano",
    description: "Tissu traditionnel en soie sauvage",
    prix: 120000,
    image: "/images/lamba.jpg",
    categorie: "Lambas",
    artisan: "Mme Jeanne",
    region: "Ambatondrazaka",
    contact: "261345678901"
  }
]

export const categories = [
  { id: "sacs", nom: "Sacs et paniers", icon: "👜", count: 12 },
  { id: "chapeaux", nom: "Chapeaux", icon: "🧢", count: 8 },
  { id: "plats", nom: "Plats et vaisselle", icon: "🍽️", count: 15 },
  { id: "sculptures", nom: "Sculptures", icon: "🪵", count: 20 },
  { id: "textiles", nom: "Textiles", icon: "🧣", count: 10 },
  { id: "bijoux", nom: "Bijoux", icon: "💍", count: 18 },
  { id: "paniers", nom: "Paniers tressés", icon: "🧺", count: 14 },
  { id: "lambas", nom: "Lambas", icon: "🥻", count: 7 }
]