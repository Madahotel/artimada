import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { produits } from '../data/produitsData'
import { Search, Filter, X } from 'lucide-react'

export default function Recherche() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  
  const [resultats, setResultats] = useState([])
  const [filtreCategorie, setFiltreCategorie] = useState('toutes')
  const [filtreRegion, setFiltreRegion] = useState('toutes')
  const [prixMin, setPrixMin] = useState('')
  const [prixMax, setPrixMax] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  // Extraire toutes les catégories et régions uniques
  const categories = ['toutes', ...new Set(produits.map(p => p.categorie))]
  const regions = ['toutes', ...new Set(produits.map(p => p.region))]

  useEffect(() => {
    // Fonction de recherche
    const rechercher = () => {
      if (!query.trim()) {
        setResultats([])
        return
      }

      const mots = query.toLowerCase().split(' ')
      
      let filtered = produits.filter(produit => {
        const nomMatch = mots.some(mot => produit.nom.toLowerCase().includes(mot))
        const descMatch = mots.some(mot => produit.description.toLowerCase().includes(mot))
        const artisanMatch = mots.some(mot => produit.artisan.toLowerCase().includes(mot))
        const regionMatch = mots.some(mot => produit.region.toLowerCase().includes(mot))
        const catMatch = mots.some(mot => produit.categorie.toLowerCase().includes(mot))
        const codeMatch = mots.some(mot => produit.id.toLowerCase().includes(mot))
        
        return nomMatch || descMatch || artisanMatch || regionMatch || catMatch || codeMatch
      })

      // Appliquer les filtres
      if (filtreCategorie !== 'toutes') {
        filtered = filtered.filter(p => p.categorie === filtreCategorie)
      }
      
      if (filtreRegion !== 'toutes') {
        filtered = filtered.filter(p => p.region === filtreRegion)
      }

      if (prixMin) {
        filtered = filtered.filter(p => p.prix >= parseFloat(prixMin))
      }

      if (prixMax) {
        filtered = filtered.filter(p => p.prix <= parseFloat(prixMax))
      }

      setResultats(filtered)
    }

    rechercher()
  }, [query, filtreCategorie, filtreRegion, prixMin, prixMax])

  // Réinitialiser les filtres
  const resetFilters = () => {
    setFiltreCategorie('toutes')
    setFiltreRegion('toutes')
    setPrixMin('')
    setPrixMax('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* En-tête de recherche */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-amber-800">
              Résultats de recherche
            </h1>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-gray-600 hover:text-amber-700"
            >
              <Filter size={20} />
              <span className="hidden md:inline">Filtres</span>
            </button>
          </div>
          
          {query && (
            <div className="flex items-center gap-2 text-gray-600">
              <Search size={18} />
              <span>
                {resultats.length} résultat{resultats.length !== 1 ? 's' : ''} pour 
                <span className="font-semibold text-amber-700 ml-1">"{query}"</span>
              </span>
            </div>
          )}
        </div>

        {/* Filtres */}
        {showFilters && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Filtrer les résultats</h2>
              <button 
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie
                </label>
                <select 
                  value={filtreCategorie}
                  onChange={(e) => setFiltreCategorie(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-amber-500"
                >
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat === 'toutes' ? 'Toutes les catégories' : cat}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Région
                </label>
                <select 
                  value={filtreRegion}
                  onChange={(e) => setFiltreRegion(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-amber-500"
                >
                  {regions.map((region, index) => (
                    <option key={index} value={region}>
                      {region === 'toutes' ? 'Toutes les régions' : region}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prix min (USD)
                </label>
                <input
                  type="number"
                  value={prixMin}
                  onChange={(e) => setPrixMin(e.target.value)}
                  placeholder="0"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prix max (USD)
                </label>
                <input
                  type="number"
                  value={prixMax}
                  onChange={(e) => setPrixMax(e.target.value)}
                  placeholder="100"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
            
            {(filtreCategorie !== 'toutes' || filtreRegion !== 'toutes' || prixMin || prixMax) && (
              <div className="mt-4 flex gap-2">
                <button 
                  onClick={resetFilters}
                  className="text-sm text-amber-600 hover:text-amber-700"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        )}

        {/* Résultats */}
        {!query ? (
          <div className="text-center py-16">
            <Search size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Entrez un mot-clé
            </h2>
            <p className="text-gray-500">
              Recherchez par nom de produit (ex: MACR-DISC), artisan, catégorie ou région
            </p>
          </div>
        ) : resultats.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Aucun résultat trouvé
            </h2>
            <p className="text-gray-500 mb-6">
              Désolé, nous n'avons pas trouvé de produit correspondant à "{query}"
            </p>
            <p className="text-gray-600">
              Suggestions :
            </p>
            <ul className="text-gray-500 mt-2 space-y-1">
              <li>• Vérifiez l'orthographe (ex: MACR au lieu de MACRAMÉ)</li>
              <li>• Utilisez le code produit (ex: FSH-LOVA)</li>
              <li>• Essayez une recherche plus générale (sac, panier, etc.)</li>
            </ul>
            <a 
              href="/produits"
              className="inline-block mt-8 bg-amber-600 text-white px-6 py-3 
                       rounded-lg hover:bg-amber-700 transition"
            >
              Voir tous nos produits
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {resultats.map((produit) => (
              <ProductCard key={produit.id} produit={produit} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}