// src/components/ProductGrid.jsx
import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ produits, title }) {
  return (
    <div className="container mx-auto px-4 py-8">
      {title && (
        <h2 className="text-2xl font-bold mb-8 text-amber-800">
          {title}
        </h2>
      )}
      
      {produits.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Aucun produit trouvé</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {produits.map((produit) => (
            <ProductCard key={produit.id} produit={produit} />
          ))}
        </div>
      )}
    </div>
  )
}