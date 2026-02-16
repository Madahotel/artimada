import React from 'react'
import { MapPin, ShoppingBag } from 'lucide-react'

export default function ProductCard({ produit }) {
  return (
    <a 
      href={`/produit/${produit.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl 
                 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={produit.image} 
          alt={produit.nom}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {produit.prix?.toFixed(2)} USD
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-gray-800 group-hover:text-amber-700">
          {produit.nom}
        </h3>
        
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {produit.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            {produit.region}
          </span>
          <span className="flex items-center gap-1">
            <ShoppingBag size={14} />
            {produit.artisan}
          </span>
        </div>
      </div>
    </a>
  )
}