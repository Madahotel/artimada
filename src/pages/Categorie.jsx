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

  // Couleurs et icônes pour chaque catégorie
  const categoryStyles = {
    'macrame': {
      bg: 'from-amber-500 to-amber-700',
      icon: '🪢',
      description: 'Le macramé est un art du tissage qui demande patience et précision. Chaque nœud est fait à la main, créant des motifs uniques et élégants.'
    },
    'fashion-bags': {
      bg: 'from-purple-500 to-purple-700',
      icon: '👝',
      description: 'Nos sacs mode en rabane et jute allient tradition et modernité. La rabane, tissée à partir de feuilles de pandanus, est légère et résistante.'
    },
    'kids': {
      bg: 'from-pink-500 to-pink-700',
      icon: '🧸',
      description: 'Des modèles adaptés aux enfants, avec des motifs colorés et des tailles parfaites pour les petits. Des pièces durables qui traverseront les années.'
    },
    'beach-bags': {
      bg: 'from-blue-500 to-blue-700',
      icon: '🏖️',
      description: 'Parfaits pour la plage, ces sacs en raphia sont légers, aérés et résistants au sable. Le raphia naturel est idéal pour l\'été.'
    },
    'straw-baskets': {
      bg: 'from-green-500 to-green-700',
      icon: '🧺',
      description: 'La vannerie traditionnelle malgache utilise la paille naturelle tressée. Des paniers solides et décoratifs, parfaits pour le rangement ou les courses.'
    },
    'tote-bags': {
      bg: 'from-orange-500 to-orange-700',
      icon: '🛍️',
      description: 'Nos tote bags en raphia sont pratiques et élégants pour le quotidien. Le raphia, fibre naturelle, est à la fois souple et résistant.'
    }
  }

  const style = categoryStyles[id] || {
    bg: 'from-amber-600 to-amber-800',
    icon: categorie.icon,
    description: `Découvrez notre collection exceptionnelle de ${categorie.nom.toLowerCase()} fabriqués à la main par nos artisans malgaches.`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Bannière catégorie */}
      <section className={`bg-gradient-to-r ${style.bg} text-white py-16`}>
        <div className="container mx-auto px-4 text-center">
          <div className="text-7xl mb-4 animate-bounce">{style.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {categorie.nom}
          </h1>
          <p className="text-xl opacity-90">
            {produitsCategorie.length} article{produitsCategorie.length > 1 ? 's' : ''} disponibles
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
              {style.description}
            </p>
          </div>
        </div>
      </section>

      {/* Sous-catégories / Filtres rapides (si disponibles) */}
      {produitsCategorie.length > 0 && (
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm text-gray-500 mr-2">Filtrer par :</span>
              <button className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium hover:bg-amber-200 transition">
                Tous
              </button>
              {[...new Set(produitsCategorie.map(p => p.region))].map(region => (
                <button key={region} className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm hover:bg-gray-100 transition">
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

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
                  <span className="text-xs text-gray-500 ml-1">({cat.count})</span>
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