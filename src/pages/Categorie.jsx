// src/pages/Categorie.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'
import { produits, categories } from '../data/produitsData'

export default function Categorie() {
  const { id } = useParams()
  
  // Trouver la catégorie correspondante
  const categorie = categories.find(c => c.id === id)
  
  // Filtrer les produits par catégorie
  const produitsCategorie = produits.filter(
    produit => produit.categorie === categorie?.nom
  )

  // Si la catégorie n'existe pas
  if (!categorie) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">
            Catégorie non trouvée
          </h1>
          <p className="text-gray-600 mb-8">
            Désolé, cette catégorie n'existe pas.
          </p>
          <a 
            href="/produits"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700"
          >
            Voir tous les produits
          </a>
        </div>
        <Footer />
      </div>
    )
  }

  // Couleurs différentes pour chaque catégorie
  const bgColors = {
    'sacs': 'from-amber-500 to-amber-700',
    'chapeaux': 'from-blue-500 to-blue-700',
    'plats': 'from-green-500 to-green-700',
    'sculptures': 'from-brown-500 to-brown-700',
    'textiles': 'from-purple-500 to-purple-700',
    'bijoux': 'from-yellow-500 to-yellow-700',
    'paniers': 'from-orange-500 to-orange-700',
    'lambas': 'from-red-500 to-red-700'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Bannière catégorie */}
      <section className={`bg-gradient-to-r ${bgColors[id] || 'from-amber-600 to-amber-800'} text-white py-16`}>
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">{categorie.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {categorie.nom}
          </h1>
          <p className="text-xl opacity-90">
            {produitsCategorie.length} articles disponibles
          </p>
        </div>
      </section>

      {/* Description de la catégorie */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              L'art du {categorie.nom.toLowerCase()} à Madagascar
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {getCategoryDescription(categorie.nom)}
            </p>
          </div>
        </div>
      </section>

      {/* Produits */}
      <ProductGrid 
        produits={produitsCategorie} 
        title=""
      />

      {/* Suggestions d'autres catégories */}
      <section className="bg-gray-100 py-12 mt-8">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
            Découvrez aussi
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories
              .filter(c => c.id !== id)
              .slice(0, 4)
              .map(cat => (
                <a
                  key={cat.id}
                  href={`/categorie/${cat.id}`}
                  className="bg-white px-6 py-3 rounded-full shadow hover:shadow-md 
                           transition flex items-center gap-2"
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="font-medium">{cat.nom}</span>
                </a>
              ))
            }
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Fonction pour les descriptions des catégories
function getCategoryDescription(nom) {
  const descriptions = {
    'Sacs et paniers': "Le tressage de raphia et de pandanus est un savoir-faire ancestral à Madagascar. Chaque sac est unique, avec des motifs traditionnels transmis de mère en fille.",
    'Chapeaux': "Les chapeaux malgaches, tressés avec précision, protègent du soleil tout en affichant un style authentique. Chaque pièce demande plusieurs jours de travail.",
    'Plats et vaisselle': "Sculptés dans du bois de palissandre ou de l'ébène, ces plats allient utilité et art. Les motifs géométriques racontent l'histoire des différentes ethnies.",
    'Sculptures': "Les sculpteurs malgaches donnent vie au bois avec une maîtrise exceptionnelle. Animaux, scènes de vie ou motifs sacrés, chaque statue a sa signification.",
    'Textiles': "Le lamba, tissu traditionnel, est tissé en soie sauvage ou en coton. Ses motifs et couleurs varient selon les régions et les occasions.",
    'Bijoux': "L'argent, les perles et les pierres semi-précieuses sont travaillés avec délicatesse pour créer des bijoux uniques, mêlant tradition et modernité.",
    'Paniers tressés': "Du panier de marché au panier décoratif, le tressage malgache est reconnu pour sa solidité et sa finesse. Une technique qui se perfectionne toute une vie.",
    'Lambas': "Le lamba est plus qu'un vêtement, c'est un symbole culturel. Porté lors des cérémonies ou au quotidien, chaque lamba est une œuvre d'art textile."
  }
  return descriptions[nom] || `Découvrez notre collection exceptionnelle de ${nom.toLowerCase()} fabriqués à la main par nos artisans malgaches.`
}