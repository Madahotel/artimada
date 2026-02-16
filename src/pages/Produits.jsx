import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'
import { produits, categories, stats } from '../data/produitsData'
import { Search, Filter, X } from 'lucide-react'

export default function Produits() {
  const [categorieActive, setCategorieActive] = useState('tous')
  const [prixMin, setPrixMin] = useState('')
  const [prixMax, setPrixMax] = useState('')
  const [regionActive, setRegionActive] = useState('tous')
  const [showFilters, setShowFilters] = useState(false)

  // Extraire toutes les régions uniques
  const regions = ['tous', ...new Set(produits.map(p => p.region))]

  // Filtrer les produits
  const produitsFiltres = produits.filter(produit => {
    // Filtre par catégorie
    if (categorieActive !== 'tous') {
      const catSelected = categories.find(c => c.id === categorieActive)
      if (produit.categorie !== catSelected?.nom) return false
    }
    
    // Filtre par région
    if (regionActive !== 'tous' && produit.region !== regionActive) return false
    
    // Filtre par prix (USD)
    if (prixMin && produit.prix < parseFloat(prixMin)) return false
    if (prixMax && produit.prix > parseFloat(prixMax)) return false
    
    return true
  })

  // Réinitialiser les filtres
  const resetFilters = () => {
    setCategorieActive('tous')
    setRegionActive('tous')
    setPrixMin('')
    setPrixMax('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-amber-800">
              Tous nos produits
            </h1>
            <p className="text-gray-600 mt-1">
              {stats.totalProduits} articles artisanaux
            </p>
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <Filter size={18} />
            <span>Filtres</span>
          </button>
        </div>

        {/* Filtres */}
        {showFilters && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Filtrer par</h2>
              <button 
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Filtre catégorie */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie
                </label>
                <select 
                  value={categorieActive}
                  onChange={(e) => setCategorieActive(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                >
                  <option value="tous">Toutes les catégories</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.nom} ({cat.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtre région */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Région
                </label>
                <select 
                  value={regionActive}
                  onChange={(e) => setRegionActive(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                >
                  {regions.map(region => (
                    <option key={region} value={region}>
                      {region === 'tous' ? 'Toutes les régions' : region}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtre prix min */}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Filtre prix max */}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
            
            {/* Boutons d'action */}
            <div className="mt-6 flex gap-3">
              <button 
                onClick={resetFilters}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
              >
                Réinitialiser
              </button>
              <button 
                onClick={() => setShowFilters(false)}
                className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium"
              >
                Appliquer les filtres
              </button>
            </div>
          </div>
        )}

        {/* Résultats */}
        <div className="mb-4 text-gray-600">
          {produitsFiltres.length} produit{produitsFiltres.length > 1 ? 's' : ''} trouvé{produitsFiltres.length > 1 ? 's' : ''}
          {(categorieActive !== 'tous' || regionActive !== 'tous' || prixMin || prixMax) && (
            <button 
              onClick={resetFilters}
              className="ml-4 text-sm text-amber-600 hover:text-amber-700"
            >
              Effacer les filtres
            </button>
          )}
        </div>

        {/* Grille de produits */}
        <ProductGrid produits={produitsFiltres} />

        {/* Message si aucun résultat */}
        {produitsFiltres.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow">
            <Search size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Aucun produit trouvé
            </h2>
            <p className="text-gray-500 mb-6">
              Essayez de modifier vos filtres
            </p>
            <button 
              onClick={resetFilters}
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}