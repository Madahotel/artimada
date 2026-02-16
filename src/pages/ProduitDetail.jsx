import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { produits } from '../data/produitsData'
import { Phone, Mail, MapPin, Award, Package, Heart, Share2 } from 'lucide-react'

export default function ProduitDetail() {
  const { id } = useParams()
  const [imageActive, setImageActive] = useState(0)
  const [quantity, setQuantity] = useState(1)
  
  const produit = produits.find(p => p.id === id)

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

  // Simuler des images supplémentaires
  const toutesImages = [
    produit.image,
    `/images/${produit.categorie.toLowerCase().replace(' ', '-')}/${produit.id}-2.jpg`,
    `/images/${produit.categorie.toLowerCase().replace(' ', '-')}/${produit.id}-3.jpg`,
    `/images/${produit.categorie.toLowerCase().replace(' ', '-')}/${produit.id}-4.jpg`,
  ].filter(img => img !== produit.image) // Filtrer les doublons éventuels

  // Produits similaires (même catégorie)
  const produitsSimilaires = produits
    .filter(p => p.categorie === produit.categorie && p.id !== produit.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Fil d'Ariane */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-amber-600">Accueil</a>
          <span>/</span>
          <a href="/produits" className="hover:text-amber-600">Produits</a>
          <span>/</span>
          <a href={`/categorie/${produit.categorie.toLowerCase().replace(' ', '-')}`} className="hover:text-amber-600">
            {produit.categorie}
          </a>
          <span>/</span>
          <span className="text-gray-800">{produit.nom}</span>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            
            {/* Galerie d'images */}
            <div>
              <div className="relative h-96 rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img 
                  src={toutesImages[imageActive] || produit.image} 
                  alt={produit.nom}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                  <Heart size={20} className="text-gray-600" />
                </button>
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
                  <Award size={18} className="text-amber-600" />
                  <span className="text-amber-800 font-semibold">Artisan:</span>
                  <span className="text-gray-700">{produit.artisan}</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={18} className="text-amber-600" />
                  <span className="text-amber-800 font-semibold">Région:</span>
                  <span className="text-gray-700">{produit.region}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package size={18} className="text-amber-600" />
                  <span className="text-amber-800 font-semibold">Catégorie:</span>
                  <span className="text-gray-700">{produit.categorie}</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3 text-gray-800">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {produit.description} Ce modèle {produit.nom} est réalisé entièrement à la main 
                  par {produit.artisan} dans la région de {produit.region}. Chaque pièce est unique 
                  et peut présenter de légères variations, gage de son authenticité.
                </p>
              </div>

              {/* Prix */}
              <div className="mb-8">
                <span className="text-sm text-gray-500">Prix</span>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-amber-800">
                    {produit.prix?.toFixed(2)} USD
                  </span>
                  <span className="text-sm text-gray-500">(prix direct artisan)</span>
                </div>
              </div>

              {/* Quantité */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantité
                </label>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border rounded-lg hover:bg-gray-100"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 text-center border rounded-lg py-2"
                    min="1"
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border rounded-lg hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Boutons de contact */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${produit.contact}?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20produit%20${produit.nom}%20(prix%20${produit.prix}%20USD)`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 text-white px-6 py-4 
                           rounded-xl hover:bg-green-700 transition font-semibold text-lg"
                >
                  <Phone size={20} />
                  Commander sur WhatsApp
                </a>
                
                <a
                  href={`mailto:groupartimada@gmail.com?subject=Commande%20${produit.nom}&body=Bonjour%2C%20je%20souhaite%20commander%20le%20produit%20${produit.nom}%20(prix%20${produit.prix}%20USD)`}
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-4 
                           rounded-xl hover:bg-blue-700 transition font-semibold"
                >
                  <Mail size={20} />
                  Demande par email
                </a>
              </div>

              {/* Informations complémentaires */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold mb-4 text-gray-800">
                  Informations complémentaires
                </h3>
                <ul className="grid grid-cols-2 gap-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> Fait main
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> Matériaux naturels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> Pièce unique
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> Prix direct artisan
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> Livraison mondiale
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> Paiement sécurisé
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Produits similaires */}
        {produitsSimilaires.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Vous aimerez aussi
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {produitsSimilaires.map(prod => (
                <a 
                  key={prod.id}
                  href={`/produit/${prod.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                >
                  <img 
                    src={prod.image} 
                    alt={prod.nom}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-sm mb-1">{prod.nom}</h3>
                    <p className="text-amber-600 font-bold text-sm">{prod.prix} USD</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}