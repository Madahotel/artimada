// src/pages/Accueil.jsx
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CategoriesNav from '../components/CategoriesNav'
import ProductGrid from '../components/ProductGrid'
import { produits } from '../data/produitsData'

export default function Accueil() {
  // Prendre les 4 premiers produits en vedette
  const produitsVedette = produits.slice(0, 4)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-800 to-amber-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Artisanat Malgache
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100">
              Découvrez le savoir-faire unique des artisans de Madagascar
            </p>
            <a 
              href="/produits"
              className="inline-block bg-white text-amber-800 px-8 py-4 rounded-full 
                       font-bold text-lg hover:bg-amber-100 transition shadow-lg"
            >
              Explorer nos produits →
            </a>
          </div>
        </div>
        {/* Motif décoratif */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" 
             style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}>
        </div>
      </section>

      {/* Catégories */}
      <CategoriesNav />

      {/* Produits en vedette */}
      <ProductGrid 
        produits={produitsVedette} 
        title="Produits en vedette"
      />

      {/* Section Artisans */}
      <section className="bg-amber-100 py-16 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-amber-800">
            Nos Artisans
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Chaque pièce est unique, créée avec passion par des artisans malgaches 
            qui perpétuent des traditions ancestrales.
          </p>
          <a 
            href="/artisans"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full 
                     hover:bg-amber-700 transition font-semibold"
          >
            Rencontrer les artisans
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}