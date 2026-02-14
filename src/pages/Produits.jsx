// src/pages/Produits.jsx
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'
import { produits, categories } from '../data/produitsData'

export default function Produits() {
  const [categorieActive, setCategorieActive] = useState('tous')
  const [prixMin, setPrixMin] = useState('')
  const [prixMax, setPrixMax] = useState('')

  // Filtrer les produits
  const produitsFiltres = produits.filter(produit => {
    // Filtre par catégorie
    if (categorieActive !== 'tous') {
      const catSelected = categories.find(c => c.id === categorieActive)
      if (produit.categorie !== catSelected?.nom) return false
    }
    
    // Filtre par prix
    if (prixMin && produit.prix < parseInt(prixMin)) return false
    if (prixMax && produit.prix > parseInt(prixMax)) return false
    
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-amber-800">
          Tous nos produits
        </h1>

        {/* Filtres */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            
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
                    {cat.nom}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtre prix min */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prix minimum (Ar)
              </label>
              <input
                type="number"
                value={prixMin}
                onChange={(e) => setPrixMin(e.target.value)}
                placeholder="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Filtre prix max */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prix maximum (Ar)
              </label>
              <input
                type="number"
                value={prixMax}
                onChange={(e) => setPrixMax(e.target.value)}
                placeholder="500000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Résultats */}
        <ProductGrid produits={produitsFiltres} />
      </div>

      <Footer />
    </div>
  )
}