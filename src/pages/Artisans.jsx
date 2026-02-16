import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { produits, stats } from '../data/produitsData'
import { MapPin, Phone, Mail, Award, Star, Clock, ShoppingBag } from 'lucide-react'

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

  // Ajouter des photos d'artisans variées
  const artisansAvecPhotos = artisansList.map((artisan, index) => ({
    ...artisan,
    photo: `/images/artisans/artisan-${(index % 8) + 1}.jpg`, // À créer dans le dossier public
    experience: Math.floor(Math.random() * 20) + 5, // 5-25 ans d'expérience
    specialites: [...new Set(artisan.produits.map(p => p.categorie))]
  }))

  const [selectedArtisan, setSelectedArtisan] = useState(null)
  const [filterRegion, setFilterRegion] = useState('tous')
  const [filterSpecialite, setFilterSpecialite] = useState('tous')

  // Filtrer les artisans
  const artisansFiltres = artisansAvecPhotos.filter(artisan => {
    if (filterRegion !== 'tous' && artisan.region !== filterRegion) return false
    if (filterSpecialite !== 'tous' && !artisan.specialites.includes(filterSpecialite)) return false
    return true
  })

  // Options de filtres
  const regions = ['tous', ...new Set(artisansAvecPhotos.map(a => a.region))]
  const specialites = ['tous', ...new Set(artisansAvecPhotos.flatMap(a => a.specialites))]

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
            Rencontrez les talents exceptionnels qui perpétuent l'artisanat traditionnel de Madagascar
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filtres */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filtrer par région
              </label>
              <select
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
              >
                {regions.map(region => (
                  <option key={region} value={region}>
                    {region === 'tous' ? 'Toutes les régions' : region}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filtrer par spécialité
              </label>
              <select
                value={filterSpecialite}
                onChange={(e) => setFilterSpecialite(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
              >
                {specialites.map(spec => (
                  <option key={spec} value={spec}>
                    {spec === 'tous' ? 'Toutes les spécialités' : spec}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">
              {artisansList.length}
            </div>
            <div className="text-gray-600">Artisans</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">
              {stats.totalProduits}
            </div>
            <div className="text-gray-600">Produits</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">
              {stats.totalRegions}
            </div>
            <div className="text-gray-600">Régions</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">
              {Math.round(artisansAvecPhotos.reduce((acc, a) => acc + a.experience, 0) / artisansAvecPhotos.length)}+
            </div>
            <div className="text-gray-600">Ans d'expérience (moy.)</div>
          </div>
        </div>

        {/* Résultats de filtrage */}
        <div className="mb-4 text-gray-600">
          {artisansFiltres.length} artisan{artisansFiltres.length > 1 ? 's' : ''} trouvé{artisansFiltres.length > 1 ? 's' : ''}
        </div>

        {/* Grille des artisans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisansFiltres.map((artisan) => (
            <div 
              key={artisan.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
            >
              <div className="relative h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                <img 
                  src={artisan.photo} 
                  alt={artisan.nom}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-4 left-4 text-white z-20">
                  <h3 className="text-xl font-bold">{artisan.nom}</h3>
                  <p className="flex items-center gap-1 text-sm text-amber-200">
                    <MapPin size={14} />
                    {artisan.region}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-20">
                  {artisan.experience} ans d'exp.
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award size={18} className="text-amber-600" />
                  <span className="text-sm font-medium text-amber-700">
                    Spécialiste en :
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {artisan.specialites.map((spec, idx) => (
                    <span key={idx} className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <ShoppingBag size={16} />
                  <span className="text-sm">{artisan.produits.length} pièces uniques</span>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/${artisan.contact}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-700 
                             transition flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    <Phone size={16} />
                    WhatsApp
                  </a>
                  <button
                    onClick={() => setSelectedArtisan(artisan)}
                    className="flex-1 bg-amber-600 text-white px-4 py-2.5 rounded-lg hover:bg-amber-700 
                             transition text-sm font-medium"
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
                  <div>
                    <h3 className="text-2xl font-bold text-amber-800">
                      {selectedArtisan.nom}
                    </h3>
                    <p className="text-gray-600 flex items-center gap-1 mt-1">
                      <MapPin size={14} />
                      {selectedArtisan.region}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedArtisan(null)}
                    className="text-gray-500 hover:text-gray-700 w-8 h-8 rounded-full hover:bg-gray-100 
                             flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
                
                <h4 className="font-semibold mb-4 text-gray-800">
                  Ses créations ({selectedArtisan.produits.length})
                </h4>
                
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
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-800">{produit.nom}</h5>
                        <p className="text-xs text-gray-500 mb-1">{produit.categorie}</p>
                        <p className="text-sm text-gray-600 line-clamp-2">{produit.description}</p>
                        <p className="text-amber-700 font-bold mt-2">
                          {produit.prix?.toFixed(2)} USD
                        </p>
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
      <section className="bg-gradient-to-r from-amber-100 to-amber-200 py-16 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-amber-800">
            Vous êtes artisan ?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Rejoignez notre communauté d'artisans malgaches et faites connaître votre travail au monde entier
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://wa.me/261349727107"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full 
                       hover:bg-green-700 transition font-semibold"
            >
              Devenir artisan partenaire
            </a>
            <a 
              href="/contact"
              className="inline-block bg-white text-amber-600 px-8 py-3 rounded-full 
                       border-2 border-amber-600 hover:bg-amber-50 transition font-semibold"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}