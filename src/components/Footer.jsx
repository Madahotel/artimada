// src/components/Footer.jsx
import React from 'react'
import { Heart, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🇲🇬</span>
              ARTIMADA
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Célébrons l'artisanat malgache et soutenons nos artisans. 
              Chaque achat est un geste pour préserver un savoir-faire unique.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition">Accueil</a>
              </li>
              <li>
                <a href="/produits" className="hover:text-white transition">Produits</a>
              </li>
              <li>
                <a href="/artisans" className="hover:text-white transition">Artisans</a>
              </li>
              <li>
                <a href="/a-propos" className="hover:text-white transition">À propos</a>
              </li>
            </ul>
          </div>

          {/* Catégories populaires */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Catégories</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/categorie/sacs" className="hover:text-white transition">Sacs et paniers</a>
              </li>
              <li>
                <a href="/categorie/chapeaux" className="hover:text-white transition">Chapeaux</a>
              </li>
              <li>
                <a href="/categorie/plats" className="hover:text-white transition">Plats et vaisselle</a>
              </li>
              <li>
                <a href="/categorie/sculptures" className="hover:text-white transition">Sculptures</a>
              </li>
              <li>
                <a href="/categorie/lambas" className="hover:text-white transition">Lambas</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Antananarivo, Madagascar</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="https://wa.me/261341234567" className="hover:text-white transition">
                  +261 34 12 345 67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:contact@artimada.mg" className="hover:text-white transition">
                  contact@artimada.mg
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2024 ARTIMADA - Tous droits réservés</p>
            <p className="flex items-center gap-1 mt-2 md:mt-0">
              Fait avec <Heart size={14} className="text-red-500 fill-current" /> pour Madagascar
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}