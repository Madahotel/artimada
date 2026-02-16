import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { stats } from '../data/produitsData'
import { MapPin, Phone, Mail, Award, Heart, Users, Target, Globe } from 'lucide-react'

export default function APropos() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-800 to-amber-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            À propos d'ARTIMADA
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Depuis 2018, nous valorisons l'artisanat malgache à travers le monde
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Notre Histoire */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-amber-700">
              Notre Histoire
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ARTIMADA est né d'une passion pour l'artisanat malgache. Tout a commencé lors d'un voyage 
              à Madagascar où nous avons découvert la richesse du savoir-faire local : le tressage du raphia, 
              la vannerie en paille naturelle, le macramé traditionnel et les tissages en rabane.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Aujourd'hui, nous collaborons avec plus de {stats.totalArtisans} artisans à travers 
              {stats.totalRegions} régions de Madagascar, proposant une collection de plus de {stats.totalProduits} 
              pièces uniques, toutes faites à la main avec des matériaux naturels.
            </p>
          </div>

          {/* Mission et Valeurs */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Notre Mission</h3>
              <p className="text-gray-600">
                Faire découvrir au monde entier le talent exceptionnel des artisans malgaches 
                et promouvoir un artisanat éthique et durable.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Notre Vision</h3>
              <p className="text-gray-600">
                Devenir la référence internationale de l'artisanat malgache tout en préservant 
                les techniques traditionnelles et en assurant un revenu juste aux artisans.
              </p>
            </div>
          </div>

          {/* Engagement */}
          <div className="bg-amber-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-amber-800">
              Nos Engagements
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3 bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto">🤝</div>
                <h3 className="font-bold mb-2 text-gray-800">Commerce Équitable</h3>
                <p className="text-gray-600 text-sm">
                  Nous travaillons directement avec les artisans pour garantir une juste rémunération, 
                  sans intermédiaires
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3 bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto">🌿</div>
                <h3 className="font-bold mb-2 text-gray-800">Éco-responsable</h3>
                <p className="text-gray-600 text-sm">
                  Matériaux 100% naturels (raphia, paille, rabane) et techniques traditionnelles 
                  respectueuses de l'environnement
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3 bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto">❤️</div>
                <h3 className="font-bold mb-2 text-gray-800">Authenticité</h3>
                <p className="text-gray-600 text-sm">
                  Chaque pièce est unique, fabriquée à la main avec des méthodes transmises 
                  de génération en génération
                </p>
              </div>
            </div>
          </div>

          {/* Collections */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-amber-700">
              Nos Collections
            </h2>
            <p className="text-gray-700 mb-6">
              Nous proposons 6 collections principales d'artisanat malgache :
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-amber-50 p-4 rounded-xl text-center">
                <span className="text-3xl block mb-2">🪢</span>
                <span className="font-medium">Macramé Bags</span>
                <span className="text-xs text-gray-500 block mt-1">12 modèles</span>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl text-center">
                <span className="text-3xl block mb-2">👝</span>
                <span className="font-medium">Fashion Bags</span>
                <span className="text-xs text-gray-500 block mt-1">28 modèles</span>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl text-center">
                <span className="text-3xl block mb-2">🧸</span>
                <span className="font-medium">Articles Enfants</span>
                <span className="text-xs text-gray-500 block mt-1">22 modèles</span>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl text-center">
                <span className="text-3xl block mb-2">🏖️</span>
                <span className="font-medium">Sacs de Plage</span>
                <span className="text-xs text-gray-500 block mt-1">25 modèles</span>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl text-center">
                <span className="text-3xl block mb-2">🧺</span>
                <span className="font-medium">Paniers Naturels</span>
                <span className="text-xs text-gray-500 block mt-1">35 modèles</span>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl text-center">
                <span className="text-3xl block mb-2">🛍️</span>
                <span className="font-medium">Tote Bags</span>
                <span className="text-xs text-gray-500 block mt-1">18 modèles</span>
              </div>
            </div>
          </div>

          {/* Contact rapide */}
          <div className="text-center bg-gradient-to-r from-amber-600 to-amber-800 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">
              Une question ? Une demande spéciale ?
            </h3>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/261349727107"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 
                         rounded-full hover:bg-green-700 transition font-semibold"
              >
                <Phone size={18} />
                WhatsApp: +261 34 97 271 07
              </a>
              <a 
                href="mailto:groupartimada@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-amber-800 px-8 py-3 
                         rounded-full hover:bg-amber-100 transition font-semibold"
              >
                <Mail size={18} />
                groupartimada@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}