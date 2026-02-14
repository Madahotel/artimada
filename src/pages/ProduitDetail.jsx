// src/pages/ProduitDetail.jsx
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactButtons from '../components/ContactButtons'
import { produits } from '../data/produitsData'

export default function ProduitDetail() {
  const { id } = useParams()
  const [imageActive, setImageActive] = useState(0)
  
  const produit = produits.find(p => p.id === parseInt(id))

  if (!produit) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-700">Produit non trouvé</h1>
          <a href="/produits" className="text-amber-600 hover:text-amber-700 mt-4 inline-block">
            ← Retour aux produits
          </a>
        </div>
        <Footer />
      </div>
    )
  }

  const toutesImages = [produit.image, ...(produit.images || [])]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <a href="/produits" className="text-amber-600 hover:text-amber-700 mb-6 inline-block">
          ← Retour aux produits
        </a>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            
            {/* Galerie d'images */}
            <div>
              <div className="relative h-96 rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img 
                  src={toutesImages[imageActive]} 
                  alt={produit.nom}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {toutesImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {toutesImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setImageActive(index)}
                      className={`relative h-24 rounded-lg overflow-hidden border-2 
                        ${imageActive === index ? 'border-amber-600' : 'border-transparent'}`}
                    >
                      <img 
                        src={img} 
                        alt={`${produit.nom} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Informations produit */}
            <div>
              <h1 className="text-3xl font-bold mb-4 text-gray-800">
                {produit.nom}
              </h1>
              
              <div className="bg-amber-50 p-6 rounded-xl mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-amber-800 font-semibold">Artisan:</span>
                  <span className="text-gray-700">{produit.artisan}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-800 font-semibold">Région:</span>
                  <span className="text-gray-700">{produit.region}</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3 text-gray-800">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {produit.description}
                </p>
              </div>

              {produit.prix && (
                <div className="mb-8">
                  <span className="text-3xl font-bold text-amber-800">
                    {produit.prix.toLocaleString()} Ar
                  </span>
                </div>
              )}

              <ContactButtons produit={produit} />

              {/* Informations supplémentaires */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold mb-4 text-gray-800">
                  Informations complémentaires
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Fait main à Madagascar</li>
                  <li>✓ Matériaux naturels</li>
                  <li>✓ Pièce unique</li>
                  <li>✓ Prix direct artisan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}