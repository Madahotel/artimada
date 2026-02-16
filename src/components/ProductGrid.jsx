import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ produits, title, subtitle }) {
  if (!produits || produits.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Aucun produit disponible</p>
      </div>
    )
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-8">
            {title && <h2 className="text-3xl font-bold text-amber-800 mb-2">{title}</h2>}
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {produits.map((produit) => (
            <ProductCard key={produit.id} produit={produit} />
          ))}
        </div>
      </div>
    </section>
  )
}