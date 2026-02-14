// src/components/ContactButtons.jsx
import React from 'react'
import { Phone, Mail } from 'lucide-react'

export default function ContactButtons({ produit }) {
  const message = `Bonjour, je suis intéressé(e) par le produit : ${produit.nom}
- Artisan: ${produit.artisan}
- Région: ${produit.region}
- Prix: ${produit.prix?.toLocaleString() || 'À discuter'} Ar

Pouvez-vous me donner plus d'informations ?`

  const whatsappLink = `https://wa.me/${produit.contact || '261341234567'}?text=${encodeURIComponent(message)}`
  const emailLink = `mailto:?subject=Commande ARTIMADA - ${produit.nom}&body=${encodeURIComponent(message)}`

  return (
    <div className="space-y-3">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-green-600 text-white px-6 py-3 rounded-xl 
                 hover:bg-green-700 transition flex items-center justify-center gap-3 
                 font-semibold text-lg"
      >
        <Phone size={20} />
        Commander sur WhatsApp
      </a>
      
      <a
        href={emailLink}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl 
                 hover:bg-blue-700 transition flex items-center justify-center gap-3 
                 font-semibold text-lg"
      >
        <Mail size={20} />
        Envoyer un email
      </a>
      
      <p className="text-xs text-gray-500 text-center mt-2">
        Vous serez mis directement en relation avec l'artisan
      </p>
    </div>
  )
}