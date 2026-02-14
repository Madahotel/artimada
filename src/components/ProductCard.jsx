// src/components/ProductCard.jsx
import React from 'react'
import { Phone, Mail, Eye } from 'lucide-react'

export default function ProductCard({ produit }) {
  const message = `Bonjour, je suis intéressé(e) par : ${produit.nom} (Artisan: ${produit.artisan})`
  const whatsappLink = `https://wa.me/${produit.contact}?text=${encodeURIComponent(message)}`
  const emailLink = `mailto:?subject=Commande ARTIMADA - ${produit.nom}&body=${encodeURIComponent(message)}`

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
      
      {/* Image */}
      <a href={`/produit/${produit.id}`} className="block relative h-64 overflow-hidden">
        <img 
          src={produit.image} 
          alt={produit.nom}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
        {produit.prix && (
          <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {produit.prix.toLocaleString()} Ar
          </div>
        )}
      </a>

      {/* Contenu */}
      <div className="p-5">
        <a href={`/produit/${produit.id}`}>
          <h3 className="font-bold text-xl mb-1 text-gray-800 hover:text-amber-700">
            {produit.nom}
          </h3>
        </a>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
            {produit.artisan}
          </span>
          <span className="text-xs text-gray-500">
            • {produit.region}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {produit.description}
        </p>

        {/* Boutons de contact */}
        <div className="flex gap-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white px-3 py-2 rounded-xl hover:bg-green-700 
                     transition flex items-center justify-center gap-2 text-sm"
          >
            <Phone size={16} />
            WhatsApp
          </a>
          
          <a
            href={emailLink}
            className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-xl hover:bg-blue-700 
                     transition flex items-center justify-center gap-2 text-sm"
          >
            <Mail size={16} />
            Email
          </a>
          
          <a
            href={`/produit/${produit.id}`}
            className="bg-gray-100 text-gray-700 p-2 rounded-xl hover:bg-gray-200 
                     transition flex items-center justify-center"
          >
            <Eye size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}