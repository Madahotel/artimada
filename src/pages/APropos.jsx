// src/pages/APropos.jsx
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function APropos() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-amber-800">
          À propos d'ARTIMADA
        </h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-amber-700">
              Notre Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ARTIMADA est né d'une passion pour l'artisanat malgache. Notre mission est de 
              faire découvrir au monde entier le talent exceptionnel des artisans de Madagascar. 
              Chaque pièce que vous voyez sur notre site raconte une histoire, celle d'un 
              savoir-faire transmis de génération en génération.
            </p>
          </div>

          {/* Histoire */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-amber-700">
              Notre Histoire
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tout a commencé lors d'un voyage à Madagascar, où nous avons été émerveillés 
              par la richesse de l'artisanat local. Des sacs en rafia aux sculptures sur bois, 
              en passant par les lambas en soie sauvage, nous avons découvert un univers 
              de créativité et d'authenticité. De retour, nous avons créé ARTIMADA pour 
              partager ces trésors avec vous.
            </p>
          </div>

          {/* Engagement */}
          <div className="bg-amber-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-amber-800">
              Notre Engagement
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-bold mb-2 text-gray-800">Commerce Équitable</h3>
                <p className="text-gray-600">
                  Nous travaillons directement avec les artisans pour garantir une juste rémunération
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">🌿</div>
                <h3 className="font-bold mb-2 text-gray-800">Éco-responsable</h3>
                <p className="text-gray-600">
                  Matériaux naturels et techniques traditionnelles respectueuses de l'environnement
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">❤️</div>
                <h3 className="font-bold mb-2 text-gray-800">Authenticité</h3>
                <p className="text-gray-600">
                  Chaque pièce est unique, fabriquée à la main avec des méthodes ancestrales
                </p>
              </div>
            </div>
          </div>

          {/* Contact rapide */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Une question ? Une demande spéciale ?
            </h3>
            <a 
              href="https://wa.me/261341234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 
                       rounded-full hover:bg-green-700 transition font-semibold"
            >
              <span>📱</span>
              Contactez-nous sur WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}