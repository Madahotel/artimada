import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CategoriesNav from '../components/CategoriesNav'
import ProductGrid from '../components/ProductGrid'
import { produits, categories, stats } from '../data/produitsData'

export default function Accueil() {
  // Nouveautés - Prendre les 4 derniers produits
  const nouveautes = produits.slice(-4).reverse()

  // Meilleures ventes - On simule avec quelques produits populaires
  const meilleuresVentes = produits.filter(p => 
    ['BB-GIRAF', 'TT-JUMBO-XL', 'MACR-DISC', 'FSH-LOVA'].includes(p.id)
  )

  // Images pour la galerie hero
  const heroImages = [
    { src: '/images/hero/macrame-bag.jpg', alt: 'Sac en macramé', className: 'top-20 left-20 w-64 h-64 rotate-[-15deg]' },
    { src: '/images/hero/beach-bag.jpg', alt: 'Sac de plage', className: 'bottom-20 right-20 w-72 h-72 rotate-[10deg]' },
    { src: '/images/hero/straw-basket.jpg', alt: 'Panier en paille', className: 'top-40 right-40 w-56 h-56 rotate-[25deg]' },
    { src: '/images/hero/tote-bag.jpg', alt: 'Tote bag', className: 'bottom-40 left-40 w-60 h-60 rotate-[-5deg]' }
  ]

  // Images pour la section collections
  const collectionImages = {
    macrame: '/images/collections/macrame-collection.jpg',
    fashion: '/images/collections/fashion-collection.jpg',
    kids: '/images/collections/kids-collection.jpg',
    beach: '/images/collections/beach-collection.jpg',
    straw: '/images/collections/straw-collection.jpg',
    tote: '/images/collections/tote-collection.jpg'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <Navbar />
      
      {/* Hero Section avec images */}
      <section className="relative bg-gradient-to-r from-amber-800 to-amber-600 text-white overflow-hidden min-h-[600px] flex items-center">
        {/* Images décoratives */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-8xl animate-float">🪢</div>
          <div className="absolute bottom-10 right-10 text-8xl animate-float-delayed">🧺</div>
          <div className="absolute top-20 right-20 text-8xl animate-float-slow">🏖️</div>
        </div>

        {/* Galerie d'images flottantes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 rotate-[-15deg] animate-float-slow group">
              <div className="relative w-full h-full">
                <img 
                  src="/images/hero/macrame-bag.jpg" 
                  alt="Sac en macramé"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '../img/bagnoir.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">Macramé</div>
              </div>
            </div>

            <div className="absolute bottom-20 right-20 w-72 h-72 rotate-[10deg] animate-float">
              <div className="relative w-full h-full">
                <img 
                  src="/images/hero/beach-bag.jpg" 
                  alt="Sac de plage"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '../img/bagblanc.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">Plage</div>
              </div>
            </div>

            <div className="absolute top-40 right-40 w-56 h-56 rotate-[25deg] animate-float-delayed">
              <div className="relative w-full h-full">
                <img 
                  src="/images/hero/straw-basket.jpg" 
                  alt="Panier en paille"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '../img/bagblanc.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">Paille</div>
              </div>
            </div>

            <div className="absolute bottom-40 left-40 w-60 h-60 rotate-[-5deg] animate-float-slow">
              <div className="relative w-full h-full">
                <img 
                  src="/images/hero/tote-bag.jpg" 
                  alt="Tote bag"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '../img/bagblanc.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">Tote Bag</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl bg-amber-900/30 backdrop-blur-sm p-8 rounded-3xl border border-amber-500/20">
            <span className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm mb-6">
              🇲🇬 Artisanat Malgache
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
              ARTIMADA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100">
              Découvrez nos collections de sacs et paniers en raphia, rabane et macramé, 
              tissés à la main par nos artisans malgaches.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/produits"
                className="inline-block bg-white text-amber-800 px-8 py-4 rounded-full 
                         font-bold text-lg hover:bg-amber-100 transition shadow-lg transform hover:scale-105"
              >
                Explorer nos produits →
              </a>
              <a 
                href="https://wa.me/261349727107"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-full 
                         font-bold text-lg hover:bg-green-700 transition shadow-lg transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <span>📱</span>
                  Commander sur WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Motif décoratif */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" 
             style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="text-3xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition">{stats.totalProduits}+</div>
              <div className="text-gray-600">Produits artisanaux</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition">{stats.totalArtisans}</div>
              <div className="text-gray-600">Artisans partenaires</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition">{stats.totalCategories}</div>
              <div className="text-gray-600">Catégories</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition">{stats.totalRegions}</div>
              <div className="text-gray-600">Régions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories avec images */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">
            Nos Collections
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <a
                key={cat.id}
                href={`/categorie/${cat.id}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <img 
                    src={`/images/collections/${cat.id}-collection.jpg`}
                    alt={cat.nom}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '../img/bagblanc.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{cat.icon}</span>
                      <h3 className="text-2xl font-bold">{cat.nom}</h3>
                    </div>
                    <p className="text-sm text-gray-200 mb-2">{cat.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-300 font-semibold">{cat.count} articles</span>
                      <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm group-hover:bg-amber-700 transition">
                        Découvrir →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bannière promotionnelle avec image */}
      <section className="relative bg-gradient-to-r from-amber-700 to-amber-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/promo/pattern.jpg" 
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null
              e.target.style.display = 'none'
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Collection Été 2024
              </h2>
              <p className="text-xl text-amber-200 mb-6">
                Découvrez nos nouveaux modèles de sacs de plage en raphia
              </p>
              <a 
                href="/categorie/beach-bags"
                className="inline-block bg-white text-amber-800 px-8 py-3 rounded-full 
                         font-bold hover:bg-amber-100 transition transform hover:scale-105"
              >
                Voir la collection
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                <img 
                  src="/images/promo/beach-promo.jpg" 
                  alt="Collection été"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '../img/bagblanc.jpg'
                  }}
                />
                <div className="absolute -top-4 -right-4 bg-red-500 text-white w-20 h-20 rounded-full 
                              flex items-center justify-center font-bold text-xl rotate-12 shadow-lg">
                  -20%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nouveautés */}
      <ProductGrid 
        produits={nouveautes} 
        title="Nouveautés"
        subtitle="Les dernières créations de nos artisans"
      />

      {/* Meilleures ventes */}
      <ProductGrid 
        produits={meilleuresVentes} 
        title="Meilleures ventes"
        subtitle="Nos produits les plus populaires"
      />

      {/* Section Artisans avec image */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-amber-800">
                Nos Artisans
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chaque pièce est unique, créée avec passion par {stats.totalArtisans} artisans malgaches 
                qui perpétuent des traditions ancestrales. Derrière chaque sac, chaque panier, 
                il y a une histoire, un savoir-faire transmis de génération en génération.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/artisans"
                  className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full 
                           hover:bg-amber-700 transition font-semibold"
                >
                  Rencontrer les artisans
                </a>
                <a 
                  href="https://wa.me/261349727107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full 
                           hover:bg-amber-50 transition font-semibold"
                >
                  Devenir artisan partenaire
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/images/artisans/artisan-1.jpg" 
                    alt="Artisan au travail"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '../img/bagblanc.jpg'
                    }}
                  />
                  <img 
                    src="/images/artisans/artisan-2.jpg" 
                    alt="Tressage de raphia"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '../img/bagblanc.jpg'
                    }}
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="/images/artisans/artisan-3.jpg" 
                    alt="Artisan tissant"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '../img/bagblanc.jpg'
                    }}
                  />
                  <img 
                    src="/images/artisans/artisan-4.jpg" 
                    alt="Fierté artisanale"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '../img/bagblanc.jpg'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Instagram / Réseaux sociaux */}
      <section className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-amber-800">
            Suivez-nous sur Instagram
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez nos coulisses, les artisans au travail et les nouvelles collections en avant-première
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <a 
                key={i}
                href="https://instagram.com/artimada"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl aspect-square"
              >
                <img 
                  src={`/images/instagram/insta-${i}.jpg`}
                  alt={`Instagram ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '../img/bagblanc.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <span className="text-white text-sm">Voir sur Instagram →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Styles pour les animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rotate, 0deg)); }
          50% { transform: translateY(-20px) rotate(var(--rotate, 0deg)); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
          --rotate: 0deg;
        }
        
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite;
          animation-delay: 1s;
          --rotate: 0deg;
        }
        
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
          --rotate: 0deg;
        }
        
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  )
}