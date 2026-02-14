// src/pages/Artisans.jsx
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { produits } from '../data/produitsData'
import { MapPin, Phone, Mail, Award } from 'lucide-react'

export default function Artisans() {
  // Extraire la liste unique des artisans à partir des produits
  const artisansList = produits.reduce((acc, produit) => {
    if (!acc.find(a => a.nom === produit.artisan)) {
      acc.push({
        id: produit.id,
        nom: produit.artisan,
        region: produit.region,
        contact: produit.contact,
        specialite: produit.categorie,
        image: produit.image,
        produits: [produit]
      })
    } else {
      const artisan = acc.find(a => a.nom === produit.artisan)
      artisan.produits.push(produit)
    }
    return acc
  }, [])

  const [selectedArtisan, setSelectedArtisan] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section Artisans */}
      <section className="bg-gradient-to-r from-amber-800 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nos Artisans Malgaches
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Découvrez les talents exceptionnels qui perpétuent l'artisanat traditionnel de Madagascar
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">
              {artisansList.length}
            </div>
            <div className="text-gray-600">Artisans</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">
              {produits.length}
            </div>
            <div className="text-gray-600">Produits uniques</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">
              6
            </div>
            <div className="text-gray-600">Régions</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">
              50+
            </div>
            <div className="text-gray-600">Années d'expérience cumulées</div>
          </div>
        </div>

        {/* Grille des artisans */}
        <h2 className="text-2xl font-bold mb-8 text-amber-800">
          Rencontrez nos artisans
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisansList.map((artisan) => (
            <div 
              key={artisan.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative h-48">
                <img 
                  src={artisan.image} 
                  alt={artisan.nom}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{artisan.nom}</h3>
                  <p className="flex items-center gap-1 text-sm">
                    <MapPin size={14} />
                    {artisan.region}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award size={18} className="text-amber-600" />
                  <span className="text-sm font-medium text-amber-700">
                    Spécialiste en {artisan.specialite}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Artisan passionné avec {artisan.produits.length} pièces uniques
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {artisan.produits.slice(0, 3).map((prod, idx) => (
                    <span key={idx} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                      {prod.nom}
                    </span>
                  ))}
                  {artisan.produits.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      +{artisan.produits.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/${artisan.contact}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 
                             transition flex items-center justify-center gap-2"
                  >
                    <Phone size={16} />
                    Contacter
                  </a>
                  <button
                    onClick={() => setSelectedArtisan(artisan)}
                    className="flex-1 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 
                             transition"
                  >
                    Voir ses œuvres
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal des produits de l'artisan */}
        {selectedArtisan && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-amber-800">
                    {selectedArtisan.nom} - Ses créations
                  </h3>
                  <button 
                    onClick={() => setSelectedArtisan(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedArtisan.produits.map((produit) => (
                    <a 
                      key={produit.id}
                      href={`/produit/${produit.id}`}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition"
                    >
                      <img 
                        src={produit.image} 
                        alt={produit.nom}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">{produit.nom}</h4>
                        <p className="text-sm text-gray-600">{produit.description.substring(0, 50)}...</p>
                        <p className="text-amber-700 font-bold mt-1">{produit.prix?.toLocaleString()} Ar</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section appel aux artisans */}
      <section className="bg-amber-100 py-16 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-amber-800">
            Vous êtes artisan ?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Rejoignez notre communauté d'artisans malgaches et faites connaître votre travail au monde entier
          </p>
          <a 
            href="https://wa.me/261341234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full 
                     hover:bg-amber-700 transition font-semibold"
          >
            Devenir artisan partenaire
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}